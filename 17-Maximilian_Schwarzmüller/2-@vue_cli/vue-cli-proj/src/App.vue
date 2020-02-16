<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <home></home>
    <ServerStatus
    :price-in-dollar="100"
    :is-pro="true"
    :server-name="'mocha'"/>
    <ServerStatus
    @dummed="alert('noooooooooo')"
    :is-pro="true"
    :server-name="'mocha'"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ServerStatus from './components/ServerStatus.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ServerStatus
  },
  methods: {
    alert(msg) {
      alert(msg)
    }
  }
}
</script>

<style>
</style>
