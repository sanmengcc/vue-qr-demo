import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入ElementUI依赖
import ElementUI from 'element-ui'
//导入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

Vue.prototype.$axios = axios
//使用ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false
//使用ElementUI
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
