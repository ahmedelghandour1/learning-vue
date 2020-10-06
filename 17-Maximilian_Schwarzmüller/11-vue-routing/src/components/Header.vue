<template>
  <ul class="nav nav-tabs">
      <router-link to="/" active-class="active" class="nav-item" tag="li" exact>
            <a class="nav-link">Home</a>
      </router-link>
       <router-link to="/users" active-class="active" class="nav-item" tag="li">
            <a class="nav-link">User</a>
      </router-link>
  <li class="nav-item">
    <router-link to="#fsgfd" class="nav-link">Dumy</router-link>
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-item.active {
    background: #CCC;
}
</style>