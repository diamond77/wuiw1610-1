var express=require('express');
var router = express.Router();

//  /news
router.route('/')
    .get(function(req, res) {
    res.send('get news');
    })
    .post(function(req, res) {
    res.send('post news');
});
//  /news/list
router.route('/list')
    .get(function(req, res) {
        res.send('get news/list');
    })
    .post(function(req, res) {
        res.send('post news/list');
    });

module.exports=router; //导出