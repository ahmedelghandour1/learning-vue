<template>
  <li @click="onClick" class="list-group-item">{{server.name}}</li>
</template>

<script>
import { ServerBus } from "./../main";

export default {
  name: "Server",
  props: {
    server: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    onClick() {
      ServerBus.$emit('selectServer', this.server)
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
 