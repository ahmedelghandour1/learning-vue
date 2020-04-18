const template =  /*html*/
`
    <div>
        <button @click="INCREMENT">Count up</button>
        <button @click="DECREMENT">Count down</button>
        <hr>
        <div class="border p-4">
            results: {{getCounter}}
        </div>
    </div>
`;



import {mapMutations, mapGetters} from 'vuex';
export default {
    name: 'Counter', 
    template,
    methods: {
        ...mapMutations(['INCREMENT', 'DECREMENT'])
    },
    computed: {
        ...mapGetters(['getCounter'])
    }
}