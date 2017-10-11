var express=require('express');
var app = express();

app.set("views","./views");
app.set('view engine', 'ejs');

app.get("/",function (req,res) {
    res.render('index', { title: '测试', keywords:'',h1:'diamond',description: 'Hello there!',list:[12,65,23,12]});
})
app.listen(4000);
