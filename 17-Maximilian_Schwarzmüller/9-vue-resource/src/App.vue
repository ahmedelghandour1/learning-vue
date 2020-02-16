<template>
  <div id="app">
    <form @submit.prevent="onSubmit" class="container mt-5">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          v-model="user.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="user.password"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import authServ from './services/mintrics.service'
export default {
  name: "App",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      authServ.login(this.user).then((resp) => {
        console.log(resp);
        
      }, resp => console.log(resp))
    }
  },
  mounted() {
    authServ.login();
    this.$http.get("https://yesno.wtf/api").then(
      rep => {console.log(rep)},
      rep => {console.log(rep)}
    );
    console.log(this.$http);
  },
  components: {}
};
</script>

<style>
</style>
