var express=require('express');
var app = express();

// 路由路径

// 1 使用字符串模式的路由路径：
// 匹配 acd 和 abcd('?'可有可无)
//     app.get('/ab?cd', function(req, res) {
//         res.send('访问成功');
//     });

// 匹配 abcd、abbcd、abbbcd等('+' 一次或多次)
//     app.get('/ab+cd', function(req, res) {
//         res.send('ab+cd');
//     });

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等('*' 任意字符或任意数量)
//     app.get('/ab*cd', function(req, res) {
//         res.send('ab*cd');
//     });

// 匹配 /abe 和 /abcde('()'分组)
//     app.get('/ab(cd)?e', function(req, res) {
//         res.send('ab(cd)?e');
//     });


// 2 使用正则表达式的路由路径：
    // 匹配任何路径中含有 a 的路径：
    // app.get(/a/, function(req, res) {
    //     res.send('/a/');
    // });

    // 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
    // app.get(/.*fly$/, function(req, res) {
    //     res.send('/.*fly$/');
    // });


// 路由句柄

// 1 使用一个回调函数处理路由：
// 		app.get('/', function (req, res) {
//             res.send('一个函数');
//         })

// 2 使用多个回调函数处理路由（记得指定 next 对象）：
// 		app.get('/', function (req, res, next) {
//             console.log('第1个函数');
//             next();
//         }, function (req, res,next) {
//             console.log('第2个函数');
//             next();
//         }, function (req, res) {
//             console.log('第3个函数');
//             res.send('bingo');
//         });

// 3 使用回调函数数组处理路由：
//     var cb0 = function (req, res, next) {
//         console.log('sz0');
//         next();
//     }
//     var cb1 = function (req, res, next) {
//         console.log('sz1');
//         next();
//     }
//     var cb2 = function (req, res) {
//         res.send('bingo!');
//     }
//     app.get('/', [cb0, cb1, cb2])

// 4 混合使用函数和函数数组处理路由：
    var cb0 = function (req, res, next) {
        console.log('zs0');
        next();
    }
    var cb1 = function (req, res, next) {
        console.log('sz1');
        next();
    }
    app.get('/', [cb0, cb1], function (req, res, next) {
        console.log('函数');
        next();
    }, function (req, res) {
        res.send('bingo!');
    });
app.listen(4000);