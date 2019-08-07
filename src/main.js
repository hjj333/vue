import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from '../src/assets/images/loading.gif'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './mock/mockServer'
// 注册全局组件标签<mt-button>
Vue.component(Button.name, Button)
// 使用图片懒加载插件
Vue.use(VueLazyload, {
  loading
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
