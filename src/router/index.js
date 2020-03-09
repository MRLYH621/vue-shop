import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import quanxian from '../components/quanxian.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/quanxian', component: quanxian }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
