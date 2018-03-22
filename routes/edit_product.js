var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_query =
        `
         SELECT * FROM shopping.product 
         WHERE product_id='${req.query.product_id}' 
         AND product_name='${req.query.product_name}';	      
        `;
    connection.query(sql_query, function (error, results, fields) {
        res.render('edit_product', {product:results[0]})
    })
    connection.end()
});

module.exports = router;
