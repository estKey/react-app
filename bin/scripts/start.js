const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpackDevServer.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const chalk = require('react-dev-utils/chalk');
const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../../public'), //默认会以根文件夹提供本地服务器，这里指定文件夹
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 4096, //如果省略，默认8080
    publicPath: "/"
});

console.log(chalk.cyan('Starting the development server...\n'));
server.listen(4096, 'localhost', function (err) {
    if (err) throw err
});

