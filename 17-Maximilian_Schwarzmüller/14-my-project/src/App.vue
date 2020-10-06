<template>
  <div id="app">
    <app-header></app-header>
    <div class="container mt-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
        .fade-leave-to

        /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(10px);
}
</style>
