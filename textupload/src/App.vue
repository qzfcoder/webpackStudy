<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="tinymce-editor">
    <div id="tinymceToolbar"></div>
    <vue-tinymce
      ref="editor"
      class="editor overflow-scroll"
      v-model="content"
      :setting="setting" 
      :setup="setup"
      @keyup.native="$emit('editorChange', content)"
    />
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
data() {
    return {
      // 编辑器内容
      content: '',
      // 编辑器设置
      setting: {
        inline: true,  // 设置内敛模式
        menubar: false, // 隐藏菜单栏
        toolbar:
          'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
    　　　　styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    　　　　table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs | myUpload',
           // 工具栏，根据需要写对应的工具名称，顺序及分割线等等，这里的最后的 ‘myUpload’ 是下面setup里的自定义插件
        toolbar_mode: 'sliding', // 工具栏模式，这里是滑行模式（当屏幕过小时，多余的工具会隐藏，点击更多按钮会出现其他工具，这里配置出现的特效）
        plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help 　　　　　　　　　emoticons autosave bdmap indent2em autoresize formatpainter axupimgs', 　　　　　　　　　　// 需要用到的功能插件，如链接，列表等等
        language: 'zh_CN', // 语言，汉化
        branding: false, // 隐藏品牌，隐藏状态栏中显示的“ Powered by Tiny ”链接
        resize: false, // 是否可以缩放编辑器
        elementpath: false, // 在编辑器底部的状态栏中禁用元素路径。
        fixed_toolbar_container: '#tinymceToolbar', // 可以设置元素选择器指定工具栏嵌套在哪个元素里面
        custom_ui_selector: 'body', // 聚焦的元素
        noneditable_noneditable_class: 'mceNonEditable', // 使用此选项，您可以指定TinyMCE将使用的类名称，以确定使用noneditable插件时可编辑哪些内容区域。主要用入你想以代码的形式添加某些内容，并给这些内容设置类名，使他们不可编辑，只能整个删除
        init_instance_callback: editor => {
          editor.focus() // 初始化聚焦，让内联模式的编辑器工具显示
        },
        images_upload_handler: function (blobInfo, succFun, failFun) {
          var xhr, formData;
          var file = blobInfo.blob();//转化为易于理解的file对象
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', 'http://106.13.75.57:8700/userinfo/uploadImage');
          xhr.setRequestHeader('accessToken', 'ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcWRHa2lPaUl4TnpnMk5qVXpOekl6TWpNaUxDSnBZWFFpT2pFMk16azNPVEV4TVRVc0luTjFZaUk2SW50Y0ltRmtaSEpsYzNOY0lqcGNJdWVSbnVlLWp1V0JwZVc2dC1TNnAtUzRtdVdiclZ3aUxGd2lZWFpoZEdGeVhDSTZYQ0pvZEhSd09pOHZkR1Z6ZEM1cGNtVmhiR05oY21VdVkyOXRMeTlwYldGblpYTXZZWEJ3YkdWMEx6STRMM1Z6WlhJdk1TNXFjR2RjSWl4Y0ltTnZiWEJoYm5sSlpGd2lPakVzWENKcFpGd2lPakk0TEZ3aWFXNXpkR2wwZFhScGIyNWNJanBjSXVlUm51V3dsT1d1aWVXX2cxd2lMRndpYm1samEwNWhiV1ZjSWpwY0luUmxjM1JjSWl4Y0luQmhjM04zYjNKa1hDSTZYQ0pqTXpNek5qYzNNREUxTVRGaU5HWTJNREl3WldNMk1XUmxaRE0xTWpBMU9Wd2lMRndpY0dodmJtVmNJanBjSWpFM09EWTJOVE0zTWpNeU0xd2lMRndpY21WbmFXOXVYQ0k2WENMbXRabm1zWl9ubklIbW5hM2x0NTdsdUlMb2tLZmxzYkhsakxwY0luMGlMQ0psZUhBaU9qRTJOREF6T1RVNU1UVjkuWjk2SE5lVGxCODJtdGI2al9rNE1IM2oyeG1HQ1VCeFJFd1Z3MzJJd0FrMA')
          xhr.onload = function() {
              var json;
              if (xhr.status != 200) {
                  failFun('HTTP Error: ' + xhr.status);
                  return;
              }
              console.log(xhr)
              console.log(xhr.responseText)
              json = JSON.parse(xhr.responseText);
              console.log(json)
              console.log(json.location)
              if (!json || typeof json.data[0] != 'string') {
                  failFun('Invalid JSON: ' + xhr.responseText);
                  return;
              }
              succFun(json.data[0]);
          };
          formData = new FormData();
          formData.append('file', file, file.name );//此处与源文档不一样
          xhr.send(formData);
        },
        file_picker_callback: function(callback, value, meta) {
          if (meta.filetype == 'file') {
            callback('mypage.html', {text: 'My text'});
          }
          // Provide image and alt text for the image dialog
          if (meta.filetype == 'image') {
              callback('myimage.jpg', {alt: 'My alt text'});
          }
          // Provide alternative source and posted for the media dialog
          if (meta.filetype == 'media') {
              callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
          }
        },
      },
    }
  },
  methods: {
    /**
     * @description: 编辑器setup
     * @author: Depp_ck
     */
    setup(editor) {
        // 自定义插件实现自定义工具栏按钮功能
      editor.ui.registry.addButton('myUpload', {
        tooltip: '上传',
        icon: 'browse',
        onAction: () => {
          console.log('点击了上传')
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tinymce-editor {
  padding: 20px;
  position: relative;
  .editor {
    padding: 10px;
    border: 1px solid #ddd;
    height: 410px;
    font-size: 16px;
    line-height: 1.4;
    overflow-y: scroll;
  }
}
</style>
