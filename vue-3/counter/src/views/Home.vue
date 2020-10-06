<template>
  <div class="home">
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "@/components/Counter.vue";
export default defineComponent({
  name: "Home",
  methods: {
    test() {
      this.$store;
    },
  },
  components: {
    Counter,
  },
});
</script>
