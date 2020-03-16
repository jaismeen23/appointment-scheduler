<template>
  <div class="container">
    <div class="row">

    </div>
    <div class="row left-row-top">
      <div class="col-xs-12 col-md-6 left-container-location">
        <div class="left-container">
          <div class="row">
            <div class="col-xs-12 col-sm-5">
              <form>
                <div class="col-xs-12 col-sm-12 postal-code-row">

                </div>
              </form>
            </div>
          </div>
          <div class="row left-row-bottom">
            <div
              class="col-sm-12 col-md-12 location-container round-container-with-shadow"
              v-for="(location, i) in locations"
              :key="i"
              @click="selectLocation(location.id)"
            >
              <div class="col-xs-2 icon-container location-icon-container">
                <img src="@/assets/img/icons/location.png">
              </div>
              <div class="col-xs-10">
                <p class="location-title">{{ location.name }}</p>
                <p class="location_id">{{ location.id }}</p>
                <!-- <p class="ref_location_id">{{ location.ref_location_id }}</p>  -->
              </div>
               <div class="col-xs-2 icon-container">

              <!--  <div class="circle" v-if="selectedLocation === location.id"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="right-container">
          <div class="row">
            <div class="map-container">
              <googlemaps-map :center="location" :zoom="15" class="google-map-container">
                <googlemaps-marker title="location" :position="location"/>
              </googlemaps-map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      locations: [],
    };
  },
  mounted() {
    this.getLocations();
  },
  computed: {
    location() {
      return {
        lat: 43.761539,
        lng: -79.411079,
      };
    },
  },
  methods: {
    selectLocation(locationId) {
      this.selectedLocation = locationId;
    },
    getLocations() {
      axios.get('http://localhost:5000/api/v1/locations/')
        .then((response) => {
          console.log(response);
          this.locations = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}

.left-container {
  height: 22em;
}

.left-row-top {
  height: 10%;
}

.left-row-bottom {
  height: 90%;
}

.right-container {
  height: 26em;
}

.title {
  color: var(--dark-gray);
  font-weight: 600;
}

.location-container {
  height: 25%;
  width: 80%;
  margin: 2%;
  padding-top: 2%;
}

.location-container:hover {
  cursor: pointer;
}

.location-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
}

.location-address {
  font-size: 16px;
  text-transform: uppercase;
}

.postal-code-row {
  margin-bottom: 5%;
  padding-left: 0;
}

.icon-container {
  text-align: center;
  height: auto;
}

.map-container {
  text-align: center;
}

.circle {
  height: 10px;
  width: 10px;
  background-color: #6f94ff;
  border-radius: 5px 5px;
}

.google-map-container {
  min-height: 500px;
  max-width: 100%;
}

.round-container-with-shadow {
  width: 90%;
}
</style>
