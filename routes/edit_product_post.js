var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
var formidable = require('formidable');
util = require('util');
/* GET users listing. */
router.post('/edit_product_post', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var connection=mysqlutil.conn();
        var edit_product=
            `UPDATE shopping.product
            SET
	        product_name='${fields.product_name}',
	        product_desc='${fields.product_desc}',
	        product_spec='${fields.product_spec}',
	        product_price='${fields.price}'
	        WHERE product_id='${fields.product_id}'
	        ;`;
        connection.query(edit_product, function (error, results, fields) {
                res.send("修改成功！");
        });
        connection.end();
    });
});

module.exports = router;

