var express=require('express');
var router = express.Router();

//  /product
router.route('/')
    .get(function(req, res) {
        res.send('get product');
    })
    .post(function(req, res) {
        res.send('post product');
    });

// /product/list
router.route('/list')
    .get(function(req, res) {
        res.send('list product');
    })
    .post(function(req, res) {
        res.send('post product');
    });

// /product/list
router.route('/list/show')
    .get(function(req, res) {
        res.send('show product');
    })
    .post(function(req, res) {
        res.send('post product');
    });


module.exports=router; //导出