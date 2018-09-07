const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const render = require("koa-ejs");
const path = require("path");
const koaBody = require("koa-body");
const session = require("koa-session");
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "koa_login"
});
const tempUserController = require("./controllers/user");
const userController = tempUserController(null, pool);

app.use(koaBody());
app.keys = ["some sadfk dsjkl fjsdlak;j fklsdj lkjfklsdjf ldks;ssdfs"];
const sessionStore = {};

const CONFIG = {
  key: "koa:sess" /** (string) cookie key (default is koa:sess) */,
  maxAge: 86400000 * 7,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  store: {
    get(key, maxAge, { rolling }) {
      return sessionStore[key];
    },
    set(key, sess, maxAge, { rolling, changed }) {
      sessionStore[key] = sess;
    },
    destroy(key) {
      delete sessionStore[key];
    }
  }
};

app.use(session(CONFIG, app));

render(app, {
  root: path.join(__dirname, "view"),
  layout: "template",
  viewExt: "ejs",
  cache: false
});

async function getUserInfo(pool, userId) {
  const [results] = await pool.query(
    `SELECT id, email FROM user WHERE id = ?`,
    [userId]
  );

  return {
    userId: results[0].userId,
    email: results[0].email
  };
}

function stupidHash(password) {
  return "123" + password + "123";
}

router.get("/", async (ctx, next) => {
  await ctx.render("register");
  await next();
});

router.get("/register_ajax", async (ctx, next) => {
  await ctx.render("register_ajax");
  await next();
});

router.get("/login", async (ctx, next) => {
  await ctx.render("login");
  await next();
});

router.post("/register_completed",async (ctx, next) => {
	userController.insertUser(ctx,next);
	await next()
});

router.post("/register_completed_ajax", async (ctx, next) => {
	userController.insertUser(ctx,next);
  await next();
});

router.post("/login_completed", async (ctx, next) => {
  const [results, fields] = await pool.query(
    `
        SELECT id, password 
        FROM user 
        WHERE username = ?
    `,
    [ctx.request.body.username]
  );
  if (results[0].password === stupidHash(ctx.request.body.password)) {
    ctx.session.userId = results[0].id;
    ctx.redirect("/profile");
  } else {
    ctx.body = "Login fail";
  }
  await next();
});

router.get("/profile", async (ctx, next) => {
  const userId = ctx.params.id ? ctx.params.id : ctx.session.userId;
  const data = await getUserInfo(pool, userId);

  await ctx.render("profile", {
    userId: data.userId,
    email: data.email
  });
  await next();
});

router.get("/profile/:id", async (ctx, next) => {
  const userId = ctx.params.id ? ctx.params.id : ctx.session.userId;
  const data = await getUserInfo(pool, userId);

  await ctx.render("profile", {
    userId: data.userId,
    email: data.email
  });
  await next();
});

router.get("/logout", async (ctx, next) => {
  ctx.session = null;

  await ctx.render("logout");
  await next();
});

app.use(async (ctx, next) => {
  const urlAllowWithoutLogin = [
    "/",
    "/login",
    "/login_completed",
    "/register_ajax",
    "/register_completed",
    "/register_completed_ajax",
    "/logout"
  ];
  if (urlAllowWithoutLogin.indexOf(ctx.path) === -1) {
    // Check if user has already logged in
    if (ctx.session && ctx.session.userId) {
      await next(); // can access
    } else {
      await ctx.render("login"); // force to login if there's no userId
    }
  } else {
    await next();
  }
});
app.use(router.routes());
app.listen(3000);
