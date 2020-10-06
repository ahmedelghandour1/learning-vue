import Vuex from  'vuex/dist/vuex'

const Home = {
    template: `
    <div>
        <h1>Welcome to our tutorial :D</h1>
    </div>
    `
}
const CounterResult = {
    template: '#counter-result-template',
    computed: {
        ...Vuex.mapGetters([
            'getCounter',

        ])
    }
}
const Counter = {
    name: 'counter',
    template: '#counter-template',
    methods: {
        ...Vuex.mapMutations([
            'RESET',
            'INCREMENT',
            'INCREMENTBY',
            'DECREMENT',
            'DECREMENTBY',
        ])
    },
    components: {
        CounterResult
    }
}

const MainHeader = {
    template: '#main-header-template',
}
