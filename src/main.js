import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'vue-googlemaps/dist/vue-googlemaps.css';
import VueGoogleMaps from 'vue-googlemaps';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/element';
import './assets/css/bootstrap.min.css';
import './assets/css/global.css';

const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
  load: {
    // TODO: Set as env var
    apiKey: process.env.VUE_APP_MAIN_API_KEY,
    libraries: ['places'],
    useBetaRenderer: false,
  },
});

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
