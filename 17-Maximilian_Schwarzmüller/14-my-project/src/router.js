import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
const Portfolio = () => import(/* webpackChunkName: "portfolio-module" */ './components/portfolio/Portfolio.vue');
const Stocks = () => import(/* webpackChunkName: "stocks-module" */'./components/stocks/Stocks.vue');



const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/stocks', name: 'stocks', component: Stocks },
];
const routerOptions = {
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        console.log({ to, from, savedPosition });
        if (savedPosition) return savedPosition;
        if (to.hash) return { selector: to.hash }
        return { x: 0, y: 0 }
    }
}
Vue.use(VueRouter);

const Router = new VueRouter({
    routes,
    ...routerOptions
});
Router.beforeEach((to, from, next) => {
    console.log('from Global (beforeEach)', { to, from });
    next();
});

export default Router;