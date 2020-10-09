<template>
  <Counter :min="min" />
  <Suspense v-if="!isLoggedIn">
    <template #default>
      <User />
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, provide, ref } from "vue";
import Counter from "@/views/Counter.vue";
import globals from "@/app";

const User = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("@/views/User.vue");
});

export default defineComponent({
  provide: {
    globals,
  },
  setup() {
    let isLoggedIn = ref(false);
    let min = ref(1);
    setTimeout(() => {
      min.value = 10;
    }, 5000);
    return { min, isLoggedIn };
  },
  components: {
    Counter,
    User,
  },
});
</script>
