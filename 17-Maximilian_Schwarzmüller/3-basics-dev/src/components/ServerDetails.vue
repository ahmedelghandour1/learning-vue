<template>
    <div>
        <div v-if="server" class="border rounded pt-3 pl-2 pr-2 pb-5">
          <h3>{{server.name}}</h3>
          <button @click="deleteSrver">delete</button> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, laboriosam.
        </div>
        <div v-else>
          Select Server to see details
        </div>
    </div>
</template>

<script>
import {ServerBus} from './../main';

export default {
  name: 'ServerDetails',
  data() {
    return {
      server: null
    }
  },
  methods: {
    deleteSrver() {
      ServerBus.$emit('deleteServer', this.server);
      this.server = null;
    }
  },
  created() {
    const vm  = this;
    ServerBus.$on('selectServer', (data) => {
      vm.server = data;
    })
  }
}
</script>

<style scoped>

</style>
