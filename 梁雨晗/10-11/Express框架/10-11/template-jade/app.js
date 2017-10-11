var express=require('express');
var app = express();

app.set("views","./views");
app.set('view engine', 'jade');

app.get("/",function (req,res) {
    res.render('index', { title: '测试', description: 'Hello there!',content:'jsndjnsjknxc'});
})
app.listen(4000);
