import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import Home from './components/home'
import todolists from './components/todolist'
import todoVuex from  './components/todo-vuex'
import  counter from  './components/counter'
import  counterhot from  './components/counter-hot'
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
    },
    {
      path:'/counter',
      component: counter
    },
    {
      path:'/counterhot',
      component: counterhot
    }
]
})


export default router;
