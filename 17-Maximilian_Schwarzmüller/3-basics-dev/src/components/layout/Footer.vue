<template>
  <footer class="footer">
      <div class="container">
          <div class="text-center">
              All rights reserved &copy; {{currentYear}}
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }

}
</script>

<style scoped>
.footer {
    margin-top: 100px
}
</style>