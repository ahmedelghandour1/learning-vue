<template>
    <p>
        server Status: {{status}} <button @click="onClick">click</button>
    </p> 
</template>
<script>
    export default {
        data() {
            return {
                status: 'Critical'
            }
        },
        methods: {
            onClick() {
                this.status = 'Normal'
            }
        }
    }
</script>