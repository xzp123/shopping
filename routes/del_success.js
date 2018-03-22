var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/del_success', function(req, res, next) {
    var connection = mysqlutil.conn();
    var del_user =
        `
        DELETE  FROM shopping.success WHERE 
        user_name = '${req.body.user_name}' 
        AND  id= '${req.body.id}'   
        `;
    connection.query(del_user, function (error, results, fields) {
        if (error) throw error;
        res.send('del');
    })
    connection.end();

});

module.exports = router;
