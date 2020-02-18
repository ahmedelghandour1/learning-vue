<template>
  <div class="border p-3">
    <h1>User ID: {{userID}}</h1>
    <div>Locale: {{$route.query.locale}}</div>
    <div>Analytics: {{$route.query.q}}</div>
    <hr>
    <p style="height: 700px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati similique amet reiciendis aut inventore quos optio minima, nulla quo.</p>
    <div id="data">data fragment</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userID: this.$route.params.id
    };
  },
  methods: {},
  watch: {
      $route(newVal, oldVal) { 
        console.log(oldVal);
          this.userID = newVal.params.id;
      }
  },
  created() {
    console.log(this.$route);
  },
  mounted() {}
};
</script>

<style>
</style>