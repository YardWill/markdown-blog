const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const files = fs.readdirSync(path.join(__dirname, '../posts'));
const data = files.map((e) => {
    const time = new Date(fs.statSync(path.join(__dirname, '../posts', e)).birthtime).toLocaleString();
    return {
        name: e.slice(0, -3),
        time,
    };
});

fs.writeFileSync(path.join(__dirname, '../config/postsData.js'), `module.exports = ${JSON.stringify(_.sortBy(data, e => -new Date(e.time)))};`, error => error && console.log(error));
