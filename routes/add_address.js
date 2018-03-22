var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/add_address', function(req, res, next) {
    var connection=mysqlutil.conn();
    var add_address=
        `INSERT INTO shopping.address
            (name,address,phone,youbian,username)
            VALUES
	        ('${req.body.name}',
	        '${req.body.address}',
	        '${req.body.phone}',
	        '${req.body.youbian}',
	        '${req.body.username}')
	        ;`;
    connection.query(add_address, function (error, results, fields) {
        if (error) throw error;
        res.send("success");
    });
    connection.end();
});

module.exports = router;

