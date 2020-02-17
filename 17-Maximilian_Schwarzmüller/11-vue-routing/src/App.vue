<template>
  <div id="app" class="container mt-5">
    <app-header class="mb-5"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {AppHeader} from './components'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
