const Koa = require('koa')
const Router = require('koa-router')

const PORT = 80

const app = new Koa()
const router = new Router()

router.get('/hello', (ctx) => {
    ctx.body = '你好'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => { console.log(`server laungh success at port ${PORT}`) })