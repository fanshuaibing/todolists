<template>
	<div class="home">
		<ul>
			<router-link to="/todolists">
				<li>todolist-Vue</li>
			</router-link>

			<li>todolist-Vuex</li>
			<li>counter-vue</li>
			<li>counter-vuex</li>
		</ul>
	</div>
</template>

<script>
  export default {
    name: "home",
    computed: {

    }
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
