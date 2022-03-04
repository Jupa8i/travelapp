<template>
  <div class="card-travel">
    <div class="img-container">
      <img :src="travel.item_photo" alt="img-trvel" />
    </div>

    <div class="card-travel-detail">
      <div class="location-detail">
        <h2>{{ travel.location }}</h2>

        <div class="stars-container">
          <template v-for="(star, index) in parseInt(travel.stars)">
            <img src="img/star.svg" :key="index" />
          </template>
        </div>
      </div>

      <div class="hotel-detail">
        <span>{{ travel.hotel_name }} </span>

        <span class="price">{{ travel.price }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["travel"],
  data: () => ({}),
  methods: {},
};
</script>
