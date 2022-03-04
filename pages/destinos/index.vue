<template>
  <div id="destinos">
    <div class="main-container">
      <div class="main-header">
        <span class="main-span">
          <h2>Destinos</h2>
        </span>
      </div>
      <div class="main">
        <template v-if="destinos">
          <li v-for="(travel, index) in destinos" :key="index" class="destino-li">
            <card-travel :travel="travel" />
          </li>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CardTravel from "@/components/destinos/CardTravel";
export default {
  components: {
    CardTravel,
  },
  data: () => ({
    destinos: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/destinos";

      return this.$axios
        .get(url)
        .then((res) => {
          this.destinos = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
