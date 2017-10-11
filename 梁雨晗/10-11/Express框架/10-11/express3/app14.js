var express=require('express');
var app = express();

// 使用多个中间件

    /*中央发补助   1万
    * 省里        6000（- 4000）
    * 市里        4000（- 2000）
    * 县里        2000（- 2000）
    * 乡里        1000（- 1000）
    * 村里        500（- 500）
    * 农民        500
    * */
app.use(function (req,res,next) {
    //中央
    req.money=10000;
    next();
})
app.use(function (req,res,next) {
    //省里
    req.money=req.money-4000;
    next();
})
app.use(function (req,res,next) {
    //市里
    req.money=req.money-2000;
    next();
})
app.use(function (req,res,next) {
    //县里
    req.money=req.money-2000;
    next();
})
app.use(function (req,res,next) {
    //乡里
    req.money=req.money-1000;
    next();
})
app.use(function (req,res,next) {
    //村里
    req.money=req.money-500;
    next();
})

app.get('/', function(req, res) {
    res.send(req.money+"");
});



app.listen(4040);