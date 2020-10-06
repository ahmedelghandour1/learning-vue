<template>
  <div>
    <div class="card  mb-3">
      <div class="card-header ">{{stock.name}} <small>(price: {{stock.price}})</small></div>
      <div class="card-body">
        <div class="d-flex align-items-between">
          <input 
          placeholder="Quantity"
          v-model="quantity"
          type="number"
          min="1"
          class="form-control">
          <button
            :disabled="!quantity && !Number.isInteger(quantity)"
           @click="buyStock" class="btn ml-5 btn-dark">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: null
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stockPrice,
        quantity: this.quantity
      }
      console.log(order)
      this.quantity = null;
    }
  }
};
</script>

<style>
</style>
