<template>
	<div class="counter">
		<span>the number is {{number}}， 奇偶性 ： {{odevity}}</span>
		<div>
			<button @click="add">add</button>
			<button @click="addOdd">if(odd) add</button>
			<button @click="addEven">if(even) add</button>
			<button @click="toHome">返回首页</button>
		</div>

	</div>
</template>

<script>
  export default {
    name: "counter",
    data() {
      return {
        number: 1,
        odevity: 'odd'
      }
    },
    methods: {
      add() {
        this.number = this.number + 1
        this.odevity =   this.number % 2 === 0? 'even' : 'odd' ;
      },
      addOdd(){
        if(this.odevity === 'odd') {
          this.add()
        }
      },
      addEven(){
        if(this.odevity === 'even'){
          this.add()
        }
      },
      toHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
button{
	padding:5px 10px;
	font-size: 16px;
	border: 2px solid black;
	margin: 10px;
}
</style>
