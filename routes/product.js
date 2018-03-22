var express = require('express');
var mysqlutil = require('../src/util/mysqlutil')
var router = express.Router();


router.get('/', function(req, res, next) {
    var username;
    if(req.cookies.user !== undefined){
        username=req.cookies.user;
    }else{
        username={username:'请登录'};
    }
    var connection = mysqlutil.conn();
    var sql_query =
        `SELECT 	 *
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND shopping.product.product_name='${req.query.product_name}'	      
        `;
    connection.query(sql_query, function (error, results, fields) {
        if (error) throw error;
        //图片放大镜长度和数据处理
        var arr={ product_image_s:[results[0].product_image_s1,results[0].product_image_s2,results[0].product_image_s3],
        product_image_n:[results[0].product_image_n1,results[0].product_image_n2,results[0].product_image_n3],
        product_image_b:[results[0].product_image_b1,results[0].product_image_b2,results[0].product_image_b3]};
        // for(var i in arr){
        //     if(arr[i]==null){
        //         delete arr[i];
        //     }
        // }
        var arr_length="";
        for(var i in arr){
            var obj = arr[i];
            for(var key in obj){
                if(obj[key]==null||obj[key]=="undefined"){
                    delete obj[key];
                     arr_length=key;
                }
            }
        }
        if(arr_length==""){
            arr_length=arr.product_image_s.length;
        }
        var sql_query2 =
            `SELECT 	 *
	      FROM 
	      shopping.desc_images 
	      WHERE  product_name='${results[0].product_name}' 	      
        `;
        var connection2 = mysqlutil.conn();
        connection2.query(sql_query2, function (error, results2, fields) {
            if (results.length > 0){
                res.render('product',
                    {   username:username,
                        product_id:results[0].product_id,
                        product_name: results[0].product_name,
                        product_price: results[0].product_price,
                        product_desc:results[0].product_desc,
                        product_spec:results[0].product_spec,
                        product_image_length:arr_length,
                        product_image_s:arr.product_image_s,
                        product_image_n:arr.product_image_n,
                        product_image_b:arr.product_image_b,
                        desc_images:results2

                    });
            }
            else{
                res.send('商品不存在');
            }
        });
        connection2.end()
    });
    connection.end()

});

module.exports = router;
