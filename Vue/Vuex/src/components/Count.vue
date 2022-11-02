<template>
  <div>
    <h4>当前值为： {{$store.state.sum}}</h4>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数 +</button>
    <button @click="incrementWait">延迟 +</button>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('add', this.n)
    },
    decrement() {
      this.$store.dispatch('subtract', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }
  }
}
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>