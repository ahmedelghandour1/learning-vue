<template>
    <p>
        server Status: {{status}} <button @click="onClick">click</button>
        {{serverName}} - {{priceInDollar}} - {{isPro}} - {{dummy}}
    </p> 
</template>
<script>
    export default {
        props: {
            serverName: {
                type: String,
                required: true
            },
            priceInDollar: {
                type: Number,
                default: 43556
            },
            isPro: [Boolean, Number],
            dummy: {
                type: [Object, Array],
                default() {
                    return [12,2143,34]
                }
            }
        },
        data() {
            return {
                status: 'Critical'
            }
        },
        methods: {
            onClick() {
                this.status = 'Normal'
            }
        }, 
        mounted() {
            this.$emit('dummed');
            // not valid cause it will affect the parent component
            // this.dummy = undefined;
        }
    }
</script>