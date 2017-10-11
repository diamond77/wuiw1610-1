var express=require('express');
var app = express();

// 路由
// app.get('/', function (req, res) {
//     res.send('首页');
// });
// app.get('/list', function (req, res) {
//     res.send('列表');
// });
// app.get('/category', function (req, res) {
//     res.send('栏目');
// });


// app.get('/', function (req, res) {
//     res.send('get首页');
// });
// app.post('/', function (req, res) {
//     res.send('post首页');
// });
// app.put('/', function (req, res) {
//     res.send('put首页');
// });
// app.delete('/', function (req, res) {
//     res.send('delete首页');
// });


app.all('/', function (req, res) {
    res.send('all方法');
})


// 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
// 	app.use(express.static('static'));  //static静态资源目录

// 启动服务器
var server = app.listen(3000, 'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('当前项目的地址是：http://%s:%s', host, port);  //%s占位置
});