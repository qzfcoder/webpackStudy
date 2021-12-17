<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024; // 切片大小
export default {
  data: () => ({
    container: {
      file: null,
    },
    data: []
  }),
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      // console.log(e.target.files)
      // console.log(file)
      if (!file) return;
      // console.log(this.$data);
      Object.assign(this.$data, this.$options.data());
      // console.log(this.$data);
      // console.log(this.$options.data());
      // console.log(this.container.file);
      this.container.file = file;
    },
    async handleUpload() {},
  },
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
};
</script>
