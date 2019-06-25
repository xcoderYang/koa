const pug = require('pug');
var temp = pug.compileFile('static/template.pug');
var temp_index = temp({
    url: 'index.js'
})
var fn_index = async(ctx, next) => {
    ctx.response.body = temp_index;
};

var temp_signin = temp({
    url: 'signin.js'
});

var fn_signin = async(ctx, next) => {
    console.log(ctx.request.body);
    var
        account = ctx.request.body.account || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${account}, password: ${password}`);
    if(account === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${account}!</h1><div><img src="static/img/01.jpg" /></div>`;
    }else{
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}