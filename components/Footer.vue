<template>
  <footer>
    <div class="footer-container">
      <div class="logo-footer">
        <NuxtLink v-if="options" to="/"><img :src="options.footer.logo_footer" class="logo" /></NuxtLink>
      </div>

      <div class="social-icons">
        <ul class="rrss-list" v-if="options">
          <li v-for="(red_social, index) in options.footer.redes_sociales" :key="index">
            <a :href="red_social.link_url" :target="red_social.target_blank ? '_blank' : ''">
              <img :src="red_social.icono" class="logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="legal">
      <p v-if="options" v-html="options.footer.legal" class="legal-p" />
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["options"]),
  },
};
</script>
