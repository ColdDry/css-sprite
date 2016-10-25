/**
 * Created by HJH on 2016/10/25.
 */
var express = require('express');
var app = express();

// app.get('/img', function (req, res, next) {
//     console.log('some on come!');
//     next();
// });

app.listen(1991, function () {
    console.log('css sprite is started on port 1991!');
})

app.use(express.static(__dirname + '/app'));

