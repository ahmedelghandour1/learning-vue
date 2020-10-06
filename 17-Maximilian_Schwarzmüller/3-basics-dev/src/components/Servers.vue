<template>
  <ul class="list-group">
    <button @click="bindFun()">clic</button>
    <button @click="parentControl">parent control [remove servers arr]</button>
    <button @click="destroyParent">Destroy parent</button>
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
  data() {
    return {
      parent:this.bindFun()
    }
  },
  methods: {
    parentControl() {
      this.parent.serversArr = [];
    },
    destroyParent() {
      this.parent.$destroy();
    }
  },
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
