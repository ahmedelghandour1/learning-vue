<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Counter
      </div>
      <div class="card-body">
        <button @click="inc" class="btn btn-primary mr-2">
          Increment
        </button>
        <button class="btn btn-primary mr-2">
          Decrement
        </button>
        <button class="btn btn-primary">
          Reset
        </button>
      </div>
      <div class="card-footer text-muted">Value: {{ count.counter }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Counter",
  setup() {
    const store = useStore();
    const inc = () => store.commit("increment");
    const count = ref(store.state);
    return {
      inc,
      count: count,
    };
  },
});
</script>
