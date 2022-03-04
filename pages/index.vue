<template>
  <div id="index">
    <transition name="page" mode="out-in">
      <div v-show="load" id="home">
        <div class="slider-container">
          <transition name="page" mode="out-in">
            <img v-show="main_photo" :src="main_photo" alt="main_photo" />
          </transition>
        </div>

        <div class="main-container">
          <div class="main-header">
            <span class="main-span">
              <h2>Recomendados</h2>
            </span>
          </div>
          <div class="main">
            <template v-for="(travel, index) in recommended">
              <card-travel :key="index" :travel="travel" />
            </template>
          </div>
        </div>
      </div>
    </transition>
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
    load: false,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/home";

      return this.$axios
        .get(url)
        .then((res) => {
          this.main_photo = res.data.main_photo;
          this.recommended = res.data.recommended;
          this.load = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
