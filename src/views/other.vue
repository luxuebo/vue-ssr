<template>
    <div class=''>
        <div class="title">other</div>
        <button @click="clickHandler">点击事件</button>
    </div>
</template>
<script>
    export default{
        name:'other',
        components:{
        },
        data(){
            return{};
        },
        props:[],
        created(){},
        computed:{},
        mounted(){},
        watch:{},
        methods:{
            clickHandler(){
                alert('dianji')
            }
        },
        }
    </script>
<style scoped>
.title{
    background: red;
}
</style>