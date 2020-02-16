<template>
  <ul class="list-group">
    <button @click="bindFun()">clic</button>
    <li is="server" 
    @click.native="$emit('serverClick', server)" 
    :server="server" v-for="server in servers" 
    :key="server.id"></li>
  </ul>
</template>
<script>
import Server from './Server';


export default {
  name: "Home",
  props: {
    servers: {
      type: Array,
      default: () => []
    },
    bindFun: Function
  },
  components: {
    Server
  }
};
</script>

<style scoped>
</style>
