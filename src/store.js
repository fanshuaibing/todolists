import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    number: 1,
    odevity: 'odd',
    todos: [
      {content: '第一个todo', completed: true, deleted: false},
      {content: '第二个todo', completed: false, deleted: false},
      {content: '第三个todo', completed: false, deleted: false},
      {content: '第四个todo', completed: true, deleted: false}
    ]
  },
  mutations: {
    add(state, todolist) {
      let todo = {content: todolist, completed: false, deleted: false}
      state.todos.push(todo)
    },
    deleteTodo(state, todo) {
      todo.deleted = true
    }
    ,
    completedTodo(state, todo) {
      todo.completed = true
    },
    addNumber(state) {
      state.number = state.number + 1
      state.odevity =   state.number % 2 === 0 ? 'even' : 'odd' ;
    },

  }
})


export default store
