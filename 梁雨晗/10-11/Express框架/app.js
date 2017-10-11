var express=require('express');
var app = express();

// 当浏览器发起get请求，并且请求地址/时触发操作
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// 启动服务器
    var server = app.listen(3000, 'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('当前项目的地址是：http://%s:%s', host, port);  //%s占位置
});