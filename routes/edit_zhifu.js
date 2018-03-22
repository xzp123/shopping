var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/edit_zhifu', function(req, res, next) {
    if(req.body.zhifu=='支付宝'){
        var connection=mysqlutil.conn();
        var edit_zhifu=
            `UPDATE shopping.success
            SET
	        zhifu='${req.body.zhifu}'
	        WHERE id='${req.body.id}'
	        AND user_name='${req.body.username}'
	        ;`;
        connection.query(edit_zhifu, function (error, results, fields) {
            if (error) throw error;
            res.send("success");
        })
        connection.end();
    }else{
        res.send("lose");
    }

});

module.exports = router;

