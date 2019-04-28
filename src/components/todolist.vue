<template>
	<div class="todolists">
		<input type="text" v-model="todo">
		<button v-on:click="add">添加</button>
		<div v-for="(todo , index) in  todos" :key="index" v-if="!todo.completed && !todo.deleted ">
			<span class="circle" @click="completedTodo(todo)"></span>
			<span @click="edited(todo)">{{todo.content}}
			</span>
			<button @click="deleteTodo(todo)">X</button>
			<br>
			<br>

			<input type="text" v-model="todo.content" v-if="todo.edited">

			<button @click="edited(todo)" v-if="todo.edited">确认修改</button>
		</div>
		<div class="completed">
			<h2>已完成</h2>
			<div v-for="todo in todos" v-if="todo.completed">
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
          {content: '第一个todo', completed: true, deleted: false ,edited: false},
          {content: '第二个todo', completed: false, deleted: false, edited: false},
          {content: '第三个todo', completed: false, deleted: false, edited : false},
          {content: '第四个todo', completed: true, deleted: false , edited : false}
        ],
        completedTodos: []
      }
    },
    methods: {
      add() {
        console.log(this.todo);
        if (this.todo) {
          this.todos.unshift({content: this.todo, completed: false, deleted: false ,edited: false})
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
      },
      edited(todo){
        todo.edited = !todo.edited
      }
    }


  }
</script>


<style lang="scss">
	div {
		.circle {
			display: inline-block;
			width: 20px;
			height: 20px;
			border: 2px solid black;
			border-radius: 50%;
		}

		.completed {
			padding-top: 100px;
			color: red;
		}
	}
		a{
			color: #000000;
		}
</style>
