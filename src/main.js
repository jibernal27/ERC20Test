import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, process.env.BACKEND);


Vue.use(VueAxios, axios);


import App from './App.vue';


import Contract from './components/Contract.vue';

import Transaction from './components/Transaction.vue';

const routes = [
  {
        name: 'MainPage',
        path: '/',
        components: {a:Contract,b:Transaction}
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
