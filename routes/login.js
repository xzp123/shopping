var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var md5=require('md5');
var router = express.Router();
/* GET users listing. */
router.post('/login', function(req, res, next) {
    var connection=mysqlutil.conn();
    var sql_login=`SELECT * FROM shopping.users WHERE username='${req.body.username}' AND password='${md5(req.body.password)}';`;
    connection.query(sql_login, function (error, results, fields) {
        if (error) throw error;
        if(results.length > 0){
            res.cookie("user", {username:req.body.username}, {httpOnly: false});
            //将用户名保存到key为user的cookie数组中，maxAge为客户端保存cookie多长时间，单位是毫秒，如果省略这个选项，那么浏览器关闭时cookie就会被删掉
            res.redirect('/');//将cookie写入根目录
        }else{
            res.send('false')
        }
    });
    connection.end();
});

module.exports = router;
