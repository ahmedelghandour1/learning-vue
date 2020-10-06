<template>
  <Counter :min="min" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Counter from "@/views/Counter.vue";
export default defineComponent({
  setup() {
    let min = ref(1);
    setTimeout(() => {
      min.value = 10;
    }, 3000);
    return { min };
  },
  components: {
    Counter,
  },
});
</script>
