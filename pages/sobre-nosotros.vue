<template>
  <div id="sobre-nosotros">
    <div
      class="slider-container slider-sobre-nosotros"
      v-if="background_photo"
      :style="{
        backgroundImage: 'url(' + background_photo + ')',
      }"
    >
      <img :src="front_photo" alt="front_photo" />
    </div>

    <div class="main-container">
      <div class="main-header">
        <span class="main-span">
          <h2>Sobre nosotros</h2>
        </span>
      </div>
      <div class="main">
        <p v-html="about_us" class="p-container" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    background_photo: null,
    front_photo: null,
    about_us: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/sobre-nosotros";

      return this.$axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.background_photo = res.data.background_photo;
          this.front_photo = res.data.front_photo;
          this.about_us = res.data.about_us;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
