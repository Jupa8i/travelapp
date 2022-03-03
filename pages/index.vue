<template>
  <div>
    <div class="slider-container">
      <img :src="main_photo" alt="main_photo" />
    </div>

    <div class="main-container">
      <div class="main-header">
        <h2>Recomendados</h2>
      </div>
      <div class="main">
        <template v-for="(travel, index) in recommended">
          <card-travel :key="index" :travel="travel" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CardTravel from "~/components/home/CardTravel";
export default {
  name: "Home",
  components: {
    CardTravel,
  },
  data: () => ({
    main_photo: null,
    recommended: [],
  }),
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/home";

      return this.$axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.main_photo = res.data.main_photo;
          this.recommended = res.data.recommended;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
