const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

let template = fs.readFileSync('./dist/index.ssr.html','utf8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

let renderer = createBundleRenderer(serverBundle,{
    template,
    clientManifest
})
const app = new Koa()
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = await new Promise((resolve,reject)=>{
        renderer.renderToString({url:'/'},(err,html)=>{
            if(!err){
                resolve(html)
            }else{
                reject(err)
            }
        })
    })
})
app.use(router.routes())
//静态服务
app.use(static(path.resolve(__dirname,'dist')))
//匹配不到会走下面的路由
app.use(async ctx=>{
    try{
        ctx.body = await new Promise((resolve,reject)=>{
            renderer.renderToString({url:ctx.url},(err,html)=>{
                if(!err){
                    resolve(html)
                }else{
                    reject(err)
                }
            })
        })
    }catch(e){
        ctx.body = '404'
    }
})
app.listen(3000)