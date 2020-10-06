import Vue, { CreateElement } from 'vue';

import App from './component/app/App.vue'

new Vue({
    render: (h: CreateElement) => h(App),
    mounted() {
        this.$nextTick(() => {
            console.log('ready');
        })
    }
}).$mount('#app')