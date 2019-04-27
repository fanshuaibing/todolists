import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import Home from './components/home'
import todolists from './components/todolist'
import todoVuex from  './components/todo-vuex'
const router = new Router({
  routes:[
    {
      path: '/',
      component:  Home
    },
    {
      path: '/todolists',
      component: todolists
    },
    {
      path:'/todo-vuex',
      component: todoVuex
    }
]
})


export default router;
