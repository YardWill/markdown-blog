const Koa = require('koa2');
const path = require('path');
const views = require('koa-views');
const koaStatic = require('koa-static');
const router = require('./routers/router');

const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// template
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs',
    options: { escape: e => e },
}));

app.use(koaStatic(`${__dirname}/public`));

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(9999);
console.log(`listening on port ${9999}`);
