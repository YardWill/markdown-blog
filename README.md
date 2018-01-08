### markdown-blog
This is a blog using markdown. It's so easy to deploy. Just start with a node environment V => 7.6.0.(because of using aysnc/await)

### demo
[www.yardwill.top](http://www.yardwill.top/)

### install 
```
yarn install

yarn run dev
```


### deploy
```
pm2 start index.js -n blognext // It could be any name you want and you should modify the package.json scripts.
```

### webhook
You also can use a git webhook to deply your project.
And CI is too heavy to deploy this.
So I worte a webhookserver to deploy my blog every time I push to master.
The code is very simple. The server listen the webhook request and then execute the restart command.

For Example
```
const http = require('http');
const { exec } = require('child_process');


const server = http.createServer((req, res) => {
    if (req.url === '/myblog' && req.method === 'POST') {
        exec('cd /project/myblog && yarn run restart');
    }
    res.end('success');
});

server.listen('XXXX');
```

### Style
You can also change the style code to start your own blog. Just two pages you should paint.