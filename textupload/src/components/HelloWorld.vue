<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024; // 切片大小
export default {
  data: () => ({
    container: {
      file: null,
    },
    data: [],
  }),
  methods: {
    request({ url, method = "post", data, headers = {}, requestList }) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach((key) =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = (e) => {
          resolve({
            data: e.target.response,
          });
        };
      });
    },
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    createFileChunk(file, size = SIZE) {
      console.log("切分文件");
      const fileChunkList = [];
      let cur = 0;
      console.log(file.size);
      while (cur < file.size) {
        // file.slice对文件进行分块
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          // 对象的结构
          // console.log("chunk", chunk);
          // console.log("hash", hash);
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          console.log(formData);
          return { formData };
        })
        .map(async ({ formData }) => {
          this.request({
            url: "http://localhost:3000",
            data: formData,
          });
        });
      await Promise.all(requestList);
      // 合并切片
      await this.mergeRequest();
    },
    async mergeRequest() { // 发送合并请求
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json",
        },
        data: JSON.stringify({
          size: SIZE,
          filename: this.container.file.name,
        }),
      });
    },
    async handleUpload() {
      console.log("click");
      console.log(this.container.file);
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index, // 文件名 + 数组下标
      }));
      console.log(this.data);
      await this.uploadChunks();
    },
  },
};
// 当点击上传按钮时，调用 createFileChunk 将文件切片，
// 切片数量通过文件大小控制，这里设置 10MB，也就是说 100 MB 的文件会被分成 10 个切片
// createFileChunk 内使用 while 循环和 slice 方法将切片放入 fileChunkList 数组中返回
// 在生成文件切片时，需要给每个切片一个标识作为 hash，这里暂时使用文件名 + 下标，
// 这样后端可以知道当前切片是第几个切片，用于之后的合并切片
// 随后调用 uploadChunks 上传所有的文件切片，将文件切片，切片 hash，以及文件名放入 FormData 中，
//再调用上一步的 request 函数返回一个 proimise，最后调用 Promise.all 并发上传所有的切片
</script>
