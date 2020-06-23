const template =  /*html*/
    ` 
    <div id="app">
        <div class="container mt-5">
            <app-header></app-header>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
`;

import AppHeader from './Header';
export default {
    name: 'App',
    template,
    data() {
        console.log('data')
        return {
            name: 'Ahmed'
        }
    },
    created() {
        console.log('created')
        console.log(this.name)
    },
    components: {
        AppHeader
    }
}