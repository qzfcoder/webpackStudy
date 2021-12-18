import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
import tinymce from '../public/tinymce/tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
Vue.prototype.$tinymce = tinymce
Vue.use(VueTinymce)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
