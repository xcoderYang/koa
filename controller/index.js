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
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if(name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    }else{
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}