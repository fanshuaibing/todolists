import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import Home from './components/home'
import todolists from './components/todolist'
const router = new Router({
  routes:[
    {
      path: '/',
      component:  Home
    },
    {
      path: '/todolists',
      component: todolists
    }
]
})


export default router;
