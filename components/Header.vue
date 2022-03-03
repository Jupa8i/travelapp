<template>
  <div>
    <header class="header-fixed">
      <div class="header-limiter">
        <h1>
          <NuxtLink to="/">Logo</NuxtLink>
        </h1>

        <nav>
          <NuxtLink to="/sobre-nosotros">Sobre Nosotros</NuxtLink>
          <NuxtLink to="/destinos/listadestinos">Destinos</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- You need this element to prevent the content of the page from jumping up -->
    <div class="header-fixed-placeholder"></div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
