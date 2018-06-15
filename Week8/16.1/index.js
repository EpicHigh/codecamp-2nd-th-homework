//any requires from node_modules
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const Pug = require("koa-pug");
//any requires from internal files
const myScript = require("./scripts/myscript");
const findBy = require(`./scripts/find_by`);

//findBy.find_by(4);

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

router.get("/instructor/find_all", async (ctx, next) => {
	await ctx.render(`find_all`, myScript);
});

router.get("/instructor/find_by_id/:id", async (ctx, next) => {
	await findBy.find_instructor([ctx.params.id]);
	await next();
});

router.get("/course/find_by_id/:id", async (ctx, next) => {
	await findBy.find_course_id([ctx.params.id]);
	await next();
});

router.get("/course/find_by_price/:price", async (ctx, next) => {
	await findBy.find_course_price([ctx.params.price]);
	await next();
});
//findBy.find_course_price([ctx.params.price])

//app.use(serve(path.join(__dirname, "scripts")));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(ctx => {
	if (String(ctx[`request`][`url`]).includes(`/instructor/find_by_id/`)) {
		findBy.find_instructor([ctx.params.id]);
		if (typeof findBy.instructorsid_title !== `undefined`) {
			ctx.render(`insid`, findBy);
		} else {
			ctx.body = `Please refresh`;
		}
	}
	if (String(ctx[`request`][`url`]).includes(`/course/find_by_id/`)) {
		findBy.find_course_id([ctx.params.id]);
		if (typeof findBy.coursesid_title !== `undefined`) {
			ctx.render(`couid`, findBy);
		} else {
			ctx.body = `Please refresh`;
		}
	}
	if (String(ctx[`request`][`url`]).includes(`/course/find_by_price/`)) {
		findBy.find_course_price([ctx.params.price]);
		if (typeof findBy.courses_price_title !== `undefined`) {
			ctx.render(`coupri`, findBy);
		} else {
			ctx.body = `Please refresh`;
		}
	}
});
app.listen(3000);