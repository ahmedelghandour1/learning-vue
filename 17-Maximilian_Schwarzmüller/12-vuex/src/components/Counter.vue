<template>
  <div>
    <button class="btn btn-primary mr-2 " @click="increment(100)">increment</button>
    <button class="btn btn-primary mr-2" @click="decrement(100)">decrement</button>
    <button class="btn btn-primary mr-2" @click="asyncIncreament({by: 100, duration: 1000})">asyncIncreament</button>
  </div>
</template>

<script>
import { mapMutations , mapActions} from "vuex";
export default {
  methods: {
      ...mapMutations([
          'increment',
          'decrement'
      ]),
      ...mapActions(['asyncIncreament'])
  }
};
</script>

<style>
</style>