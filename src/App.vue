<template>
  <div id="app">
    <div class="container-fluid no-mar-pad">
      <div class="header-plus-main">
        <AppHeader class="app-header" v-show="!($route.path==='/complete')"/>
        <div class="main">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
      <div class="footer">
        <AppFooter v-show="!($route.path==='/complete')"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
  mounted(){
    console.log(process.env.VUE_APP_MAIN_API_KEY)
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

.blue-text {
  color: var(--primary-color);
}

.round-container-with-shadow {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
}

.app-header {
  padding-bottom: 3em;
}

.header-plus-main {
  min-height: calc(100vh - 210px);
  margin-bottom: 90px;
}

.error {
  text-align: left;
  font-size: 14px;
  color: red;
}

@media (max-width: 375px) {
  /* LOCATION */
  .location-container {
    min-height: 145px !important;
  }
  .left-container-location {
    padding-bottom: 80px;
  }

  .location-icon-container {
    padding-left: 0px !important;
  }
}

@media (max-width: 425px) {
  /* WHEN */
  .when-right-container {
    width: 90% !important;
    margin-left: 5% !important;
  }

  .next-button {
    text-align: center !important;
  }

  /* FOOTER */
  .footer-container {
    text-align: center;
  }
  .row-bottom {
    padding-bottom: 30px;
  }

  /* CONFIRM  */
  .right-row-small {
   min-width: 100%;
  }

  /* CUSTOMER */
  .error {
    margin-bottom: 5px;
  }
}

@media (max-width: 768px) {
  /* CUSTOMER */
  .parent {
    margin-bottom: 10px;
  }

  /* WHEN */
  .el-button {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  /* VEHICLE */
  .col-vehicle {
    margin-bottom: 20px;
  }
}
</style>
