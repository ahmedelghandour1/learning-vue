<template>
  <div>
      <h1>Home</h1>
      <hr>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus, est dolores quam facilis quisquam, a excepturi vel perferendis sequi exercitationem sapiente maxime consectetur, veniam alias. Sequi, voluptatum? Saepe, iusto.
      </p>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    },
    beforeRouteEnter(to, from, next) {
        console.log('from inside Home component (beforeRouteEnter)', {to, from})
        console.log('************************************************Wait 3 second*****************************************************************')
        setTimeout(() => {
            next();
        }, 3000);
    },
    beforeRouteLeave(to, from, next) {
        if(confirm('Are you sure?')) {
            next();
        } else next(false);
    }
}
</script>

<style>

</style> 