<template>
  <div class="row">
      <stock
      class="col-12 col-md-6 col-lg-4 mb-2"
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
      />
  </div>
</template>

<script>
import stock from './Stock';
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    stock
  },
  methods: {
    ...mapActions([
      'initStocks'
      ])

  },
  computed: {
    ...mapGetters([
      'stocks'
    ])
  },
  created() {
    const vm = this;
    setTimeout(() => {
      vm.initStocks()
    }, 1000)
  }
}
</script>

<style>

</style>