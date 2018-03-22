var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_query =
        `
        SELECT * FROM shopping.success     
        `;
    connection.query(sql_query, function (error, results, fields) {
        res.render('success_list', {
            success_list:results
        })
    })
});

module.exports = router;
