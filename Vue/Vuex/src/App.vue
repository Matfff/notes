<template>
  <div id="app">
    <p>App ........</p>
    <hr>
    <Count></Count>
  </div>
</template>

<script>
import Count from '@/components/Count.vue'

export default {
  name: 'App',
  components: {
    Count
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>
