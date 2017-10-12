var express = require('express');
var router = express.Router();

//admin
router.get('/', function(req, res, next) {
  res.render('admin/index');
  // res.send('respond with a resource');
});
//admin/info
router.get('/info',function (req,res) {
    res.render('admin/info')
})
//admin/pass
router.get('/pass',function (req,res) {
    res.render('admin/pass')
})
//admin/user
router.get('/user',function (req,res) {
    res.render('admin/user')
})
//admin/adv
router.get('/adv',function (req,res) {
    res.render('admin/adv')
})
//admin/addadv
router.get('/addadv',function (req,res) {
    res.render('admin/addadv')
})

router.get('/column',function (req,res) {
    res.render('admin/column')
})
router.get('/add',function (req,res) {
    res.render('admin/add')
})
router.get('/list',function (req,res) {
    res.render('admin/list')
})
router.get('/book',function (req,res) {
    res.render('admin/book')
})
router.get('/link',function (req,res) {
    res.render('admin/link')
})
router.get('/add-link',function (req,res) {
    res.render('admin/add-link')
})

module.exports = router;
