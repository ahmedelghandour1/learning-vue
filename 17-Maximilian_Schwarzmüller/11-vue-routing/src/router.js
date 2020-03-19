import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHeader from './components/Header.vue';

const User = () => import(/* webpackChunkName: "users-module" */ './components/User.vue');
const Users = () => import(/* webpackChunkName: "users-module" */ './components/Users.vue');
const UserEdit = () => import(/* webpackChunkName: "users-module" */ './components/UserEdit.vue');
const Home = () => import(/* webpackChunkName: "home-module" */ './components/Home.vue');



Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': AppHeader
        }
    },
    {
        path: '/users',
        name: 'usersList',
        beforeEnter: loginGuard,
        components: {
            default: Users,
            'header-bottom': AppHeader,
            'header-top': AppHeader
        },
        children: [
            { path: ':id', component: User, name: 'singleUser' },
            { path: ':id/edit/:mode', component: UserEdit, name: 'editUser' }
        ]
    },
    // {path: '/redirect-me', redirect: ''}
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];
const routerOptions = {
    mode: 'history' /* history, abstract, hash */,
    scrollBehavior(to, from, savedPosition) {
        console.log({ to, from, savedPosition });
        if (savedPosition) return savedPosition;
        if (to.hash) return { selector: to.hash }
        return { x: 0, y: 0 }
    }
}

const isAuthinticated = true;

function loginGuard(to, from, next) {
    console.log('from inside routes (beforEnter)', { to, from });
    if (isAuthinticated) {
        next();
    } else {
        const isFirst = !from.name && from.path === '/' && from.matched.length === 0;
        if (isFirst) next({ name: 'home' });
    }
}
const Router = new VueRouter({
    routes,
    ...routerOptions
})

Router.beforeEach((to, from, next) => {
    console.log('from Global (beforeEach)', { to, from });
    next();
});

export default Router;