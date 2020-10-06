<template>
  <div class="container mt-5">
    <div class="card text-center">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <select class="form-control"> </select>
        <span>
          Counter
        </span>
      </div>
      <div class="card-body">
        <h5 class="card-title">Counter value: {{ counter }}</h5>

        <button @click="dec(10)" class="btn btn-success mr-3">-</button>
        <button class="btn btn-secondary mr-3">Reset</button>
        <button @click="inc($event, 10)" class="btn btn-primary mr-3">+</button>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const counter = ref(0);
    const min = 0;
    const inc = (e: Event, step: number = 1) => {
      counter.value += step;
    };
    const dec = (e: Event, step: number = 1) => {
      if (counter.value - step < min) {
        counter.value = min;
        return;
      }
      counter.value -= step;
    };
    return {
      counter,
      inc,
      dec,
    };
  },
  watch: {
    counter() {
      console.log(this.counter);
    },
  },
  mounted() {
    console.log(this.counter);
  },
});
</script>
