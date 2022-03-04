<template>
  <div class="card-travel">
    <div class="img-container">
      <img :src="travel.location_photo" alt="img-trvel" />
    </div>

    <div class="card-travel-detail-container">
      <div class="card-travel-detail">
        <div class="location-detail">
          <div v-if="!detail" class="stars-container">
            <template v-for="(star, index) in parseInt(travel.stars)">
              <img src="img/star.svg" :key="index" />
            </template>
          </div>

          <h2>{{ travel.location }}</h2>
          <h1>
            {{ travel.hotel_name }}

            <div v-if="detail" class="stars-container">
              <template v-for="(star, index) in parseInt(travel.stars)">
                <img src="@/static/img/star.svg" :key="index" />
              </template>
            </div>
          </h1>
        </div>

        <div class="hotel-detail">
          <div class="hotel-detail-text">
            <span class="hotel-detail-span">{{ travel.bajada }} </span>
            <span class="price">{{ travel.price }} </span>
          </div>

          <div v-if="!detail" class="hotel-detail-button">
            <NuxtLink :to="travel.link">
              <img src="img/travel_ver_mas.svg" alt="ver más" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["travel", "detail"],
  data: () => ({}),
  methods: {},
};
</script>
