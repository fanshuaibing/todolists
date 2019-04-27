<template>
	<div class="todolists">
		<input type="text" v-model="todo">
		<button v-on:click="add">添加</button>
		<div v-for="(todo , index) in  todos" :key="index" v-if="!todo.completed && !todo.deleted ">
			<span class="circle" @click="completedTodo(todo)"></span>
			<span>{{todo.content}}
			</span>
			<button @click="deleteTodo(todo)">X</button>
		</div>
		<div class="completed">
			<h2>已完成</h2>
			<div v-for="(todo,index) in todos" v-if="todo.completed">
				{{todo.content}}
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'todolists',
    data() {
      return {
        todo: '',
        todos: [
          {content: '第一个todo', completed: true, deleted: false},
          {content: '第二个todo', completed: false, deleted: false},
          {content: '第三个todo', completed: false, deleted: false},
          {content: '第四个todo', completed: true, deleted: false}
        ],
        completedTodos: []
      }
    },
    methods: {
      add() {
        console.log(this.todo);
        if (this.todo) {
          this.todos.unshift({content: this.todo, completed: false, deleted: false})
          console.log(this.todos);
        }
        this.todo = ''
      }
      ,
      deleteTodo(todo) {
        todo.deleted = true
      }
      ,
      completedTodo(todo) {
        todo.completed = true
      }
    }


  }
</script>


<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	.circle {
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 2px solid black;
		border-radius: 50%;
	}
	.completed{
		padding-top: 100px;
	}

	a {
		color: #42b983;
	}
</style>
