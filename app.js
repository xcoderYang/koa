const Koa = require('koa');
// 加载路由
const controller = require('./controller');
// 解析body
const bodyParser = require('koa-bodyparser');
// 加载静态资源
const staticFiles = require('./static-loader');
const app = new Koa();
const port = '8080';
const hostname = '0.0.0.0';

app.use(async(ctx, next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(staticFiles('/static/', __dirname+'/static'));
// 解析方法必须在 router之前注册
app.use(bodyParser());
app.use(controller());
app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
