<template>
  <button @click="onClick($event, 'BUTTON IS CLICKED')" class="custom-btn">
      <slot></slot>
  </button>
</template>

<script>
import {appService} from './../services'
export default {
    methods: {
        onClick(e, val) {
            appService.onClick$.next(val)
        }
    }
}
</script>

<style scoped>
    button.custom-btn{

    }
</style>