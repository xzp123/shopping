var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
var md5=require('md5');
router.post('/edit_admin_post', function(req, res, next) {
        var connection=mysqlutil.conn();
        var edit_admin=
            `UPDATE shopping.admin
            SET
	        password='${md5(req.body.password)}'
	        WHERE name='${req.body.name}'
	        ;`;
        connection.query(edit_admin, function (error, results, fields) {
            if (error) throw error;
            res.send("success");
        });
        connection.end();
});

module.exports = router;

