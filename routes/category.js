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
    var c=`${req.query.category_id}`;
    var connection1 = mysqlutil.conn();
    if(c=='undefined'){
        var sql_query1 =
            `SELECT 	 * 
	      FROM 
	      shopping.category 
	      WHERE parent_id='0'	      
        `;
    }else{
        var sql_query1 =
            `SELECT 	 * 
	      FROM 
	      shopping.category 
	      WHERE id='${req.query.category_id}' 
	      or parent_id='${req.query.category_id}'	      
        `;
    }
    var sql_query2 =
        `SELECT 	 * 
	              FROM 
	              shopping.style 	      
                `;
    var sql_query3 =
        `SELECT 	 * 
	      FROM 
	      shopping.product_type 
	      WHERE category_id='${req.query.category_id}'	      
        `;
    var sql_query_price =
        `SELECT 	 * 
	      FROM 
	      shopping.price 	      
        `;
    var i=`${req.query.style_id}`;
    var j=`${req.query.product_type_id}`;
    var p=`${req.query.price}`;
    var k=p.split('-');
    var k1=k[0];
    var k2=k[1];
if(c=='undefined'){
    var sql_query_product =`
     SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id
	      AND CONCAT(product_name, product_desc) LIKE '%${req.query.category_name}%'`
}
else if(i=='undefined'&&j=='undefined'&&p=='undefined') {
    var sql_query_product =
        `
       SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
        `;
} else if(i!='undefined'&&j!='undefined'&&p!='undefined'){
    if(k1!='10000'){
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
	      AND shopping.product.product_type_id='${req.query.product_type_id}'
	      AND shopping.product.product_price BETWEEN '${k1}' AND '${k2}';
        `;
    }else{
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
	      AND shopping.product.product_type_id='${req.query.product_type_id}'
	      AND shopping.product.product_price >='${k1}';
        `;
    }
}else if(i!='undefined'&&j!='undefined'&&p=='undefined'){
    var sql_query_product =
        `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
	      AND shopping.product.product_type_id='${req.query.product_type_id}';
        `;
}else if (i == 'undefined'&&j == 'undefined'&&p!='undefined') {
    if(k1!='10000'){
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.product_price BETWEEN '${k1}' AND '${k2}';
        `;
    }else{
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.product_price >='${k1}';
        `;
    }

} else  if (i!='undefined'&&j == 'undefined'&&p=='undefined') {
    var sql_query_product =
        `
             SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
        `;
} else if (i == 'undefined'&&j!= 'undefined'&&p=='undefined') {
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.product_type_id='${req.query.product_type_id}';
        `;
}
else if (i == 'undefined'&&j!='undefined'&&p!='undefined') {
    if(k1!='10000'){
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.product_type_id='${req.query.product_type_id}'
	      AND shopping.product.product_price BETWEEN '${k1}' AND '${k2}';
        `;
    }else{
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.product_type_id='${req.query.product_type_id}'
	      AND shopping.product.product_price >='${k1}';
        `;
    }
}
else if (i!='undefined'&&j == 'undefined'&&p!='undefined') {
    if(k1!='10000'){
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
	      AND shopping.product.product_price BETWEEN '${k1}' AND '${k2}';
        `;
    }else{
        var sql_query_product =
            `
              SELECT 	 product_name,product_price,product_desc,product_image_good
	      FROM 
	      shopping.product,shopping.product_images 
	      WHERE  shopping.product.product_id=shopping.product_images.product_id 
	      AND (shopping.product.category_c_id='${req.query.category_id}'
	      OR shopping.product.category_p_id='${req.query.category_id}')
	      AND shopping.product.style_id='${req.query.style_id}'
	      AND shopping.product.product_price >='${k1}';
        `;
    }
}
    connection1.query(sql_query1, function (error, results1, fields) {
        if (error) throw error;
        var connection2 = mysqlutil.conn();
        connection2.query(sql_query2, function (error, results2, fields) {
            var connection3 = mysqlutil.conn();
            connection3.query(sql_query3, function (error, results3, fields) {
                var connection4 = mysqlutil.conn();
                connection4.query(sql_query_product, function (error, results4, fields) {
                    var connection5 = mysqlutil.conn();
                    connection5.query(sql_query_price, function (error, results5, fields) {
                         if (results1[0].id <= 21) {
                            res.render('category',
                                {   username:username,
                                    category_id: results1[0].id,
                                    category_p: results1[0].category,
                                    category_list: results1.splice(1),//删除JSON数据的第一项
                                    category_style: results2,
                                    category_style_id:`${req.query.style_id}`,
                                    category_type: results3,
                                    category_type_id:`${req.query.product_type_id}`,
                                    goods_list:results4,
                                    price_list:results5,
                                    category_price:`${req.query.price}`

                                });
                        } else {
                            var sql_query =
                                `SELECT 	 * 
	                          FROM 
	                          shopping.category 
	                          WHERE parent_id='${results1[0].parent_id}' 
	                          or id='${results1[0].parent_id}'	      
                            `;
                            var sql_query3_3 =
                                `SELECT 	 * 
	                          FROM 
	                          shopping.product_type 
	                          WHERE category_id='${results1[0].parent_id}'	      
                            `;
                            var connection = mysqlutil.conn();
                            connection.query(sql_query, function (error, results, fields) {
                                var connection3_3 = mysqlutil.conn();
                                connection3_3.query(sql_query3_3, function (error, results3_3, fields) {
                                    res.render('category',
                                        {   username:username,
                                            category_id: results1[0].id,
                                            category_p: results[0].category,
                                            category_list: results.splice(1),
                                            category_style: results2,
                                            category_style_id:`${req.query.style_id}`,
                                            category_type: results3_3,
                                            category_type_id:`${req.query.product_type_id}`,
                                            goods_list:results4,
                                            price_list:results5,
                                            category_price:`${req.query.price}`
                                        });

                                });
                                connection3_3.end();
                            });
                            connection.end();
                        }
                    });
                    connection5.end();
                });
                connection4.end();
            });
            connection3.end();

        });
        connection2.end();

    });
    connection1.end();


});

module.exports = router;
