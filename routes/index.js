var express = require('express');
var mysqlutil = require('../src/util/mysqlutil')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var username;
    if(req.cookies.user !== undefined){
         username=req.cookies.user;
    }else{
        username={username:'请登录'};
    }
    var connection1 = mysqlutil.conn();
    var sql_query1 =
        `
        SELECT * FROM shopping.banner  ;	      
        `;
    var sql_query2 =
        `
        SELECT * FROM shopping.style  ;	      
        `;
    var sql_query3=
        `  SELECT 	shopping.tuijian.style_id,product_name,product_price,product_image_good
	      FROM 
	      shopping.product,shopping.product_images,shopping.tuijian
	      WHERE 
	      shopping.product.product_name=shopping.tuijian.tuijian
	      AND shopping.product.product_id=shopping.product_images.product_id `;
    connection1.query(sql_query1, function (error, results1, fields) {
        if (error) throw error;
        var connection2 = mysqlutil.conn();
        connection2.query(sql_query2, function (error, results2, fields) {
            var connection3 = mysqlutil.conn();
            connection3.query(sql_query3, function (error, results3, fields) {
                res.render('index', {username:username,
                    banner_image:results1,
                    content_style:results2,
                    content_image:results3
                });
            });
        connection3.end();
        });
        connection2.end();
    });
    connection1.end();

});

module.exports = router;
