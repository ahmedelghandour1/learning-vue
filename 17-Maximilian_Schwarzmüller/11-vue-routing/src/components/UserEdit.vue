<template>
  <div>
    <h1>User ID: {{userID}}</h1>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati similique amet reiciendis aut inventore quos optio minima, nulla quo.</p>
    <button @click="startGoing" class="btn btn-primary">GO TO HOME</button>
    <h3 v-if="isGoingToHome">will go to home in {{counter}} second.</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 5,
      isGoingToHome: false,
      userID: this.$route.params.id
    };
  },
  methods: {
    navigateToHome() {
      console.log(this.$router);
      this.$router.push("/");
    },
    startGoing() {
      if (this.isGoingToHome) return;
      this.isGoingToHome = true;
      const interval = setInterval(() => {
        if (this.counter === 0) {
          clearInterval(interval);
          this.navigateToHome();
        }
        this.counter--;
      }, 1000);
    }
  },
  watch: {
      $route(newVal, oldVal) {
        console.log(oldVal);
        
          this.id = newVal.params.id;
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