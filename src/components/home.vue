<template>
	<div class="home">
		<ul>
			<router-link to="/todolists">
				<li>todolist-Vue</li>
			</router-link>
			<router-link to="/todo-vuex">
				<li>todolist-Vuex</li>
			</router-link>
			<router-link to="/counter">
				<li>counter-vue</li>
			</router-link>
			<router-link to="/counterhot">
				<li>counter-vuex</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
  export default {
    name: "home",

  }
</script>

<style scoped>
	ul {
		list-style: none;
	}

	li {
		display: inline-block;
		padding: 20px;
		border: 1px solid black;
	}
</style>
