var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require('./webpack.js'); 

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {headers: { "Access-Control-Allow-Origin": "http://localhost", "Access-Control-Allow-Credentials": "true" }});
server.listen(8080);