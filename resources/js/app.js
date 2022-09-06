require('./bootstrap');

import * as vue from 'vue'
window.Vue =  vue;

//HOla//

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);
import "sweetalert2/dist/sweetalert2.min.css";

import vueCustomSelect from "vue-custom-select/src/CustomSelect.vue";
Vue.component('vue-custom-select', vueCustomSelect);

import Vue2datepicker from "vue2-datepicker";
Vue.use(Vue2datepicker);
import "vue2-datepicker/index.css"
import "vue2-datepicker/locale/es"
import "vue2-datepicker/scss/index.scss"
import "vue2-datepicker/scss/animation.scss"

import VueAxios from 'vue-axios';
import axios from 'axios';


//importamos y configuramos el vue-router

import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

const app = new Vue({
    el: '#app', //id del contenedor en la vista app.blade
    router: router,
})


