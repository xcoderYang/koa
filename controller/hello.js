var fn_hello = async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1><div><img src="static/img/01.jpg" /></div>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
}