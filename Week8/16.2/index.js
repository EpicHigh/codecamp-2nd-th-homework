const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const Pug = require("koa-pug");
//require internal files
const instructors = require("./models/instructor");
const instructor_ids = require("./models/instructor_id");
const course_ids = require("./models/course_id");
const course_prices = require("./models/course_price");
const checkValues = require("./controllers/checkValues");
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

router.get("/", ctx => {
	ctx.render(`index`);
});

router.get("/instructor/find_all", ctx => {
	ctx.render(`find_all`, instructors);
});

router.get("/instructor/find_by_id/:id", (ctx, next) => {
	const id = ctx.params.id;
	instructor_ids.query_instructors_id(id);
	next();
});

router.get("/course/find_by_id/:id", (ctx, next) => {
	const id = ctx.params.id;
	course_ids.query_course_id(id);
	next();
});

router.get("/course/find_by_price/:price", (ctx, next) => {
	const price = ctx.params.price;
	course_prices.query_course_price(price);
	next();
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(ctx => checkValues.check(ctx));

app.listen(3000);
