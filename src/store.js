import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    todos: [
      {content: '第一个todo', completed: true, deleted: false},
      {content: '第二个todo', completed: false, deleted: false},
      {content: '第三个todo', completed: false, deleted: false},
      {content: '第四个todo', completed: true, deleted: false}
    ]
  },
  mutations: {
    add(state,todolist) {
      let todo = {content: todolist ,completed: false ,deleted: false}
      state.todos.push(todo)
    },
    deleteTodo(state,todo) {
      todo.deleted = true
    }
    ,
    completedTodo(state,todo) {
      todo.completed = true
    }
  }
})


export default store
