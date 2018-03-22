var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
var md5=require('md5');
util = require('util');
/* GET users listing. */
router.post('/add_admin_post', function(req, res, next) {
    var connection=mysqlutil.conn();
    var query_admin= `SELECT * FROM shopping.admin WHERE name='${req.body.name}'`;
    connection.query(query_admin, function (error, results, fields) {
        if(results.length>0){
            res.send('lose');
        }else {
            var connection1=mysqlutil.conn();
            var add_admin =
                `INSERT INTO shopping.admin
            ( name,password)
            VALUES(
	        '${req.body.name}',
	        '${md5(req.body.password)}')
	        ;`;
            connection1.query(add_admin, function (error, results1, fields) {
                if (error) throw error;
                res.send("success");
            });
            connection1.end();
        }
    })
    connection.end();
});

module.exports = router;

