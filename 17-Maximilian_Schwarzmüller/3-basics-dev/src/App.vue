<template>
  <div id="app">
    <app-header></app-header>
    <app-main>
      <div class="row x">
        <div v-if="notification" class="col-12">
          <div class="alert alert-info" role="alert">{{notification}}</div>
        </div>
        <div v-if="isLoading" class="col-12 text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <template v-else>
          <div class="col-5">
            <servers 
            @serverClick="notify" 
            :bindFun="bindFunc" 
            :servers="serversArr" />
          </div>
          <div class="col-7">
            <selected-server></selected-server>
          </div>
        </template>
      </div> 
    </app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/layout/Header";
import appFooter from "./components/layout/Footer";
import appMain from "./components/layout/Main";
import Servers from "./components/Servers";
import SelectedServer from "./components/ServerDetails";
import ServersService from "./servers.js";
import {ServerBus} from './main.js';
export default {
  name: "App",
  data() {
    return {
      isLoading: false,
      serversArr: [],
      notification: undefined
    };
  },
  methods: {
    getServers() {
      const vm = this;
      this.isLoading = true;
      ServersService.getServers().then(data => {
        this.isLoading = false;
        vm.serversArr = data;
      });
    },
    notify(data) {
      this.notification = `${data.name} is selected`
    },
    bindFunc() {
      console.log('bind function');
      console.log(this.serversArr)
      return this
    }
  },
  mounted() {
    console.log(ServersService)
    this.getServers();
  },
    created() {
    const vm = this;
    ServerBus.$on('deleteServer', (server) => {
      console.log('delet');
      
      vm.serversArr  = vm.serversArr.filter((elm) => elm.id !== server.id);
    })
  },
  components: {
    appHeader,
    appFooter,
    appMain,
    Servers,
    SelectedServer
  }
};
</script>

<style scoped>

</style>
