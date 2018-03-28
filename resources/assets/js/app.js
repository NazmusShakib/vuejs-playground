'use strict';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('vue-flash-message/dist/vue-flash-message.min.css');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
*/


import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import VueFlash from 'vue2-flash';


/*import VueResource from 'vue-resource';*/

import App from './App.vue';
import {routes} from './route';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueFlash);

/*Vue.use(VueResource);*/

/*Vue.$http = 'https://vue-playground-30e97.firebaseio.com/';*/


Vue.prototype.$apiUrl = 'http://localhost:8000/api/';
Vue.prototype.$webUrl = 'http://localhost:8000/';

/*
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
*/
//import axios from 'axios';

/*new Vue(Vue.util.extend({ router }, App)).$mount('#app');*/

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});