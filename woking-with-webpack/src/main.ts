import './scss/style.scss'
import environment from './environment';

import Vue from 'vue/dist/vue';
import router from './router';
import store from './store/store';
import { CreateElement } from 'vue/types/umd';
import {App} from './components/';

console.log(process.env.NODE_ENV)
console.log(environment);

new Vue({
    router,
    store,
    render: (h: CreateElement) => h(App),
}).$mount('#app')
