<template>
  <div id="error">
    <div class="slider-container slider-error">
      <img src="img/404.svg" alt="404" />
      <p class="tittle-404">Ups.. parece que te perdiste en tu viaje... Aquí no hay nada.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>
