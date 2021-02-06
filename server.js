const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const path = require('path')
const fs = require('fs')
const VueServerRender = require('vue-server-renderer')

let template = fs.readFileSync('./dist/index.ssr.html','utf8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
let renderer = VueServerRender.createBundleRenderer(serverBundle,{
    template,
    clientManifest
})
const app = new Koa()
const router = new Router()
router.get('/',async ctx=>{
    ctx.body = await new Promise((resolve,reject)=>{
        renderer.renderToString((err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
})
app.use(router.routes())
app.use(static(path.resolve(__dirname,'dist')))
app.listen(3000)