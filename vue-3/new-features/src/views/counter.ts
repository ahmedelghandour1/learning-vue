import { ref, toRefs, computed } from "vue";

export default function counterStore(min: any) {
  // state
  const counter = ref(0);
  const step = ref(1);
  const doubleCounter = computed(() => counter.value * 2);

  // mutation

  const inc = () => {
    counter.value += step.value;
  };
  const dec = () => {
    if (counter.value - step.value < min.value) {
      counter.value = min.value;
      return;
    }
    counter.value -= step.value;
  };
  const reset = () => {
    counter.value = min.value;
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
