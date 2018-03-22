var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var md5=require('md5');
var router = express.Router();
/* GET users listing. */
router.post('/register', function(req, res, next) {
    var connection=mysqlutil.conn();
    var  sql_select=`SELECT 	 username
	              FROM
	              shopping.users
	              WHERE  shopping.users.username
	              ='${req.body.username}'
                `;
    connection.query(sql_select, function (error, results, fields) {
            if(results.length>0){
                res.send('lose');
            }else{
                var connection1=mysqlutil.conn();
                var sql_register=
                    `INSERT INTO shopping.users 
	            ( username, password)
	            VALUES( 
	            '${req.body.username}', 
	            '${md5(req.body.password)}'
	            );
	            INSERT INTO shopping.user_info 
	            ( username)
	            VALUES('${req.body.username}') `
                ;
                connection1.query(sql_register, function (error, results, fields) {
                    if (error) throw error;
                    res.send('add success');
                });
                connection1.end();
            }
    });
    connection.end();
});

module.exports = router;
