const counterModule = {
    state: {
        counter: 0
    },
    getters: {
        getCounter: (state, getters) => {
            console.log(state, getters);
            return state.counter
        },
        getDoubleCounter: state => state.counter,
    },
    mutations: {
        RESET: state => state.counter = 0,
        INCREMENT: state => state.counter += 1,
        INCREMENTBY: (state, payload) => state.counter += payload,
        DECREMENT: state => {
            if (state.counter === 0) {
                alert('minimum number is 0')
                return;
            }
            state.counter += -1
        },
        DECREMENTBY: (state, payload) => {
            if (state.counter === 0) {
                alert('minimum number is 0')
                return;
            }
            if(state.counter - payload < 0) {
                store.commit('RESET');
                return;
            }
            state.counter += -payload
        },
    },
    actions: {
        increment: ({ commit, dispatch, state, getters, ...rest }) => {
            console.log(rest);
            console.log(getters);
            console.log(state);
            console.log(dispatch);
            console.log(commit);
            commit('INCREMENT');
        }
    }
}
const numbersModules = {
    state: {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    getters: {
        getFilteredNumber: state => number => {
            return state.numbers.filter(elm => elm >= number)
        }
    }
}
const store = new Vuex.Store({
    modules: {
        counterModule,
        numbersModules
    }
})
