<template>
  <div>
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "default",
  mounted() {
    this.getOptions();
  },
  methods: {
    ...mapActions(["getOptions"]),
  },
};
</script>
