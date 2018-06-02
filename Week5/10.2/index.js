const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const Pug = require('koa-pug');


const app = new Koa();
const router = new Router();
const pug = new Pug({
    viewPath: 'views',
    debug: false,
    pretty: false,
    compileDebug: false,
    basedir: 'views',
    app: app // equals to pug.use(app) and app.use(pug.middleware)
});

router.get(`/`, async ctx => {
    await ctx.render(`aboutme`)
});

router.get(`/skills`, async ctx => {
    await ctx.render(`skills`)
});

router.get(`/contact`, async ctx => {
    await ctx.render(`contact`)
});

router.get(`/portfolio`, async ctx => {
    await ctx.render(`portfolio`)
});

//pug.use(app);
app.use(serve(path.join(__dirname, 'public')));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
