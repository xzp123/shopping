var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/del_admin', function(req, res, next) {
    var connection = mysqlutil.conn();
    var del_user =
        `
        DELETE  FROM shopping.admin WHERE 
        name = '${req.body.name}'    
        `;
    connection.query(del_user, function (error, results, fields) {
        if (error) throw error;
        res.send('del');
    })
    connection.end();

});

module.exports = router;
