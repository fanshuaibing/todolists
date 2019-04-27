<template>
	<div class="todolists">
		<input type="text" v-model="todolist">
		<button @click="adder">添加</button>
		<div v-for="todo in todos" v-if="!todo.completed && !todo.deleted ">
			<button @click="innercompleted(todo)"> 完成</button>

			<span >{{todo.content}}</span>
			<button @click="innerdelete(todo) ">删除</button>



		</div>
	</div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "todo-vuex",
    data() {
      return {
        todolist: ''
      }
    },
    computed: {
      ...mapState(['todos'])

    },
    methods: {
      ...mapMutations(['add', 'deleteTodo', "completedTodo"]),
      adder() {
        if (!this.todolist) return ;
        console.log(this.todolist);
        this.add(this.todolist)
        this.todolist = ''
      },
      innerdelete(todo) {
        this.deleteTodo(todo)
      },
      innercompleted(todo){
        this.completedTodo(todo)
      }
    }
  }
</script>

<style scoped>

</style>
