import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import Vue2TouchEvents from 'vue2-touch-events';
import VueRouter from 'vue-router';

import 'vue-material/dist/vue-material.min.css';
import './scss/app.scss';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 100
});

// ref to App and AppTemplate
import App from './App.vue';

import AppTemplate from './AppTemplate.vue';
Vue.component('app-template', AppTemplate);

// import routes list
import routes from './routes';

const router = new VueRouter({ routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
