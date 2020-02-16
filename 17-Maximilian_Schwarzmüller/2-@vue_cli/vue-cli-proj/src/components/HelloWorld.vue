<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      {{persons}}
    </div>
  </div>
</template>

<script>
import fucker from '../fuck'
(function() {
  console.log(fucker);
}())

export default {
  name: 'HelloWorld',
  data() {
    return {
      persons: []
    }
  },
  props: {
    msg: String,
  },
  created() {
    this.persons.push(fucker);
    setTimeout(() => {
      this.$set(this.persons, 0, Object.assign(fucker, {hhhhhhhhhhhhh : 'hhhhhhhhhhhhhhh'}))
}, 5000);
  }
}

</script>

