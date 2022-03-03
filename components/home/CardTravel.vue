<template>
  <div class="card-travel">
    <img :src="travel.item_photo" alt="img-trvel" />
    <div class="card-travel-detail">
      <div class="location-detail">
        <h2>{{ travel.location }}</h2>

        <div class="stars-container">
          <template v-for="(star, index) in parseInt(travel.stars)">
            <img src="@/static/img/star.svg" :key="index" />
          </template>
        </div>
      </div>

      <div class="hotel-detail"></div>

      <span>{{ travel.hotel_name }} </span>
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
