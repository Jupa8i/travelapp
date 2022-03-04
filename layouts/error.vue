<template>
  <div id="error">
    <div class="slider-container slider-error">
      <img src="img/404.svg" alt="404" />
      <p class="tittle-404">Ups.. parece que te perdiste en tu viaje... Aquí no hay nada.</p>
    </div>

    <!-- <div class="main-container">
      <div class="main-header">
        <span class="main-span">
          <h2>Sobre nosotros</h2>
        </span>
      </div>
      <div class="main">
        <p v-html="about_us" class="p-container" />
      </div>
    </div> -->
  </div>
  <!-- <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div> -->
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
