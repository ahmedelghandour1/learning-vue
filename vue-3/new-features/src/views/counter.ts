import { ref, toRefs, computed } from "vue";

export default function counterStore(min: number) {
  // state
  const counter = ref(0);
  const step = ref(1);
  const doubleCounter = computed(() => counter.value * 2);

  // mutation

  const inc = () => {
    counter.value += step.value;
  };
  const dec = (min: number) => {
    if (counter.value - step.value < min) {
      counter.value = min;
      return;
    }
    counter.value -= step.value;
  };
  const reset = () => {
    counter.value = 0;
  };
  return {
    counter,
    step,
    doubleCounter,
    inc,
    dec,
    reset,
  };
}
