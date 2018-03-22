var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/edit_address', function(req, res, next) {
    var connection=mysqlutil.conn();
    var edit_address=
        `UPDATE shopping.address
            SET
	        name='${req.body.name}',
	        address='${req.body.address}',
	        phone='${req.body.phone}',
	        youbian='${req.body.youbian}'
	        WHERE username='${req.body.username}' AND id='${req.body.id}'
	        ;`;
    connection.query(edit_address, function (error, results, fields) {
        if (error) throw error;
        res.send("success");
    });
    connection.end();
});

module.exports = router;

