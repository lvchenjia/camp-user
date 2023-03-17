import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

var axios = require('axios')
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://121.4.75.164:8090/api'

//钩子函数，访问路由前调用
router.beforeEach((to, from, next) => {
  //路由需要认证
  if (to.meta.requireAuth) {
    //判断store里是否有token
    if (store.state.token) {
      next()
    } else {
      next({
        path: 'login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
}
)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
