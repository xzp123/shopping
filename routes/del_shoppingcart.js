var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/del_shoppingcart', function(req, res, next) {
    var connection = mysqlutil.conn();
    var sql_del =
        `
        DELETE FROM shopping.shoppingcart WHERE product_name = '${req.body.product_name}' AND user_name='${req.body.username}';	      
        `;
    connection.query(sql_del, function (error, results, fields) {
        if (error) throw error;
        res.send('del');
    })
    connection.end();

});

module.exports = router;
