var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var admin;
    if(req.cookies.admin !== undefined){
        admin=req.cookies.admin;
    }else{
        admin={admin:'当前未登录'};
    }
    res.render('top',{admin:admin});
});

module.exports = router;

