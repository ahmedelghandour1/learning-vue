import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';
import Vue from 'vue/dist/vue'; 

import {AppHome} from './components';
import {AppUser} from './components';

const routes: Array<RouteConfig> = [
    {path: '/', component: AppHome, name: 'home'},
    {path: '/user', component: AppUser, name: 'user'}

];

const routerOptions: RouterOptions = {
    mode: 'hash',

};

Vue.use(VueRouter);

const router =  new VueRouter({
    routes,
    ...routerOptions
});
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
})
export default router;
