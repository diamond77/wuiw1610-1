var express=require('express');
var app = express();

// 路由模块
var  home=require('./routers/home')
var  news=require('./routers/news')
var  product=require('./routers/product')

app.use('/',home)
app.use('/news',news)
app.use('/product',product)

app.listen(4040);