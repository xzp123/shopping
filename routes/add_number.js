var express = require('express');
var mysqlutil = require('../src/util/mysqlutil')
var router = express.Router();

router.post('/add_number', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_insert=
        `INSERT INTO shopping.shoppingcart
	( product_name,user_name)
	VALUES( 
	    '${req.body.product_name}',
	    '${req.body.username}'
	)`;
    connection.query(sql_insert, function (error, results, fields) {
        if (error) throw error;
        res.send('add');
    });
    connection.end()

});

module.exports = router;
