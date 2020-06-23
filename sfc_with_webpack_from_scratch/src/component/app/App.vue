<template>
  <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quod?
  <comp></comp>
  </div>
</template>

<script lang="ts">
import comp from "./../comA/compx";
import router from "./../../router";
export default {
  components: {
    comp
  },
  created() {
    console.log("xxxxxxxxx");
  }
};
console.log(comp);
console.log(router);
</script>

<style>
</style>