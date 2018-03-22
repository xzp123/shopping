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
    var connection1 = mysqlutil.conn();
    var sql_query =
        `
        SELECT * FROM shopping.product,shopping.product_images
	      WHERE shopping.product.product_id=shopping.product_images.product_id 
	      AND product_name  
	      IN (SELECT product_name FROM shopping.shoppingcart WHERE user_name='${username.username}')	      
        `;
    var cart_number=
        `SELECT  DISTINCT a.id, a.product_name, a.user_name FROM 
        shoppingcart a JOIN shoppingcart b 
        ON a.id != b.id WHERE a.product_name = b.product_name AND a.user_name = '${username.username}';
        `;
    connection1.query(sql_query, function (error, results1, fields) {
        if (error) throw error;
        var connection2 = mysqlutil.conn();
        connection2.query(cart_number, function (error, results2, fields) {
            var arr=[];
            for(var p=0;p<results1.length;p++) {
                for (var n = 0; n < results2.length; n++) {
                    if(results2[n].product_name==results1[p].product_name){
                        arr.push(results2[n].product_name);//将购物车的商品名称进行比对入栈
                    }
                }
            }
            var number = {};
            for (var i = 0; i < arr.length; i++) {
                var el = arr[i];
                if (!number[el]) {
                    number[el] = 1;
                }else{
                    number[el]++;
                }
            }
                res.render('shoppingcart', {
                    username:username,
                    shoppingcart:results1,
                    number:number
                });
        });
        connection2.end();
    });
    connection1.end();

});

module.exports = router;
