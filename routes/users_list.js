var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_query =
        `
        SELECT * FROM shopping.user_info      
        `;
    connection.query(sql_query, function (error, results, fields) {
        res.render('users_list', {
            users_list:results
        })
    })
});

module.exports = router;
