var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var username;
    if(req.cookies.user !== undefined){
        username=req.cookies.user;
    }else{
        username={username:'请登录'};
    }
    var tf_zhifu='支付成功';
    if(req.query.price=='￥0'){
        tf_zhifu='支付失败';
    }
     res.render('success',{
         username:username,
         name:req.query.name,
         phone:req.query.phone,
         address:req.query.address,
         price:req.query.price,
         zhifuzhuangtai:tf_zhifu

     })
});

module.exports = router;
