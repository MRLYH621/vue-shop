import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$message = Message
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
