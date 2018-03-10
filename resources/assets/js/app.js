
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

import App from './App.vue';
import { routes } from './route';

Vue.use(VueRouter);


 /*
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);*/

/*import Nav from './components/layout/NavComponent.vue';
import CreateItem from './components/CreateItem.vue';
import ViewItems from './components/ViewItems.vue';
import EditItem from './components/EditItem.vue';
import AddSectionModal from './components/AddSectionModal.vue';

const routes = [
    {
        name: 'DisplayItem',
        path: '/',
        component: ViewItems
    },
    {
        name: 'CreateItem',
        path: '/items/create',
        component: CreateItem
    },
    {
        name: 'EditItem',
        path: '/edit/:id',
        component: EditItem
    },
    {
        name: 'AddSectionModal',
        path: '/add-section-modal',
        component: AddSectionModal
    }
];*/
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

