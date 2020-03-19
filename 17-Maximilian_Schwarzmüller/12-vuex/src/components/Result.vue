<template>
  <div>
    <div>double Counter is: {{doubleCounter}}</div>
    <div>Number of Clicks: {{stringCounter}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>

<style>
</style>