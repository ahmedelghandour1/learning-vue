<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <input
          placeholder="First Name"
          v-model="user.firstname"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Last Name"
          v-model="user.lastname"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Email"
          v-model="user.email"
          type="text"
          class="form-control"
        />
      </div>
    </form>
    <div class="border p-5">
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const user = reactive({
      firstname: "",
      lastname: "",
      email: "",
    });
    return {
      user,
    };
  },
});
</script>
