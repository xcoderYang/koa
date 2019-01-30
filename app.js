const Koa = require('koa');
// 加载路由
const controller = require('./controller');
// 解析body
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(async(ctx, next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

// 解析方法必须在 router之前注册
app.use(bodyParser());
app.use(controller());
app.listen(3000);
