var express=require('express');
var app = express();
var fs=require('fs');
// 中间件

// 记录用户每一次请求的时间
app.use(function (req,res,next) {
   var t=new Date().toLocaleTimeString();//获取当前时间
   fs.appendFile('./log.txt',t+'\n',function (err) {
       if(err) throw err;
   });
    // res.send();  //终止响应
    next();
})

// 记录用户访问list请求的时间
app.use('/list',function (req,res,next) {
    var t=new Date().toLocaleTimeString();//获取当前时间
    fs.appendFile('./log2.txt',t+'\n',function (err) {
        if(err) throw err;
    });
    next();
})
app.get('/', function(req, res) {
    res.send('首页');
});
app.get('/list', function(req, res) {
    res.send('列表');
});



app.listen(4040);