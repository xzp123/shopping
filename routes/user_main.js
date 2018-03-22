var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var username;
    if(req.cookies.user !== undefined){
        username=req.cookies.user;
    }else{
        username={username:'请登录'};
    }
    var connection = mysqlutil.conn();
    var sql_userinfo=`SELECT * FROM shopping.user_info 
    WHERE username='${username.username}'`;
    var sql_address=`SELECT * FROM shopping.address 
    WHERE username='${username.username}'`;
    var sql_success=`SELECT  *
	      FROM  shopping.success,shopping.product,shopping.product_images
	      WHERE  shopping.product.product_id=shopping.product_images.product_id
	      AND shopping.product.product_name=shopping.success.product_name 
	      AND shopping.success.user_name='${username.username}'
	      ORDER BY id ASC`;
    connection.query(sql_userinfo, function (error, results, fields) {
        connection.query(sql_address, function (error, results1, fields) {
            connection.query(sql_success, function (error, results2, fields) {
                res.render('user_main', {
                    username: username,
                    user_info: results[0],
                    address_list: results1,
                    success_list:results2
                });
            })
        })
    })

});

module.exports = router;
