<template>
    <div id="app">
        <router-link to='/'>首页</router-link>
        <router-link to='/other'>其他</router-link>
        <router-view></router-view>
        <!-- <Index></Index>
        <Other></Other> -->
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