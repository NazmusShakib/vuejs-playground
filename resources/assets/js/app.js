'use strict';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

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
import Notify from 'vue-notifyjs';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import {routes} from './route';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Notify); 
Vue.use(VeeValidate);
/*Vue.$http = 'https://vue-playground-30e97.firebaseio.com/';*/


Vue.prototype.$apiUrl = 'http://localhost:8080/api/';
Vue.prototype.$webUrl = 'http://localhost:8080/';

/*
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
*/
//import axios from 'axios';

/*new Vue(Vue.util.extend({ router }, App)).$mount('#app');*/

import localStorage from './components/services/localStorage';
Vue.prototype.$localStorage = localStorage;


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});