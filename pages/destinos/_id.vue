<template>
  <div id="destino">
    <div class="slider-container slider-sobre-nosotros" v-if="travel">
      <!-- <img :src="front_photo" alt="front_photo" /> -->
      <card-travel :travel="travel" :detail="true" />
    </div>

    <div class="main-container">
      <div class="main-text">
        <div class="main-header">
          <span class="main-span">
            <h2>Condiciones</h2>
          </span>
        </div>
        <div class="main">
          <p v-if="travel" v-html="travel.condiciones" class="p-container" />
        </div>
      </div>

      <div class="main-icons">
        <div class="main-header">
          <span class="main-span">
            <h2>Incluye</h2>
          </span>
        </div>
        <div class="main">
          <template v-if="travel">
            <li v-for="(item, index) in travel.includes" :key="index" class="includes-li">
              <span class="includes-icons">
                <img :src="'../img/' + item + '.jpg'" alt="incluye" />
                <span v-if="item == 'flight'">Vuelo sin escalas</span>
                <span v-if="item == 'transfer'">Traslado al Hotel</span>
                <span v-if="item == 'hotel'">Habilitiación Standar</span>
              </span>
              <!-- <card-travel :travel="travel" /> -->
            </li>
          </template>
        </div>
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
    travel: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "/" + this.$route.params.id;

      return this.$axios
        .get(url)
        .then((res) => {
          this.travel = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
