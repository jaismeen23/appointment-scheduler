import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Location',
      component: () => import('@/views/Location.vue'),
    },
    {
      path: '/customer',
      name: 'Customer',
      component: () => import('@/views/Customer.vue'),
    },
    {
      path: '/when',
      name: 'When',
      component: () => import('@/views/When.vue'),
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: () => import('@/views/Confirm.vue'),
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: () => import('@/views/Vehicle.vue'),
    },
    {
      path: '/vehicle1',
      name: 'Vehicle1',
      component: () => import('@/views/Vehicle1.vue'),
    },
    {
      path: '/transportation',
      name: 'Transportation',
      component: () => import('@/views/Transportation.vue'),
    },

    {
      path: '/confirm1',
      name: 'Confirm1',
      component: () => import('@/views/Confirm1.vue'),
    },
    {
      path: '/complete',
      name: 'Complete',
      component: () => import('@/views/Complete.vue'),
    },
  ],
});
