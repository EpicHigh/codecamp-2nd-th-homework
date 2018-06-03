//any requires
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const fs = require("fs");
const Pug = require("koa-pug");
const myScript = require("./public/scripts/myscript");

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

//any functions
function editJSON(ctx) {
    //Users access to /from_file
    if (ctx[`request`][`url`] === `/from_file`) {
        let obj = JSON.parse(fs.readFileSync("homework2_1.json", "utf8"));
        return (ctx.body = from_database(obj));
    } else {
        ctx.body = `How do you access this page`;
    }
}

function from_database(obj) {
    let temp = ``;
    let start = `{"data": `;
    let date = new Date();
    let fullDate = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let end = `, "additionalData": {"userId": ${1}, "dateTime": "${fullDate}"}}`;
    temp += `[`;
    for (let i in obj) {
        temp += `${start}${JSON.stringify(obj[i])}${end}`;
        if (i < obj.length - 1) {
            temp += `,`;
        }
    }
    temp += `]`;
    return JSON.parse(temp);
}

//paths
router.get("/", async ctx => {
    ctx.render(`index`);
});

router.get("/from_file", async (ctx, next) => {
    ctx.body = ``;
    await next();
});

router.get("/from_database", async (ctx, next) => {
    ctx.render(`from_database`, myScript);
});
//Middleware
app.use(serve(path.join(__dirname, "public")));
app.use(router.routes());
app.use(router.allowedMethods());

app.use(editJSON);

app.listen(3000);
