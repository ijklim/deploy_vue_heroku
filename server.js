var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');

var app = express();
var history = require('connect-history-api-fallback');

// app.use(serveStatic(__dirname));
app.use(history());

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);