var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/save_userinfo', function(req, res, next) {
    var connection=mysqlutil.conn();
    var save_userinfo=
        `UPDATE shopping.user_info
            SET
	        name='${req.body.name}',
	        sex='${req.body.sex}',
	        birthday='${req.body.birthday}',
	        phone='${req.body.phone}',
	        email='${req.body.email}',
	        address='${req.body.address}'
	        WHERE username='${req.body.username}'
	        ;`;
    connection.query(save_userinfo, function (error, results, fields) {
        if (error) throw error;
        res.send("success");
    });
    connection.end();
});

module.exports = router;

