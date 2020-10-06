<template>
  <div class="container mt-5">
    <div class="card text-center">
      <div
        class="card-header d-flex align-items-center justify-content-between"
      >
        <div class="w-75 text-left h3 mb-0">
          Counter
        </div>
        <div class="w-25">
          <select v-model.number="step" class="form-control">
            <option hidden value="">STEP</option>
            <option v-for="step in 100" :key="step" :value="step">{{
              step
            }}</option>
          </select>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Counter value: {{ counter }}</h5>
        <h5 class="card-title">Doubled value: {{ doubleCounter }}</h5>

        <button @click="dec()" class="btn btn-success mr-3">-</button>
        <button @click="reset" class="btn btn-secondary mr-3">Reset</button>
        <button @click="inc()" class="btn btn-primary mr-3">+</button>
      </div>
      <div class="card-footer text-muted">
        Minimum Value is: <span class="text-dark">{{ min }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watch,
  toRefs,
  computed,
  onUpdated,
} from "vue";
import counterStore from "./counter";
export default defineComponent({
  props: {
    min: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const { min } = toRefs(props);
    const { counter, inc, step, doubleCounter, dec, reset } = counterStore(
      min.value
    );
    onUpdated(() => {
      console.log({ attrs, slots, emit });
    });
    onMounted(() => {
      console.log("mounted from composition");
    });
    watch(counter, (newVal, oldVal) => {
      console.log("watch couner from composition", counter.value);
    });
    watch(min, (newVal, oldVal) => {
      console.log(
        "watch prop min from composition, it's reactive due to toRefs method",
        counter.value
      );
      if (counter.value < min.value) {
        counter.value = min.value;
      }
    });
    return {
      counter,
      inc,
      step,
      doubleCounter,
      dec,
      reset,
      min,
    };
  },
  watch: {
    counter() {
      console.log("watch counter outside composition", this.counter);
    },
  },
  mounted() {
    console.log("mounted outside composition", this.counter);
    this.inc();
  },
});
</script>
