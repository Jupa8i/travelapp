<template>
  <div>
    <div class="navbar-component">
      <div class="navbar">
        <input type="checkbox" id="collapse_nav" role="button" />
        <label for="collapse_nav" id="main-menu-toggler">
          <div id="main-menu-toggler-icon"></div>
        </label>
        <label class="d-flex w-100-resp" id="navbar-header" for="collapse_nav">
          <div class="logo-container a-center">
            <div v-if="options">
              <NuxtLink to="/"><img :src="options.header.logo_header" class="logo" /></NuxtLink>
            </div>
          </div>
        </label>

        <div class="navbar-collapse">
          <ul v-if="options" class="mainMenu" id="mainMenu">
            <li v-for="(item, index) in options.header.menus" :key="index">
              <NuxtLink :to="item.menu_url">
                <span>{{ item.menu_label }} </span>
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/sobre-nosotros">Sobre Nosotros</NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>

      <div class="banner-green"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["options"]),
  },
};
</script>
