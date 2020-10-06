<template>
  <div class="sliderMenu grayBgColor">
    <div class="sliderHeader">Online users - {{ online_list.length }}</div>
    <div class="userInfo" v-for="user in online_list" v-bind:key="user.user.name">
      <div class="userImg">
        <i class="far fa-user" />
      </div>
      <div class="userName">{{ user.user.name }}</div>
    </div>
  </div>
</template>

<script>
import { UPDATE_LAST_SEEN, SUBSCRIPTION_ONLINE_USERS } from "./../services/graphql.gql";
export default {
  data() {
    return {
      online_list: [
        { user: { name: "someUser1" } },
        { user: { name: "someUser2" } },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.$apollo.mutate({
        mutation: UPDATE_LAST_SEEN,
        variables: {
          now: new Date().toISOString()
        }
      });
    }, 20000);
  },
  apollo: {
   // Subscriptions
   $subscribe: {
     // When a user is added
     online_users: {
       query: SUBSCRIPTION_ONLINE_USERS,
       // Result hook
       result (data) {
         // Let's update the local data
         this.online_list = data.data.online_users
       },
     },
   },
 },
};
</script>
