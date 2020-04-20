import './scss/style.scss';
import environment from './environment';

import Vue from 'vue';
import router from './router';
import store from './store/store';
import { CreateElement } from 'vue/types/umd';
import {App} from './components/';
import vuetify from './plugins/vuetify';
console.log(process.env.NODE_ENV)
console.log(environment);

const app = new Vue({
    router,
    store,
    vuetify,
    render: (h: CreateElement) => h(App),
    created() {
        console.log('instance created')
    }
}).$mount('#app');
console.log(app)
