//any requires
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const Pug = require("koa-pug");
const from_file = require("./models/from_file");
const from_db = require("./models/from_database");

//any new
const app = new Koa();
const router = new Router();
const pug = new Pug({
    viewPath: "views",
    debug: false,
    pretty: false,
    compileDebug: false,
    basedir: "views",
    app: app // equals to pug.use(app) and app.use(pug.middleware)
});

router.get("/", async ctx => {
    await ctx.render(`index`);
});

router.get("/from_file", async ctx => {
    await ctx.render(`from_file`, from_file);
});

router.get("/from_database", async ctx => {
    await ctx.render(`from_database`, from_db);
});

//app.use(serve(path.join(__dirname, "JSON")));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
