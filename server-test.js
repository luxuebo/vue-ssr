const Koa = require('koa')
const Router = require('koa-router')
const Vue = require('vue')
const fs = require('fs')
const VueServerRender = require('vue-server-renderer')
const vm = new Vue({
    data(){
        return{
            msg:'hellow vue-ssr'
        }
    },
    template:`<div>{{msg}}</div>`
})
let template = fs.readFileSync('./public/index.ssr.html','utf-8')
let render = VueServerRender.createRenderer({
    template
})
const app = new Koa()
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = await render.renderToString(vm)
})
app.use(router.routes())
app.listen(3000)