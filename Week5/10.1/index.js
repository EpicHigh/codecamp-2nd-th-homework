const Koa = require(`koa`);
const Router = require(`koa-router`);
const serve = require('koa-static');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const route = new Router();
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'ejs',
    cache: false
});


route.get(`/`,async ctx => {
    await ctx.render(`index`)
});

route.get(`/about`, async ctx => {
    await ctx.render(`about`)
});

app.use(serve(path.join(__dirname, 'assets')));
app.use(route.routes());
app.use(route.allowedMethods());
app.listen(3000);