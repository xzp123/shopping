var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/del_address', function(req, res, next) {
    var connection=mysqlutil.conn();
    var del_address=
        `DELETE  FROM  shopping.address
         WHERE id='${req.body.id}'
	     AND username='${req.body.username}'
	        ;`;
    connection.query(del_address, function (error, results, fields) {
        if (error) throw error;
        res.send("success");
    });
    connection.end();
});

module.exports = router;

