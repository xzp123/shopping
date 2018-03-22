var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_query =
        `
         SELECT * FROM shopping.category WHERE parent_id=0;	      
        `;
    var sql_query1 =
        `
         SELECT * FROM shopping.category WHERE parent_id>0;	      
        `;
    var sql_query2 =
        `
         SELECT * FROM shopping.style;	      
        `;
    var sql_query3 =
        `
         SELECT * FROM shopping.product_type;	      
        `;
    connection.query(sql_query, function (error, results, fields) {
        var connection1 = mysqlutil.conn();
            connection1.query(sql_query1, function (error, results1, fields) {
                var connection2 = mysqlutil.conn();
                connection2.query(sql_query2, function (error, results2, fields) {
                    var connection3 = mysqlutil.conn();
                    connection3.query(sql_query3, function (error, results3, fields) {
                        res.render('add_product', {
                            category_p: results,
                            category_c: results1,
                            style: results2,
                            type:results3
                        })
                    });
                    connection3.end()
                });
                connection2.end()
        });
        connection1.end()
    });
    connection.end()
});

module.exports = router;
