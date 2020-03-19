<template>
  <div id="app">
    <h1>Vuex</h1>
    <Result/>
    <hr>
    <Counter/>
  </div>
</template>

<script>
import Result from './components/Result';
import Counter from './components/Counter';
export default {
  name: 'App',
  components: {
    Result,
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
