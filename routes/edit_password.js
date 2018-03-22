var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
var md5=require('md5');
router.post('/edit_password', function(req, res, next) {
    var connection=mysqlutil.conn();
    var old_password=
        `SELECT PASSWORD FROM shopping.users WHERE username='${req.body.username}' AND PASSWORD='${md5(req.body.old_password)}';`;
    connection.query(old_password, function (error, results, fields) {
        if (error) throw error;
        if(results.length>0){
            var new_password=
                `UPDATE shopping.users
            SET
	        password='${md5(req.body.new_password)}'
	        WHERE username='${req.body.username}'
	        ;`;
            var connection1=mysqlutil.conn();
            connection1.query(new_password, function (error, results, fields) {
                res.send("success");
            });
            connection1.end();
        }else{
            res.send("lose");
        }
    })
    connection.end();
});

module.exports = router;

