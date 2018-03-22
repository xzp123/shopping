var express = require('express');
var mysqlutil = require('../src/util/mysqlutil')
var router = express.Router();

router.post('/add_shoppingcart', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_insert=
        `INSERT INTO shopping.shoppingcart
	( product_name,user_name)
	VALUES( 
	    '${req.body.product_name}',
	    '${req.body.username}'
	);`;
    var sql_adds="";
    var number=req.body.number;
    if(number==undefined){
        sql_adds=sql_insert;
    }else {
        for (var i = 0; i < number; i++) {
            sql_adds = sql_adds + sql_insert;
        }
    }
    connection.query(sql_adds, function (error, results, fields) {
        if (error) throw error;
        res.send('add');
    });
    connection.end()

});

module.exports = router;
