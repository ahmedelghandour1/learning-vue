<template>
  <div>
    <h1>Users</h1>
    <hr>
    <button @click="startGoing" class="btn btn-primary">GO TO HOME</button>
    <h3 v-if="isGoingToHome">will go to home in {{counter}} second.</h3>
    <hr>
<div class="list-group">
  <router-link 
  v-for="user in users"
   :key="user.id" 
   :to="{name: 'singleUser', params: {id: user.id}, query:{locale: 'en', q: 100}, hash: '#data'}" 
   active-class="active"
   class="list-group-item list-group-item-action">
      <div class="d-flex align-items-center justify-content-between">
        <span>
          {{user.name}}
        </span>
        <router-link tag="button" :to="{name: 'editUser', params: {id: user.id, mode: 'full'}}">Edit</router-link>
      </div>
  </router-link>
  <router-view class="mt-5"></router-view>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 5,
      isGoingToHome: false,
      users: [
        {name: 'ahmd', id: 12},
        {name: 'medo', id: 1232},
        {name: 'adam', id: 123421},
      ]
    };
  },
  methods: {
    navigateToHome() {
      console.log(this.$router);
      this.$router.push({name: 'home'}); /*equal to =>>>> this.$router.push("/")----- or this.$router.push({path: '/'}) */
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
      $route(to, from) {
        console.log(from);
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