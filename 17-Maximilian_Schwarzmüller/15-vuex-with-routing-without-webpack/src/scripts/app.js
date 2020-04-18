import Vue from 'vue/dist/vue';
import 'vuex/dist/vuex';
import 'vue-router/dist/vue-router';

import './store';
import './components'
import './router';

new Vue({
    components: {
        MainHeader
    },
    created() {
        console.log('created');
        console.log(this)
    }
}).$mount('#app')
