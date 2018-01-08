const Router = require('koa-router');
const fs = require('fs');
const marked = require('marked');
const list = require('../config/postsData');

const img = 'http://oexd4utdf.qnssl.com/cdn/share/activity/bg2.jpg';
const router = new Router();

router.get('/', async (ctx) => {
    await ctx.render('index', {
        list,
        img,
    });
});

router.get('/detail/:name', async (ctx) => {
    const name = ctx.params.name;
    const post = fs.readFileSync(`./posts/${name}.md`, 'utf8');
    await ctx.render('detail', {
        detail: marked(post),
        img,
        name,
    });
});

module.exports = router;
