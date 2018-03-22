var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_query =
        `
        SELECT * FROM shopping.product      
        `;
    connection.query(sql_query, function (error, results, fields) {
        res.render('product_list', {
            product_list:results
        })
    })
});

module.exports = router;
