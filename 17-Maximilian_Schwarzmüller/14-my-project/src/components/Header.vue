<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <div class="container">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto w-100">
        <router-link :to="{name: 'portfolio'}" class="nav-item" tag="li" activeClass="active">
          <a class="nav-link" href="#">
            Portfolio
          </a>
        </router-link>
         <router-link :to="{name: 'stocks'}" class="nav-item" tag="li" activeClass="active">
          <a class="nav-link" href="#">
            Stocks
          </a>
        </router-link>
  <router-link :to="{name: 'stocks'}" class="nav-item ml-auto" tag="li" activeClass="active">
          <a class="nav-link" href="#">
            End Day
          </a>
        </router-link>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save and Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
   </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>