var express = require('express');
var mysqlutil = require('../src/util/mysqlutil')
var router = express.Router();

router.post('/children_category', function(req, res, next) {
    var connection = mysqlutil.conn()
    var sql_query =
        `
        SELECT * FROM shopping.category 
	      WHERE parent_id 
	      IN (SELECT id FROM shopping.category)

        `;
    connection.query(sql_query, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
    connection.end()
});

module.exports = router;
