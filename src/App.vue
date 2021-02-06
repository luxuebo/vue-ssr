<template>
    <div id="app">
        <Index></Index>
        <Other></Other>
    </div>
</template>
<script>
import Index from './views/index'
import Other from './views/other'
    export default{
        name:'app',
        components:{
            Index,
            Other
        },
        data(){
            return{};
        },
        props:[],
        created(){},
        computed:{},
        mounted(){},
        watch:{},
        methods:{},
        }
    </script>
<style scoped>
</style>