<template>
  <div id="app" class="container mt-5">
    <!-- <app-header class="mb-5"></app-header> -->
    <router-view class="mb-5" name="header-top"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view class="mt-5" name="header-bottom"></router-view>
  </div>
</template>

<script>
// import {AppHeader} from './components'
export default {
  name: "App",
  components: {
    // AppHeader
  }
};
</script>

<style>
      .fade-enter-active,
        .fade-leave-active {
            transition: all .5s;
        }

        .fade-enter,
        .fade-leave-to

        /* .fade-leave-active below version 2.1.8 */
            {
            opacity: 0;
            transform: translateY(10px);
        }
</style>
