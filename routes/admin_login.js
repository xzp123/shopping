var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var md5=require('md5');
var router = express.Router();
/* GET users listing. */
router.post('/admin_login', function(req, res, next) {
    var connection=mysqlutil.conn();
    var admin_login=`SELECT * FROM shopping.admin WHERE name='${req.body.admin_name}' AND password='${md5(req.body.password)}';`;
    connection.query(admin_login, function (error, results, fields) {
        if (error) throw error;
        if(results.length > 0){
            res.cookie("admin", {admin:req.body.admin_name}, {httpOnly: false});
            res.redirect('/');
        }else{
            res.send('false');
        }
    });
    connection.end();
});

module.exports = router;
