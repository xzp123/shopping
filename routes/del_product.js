var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();

router.post('/del_product', function(req, res, next) {
    var connection = mysqlutil.conn();
    var del_product =
        `
        DELETE a.*,b.*,c.* FROM shopping.product a 
        INNER JOIN  shopping.product_images b 
        ON a.product_id = b.product_id 
        INNER JOIN shopping.desc_images c 
        ON a.product_name = c.product_name 
        WHERE a.product_name = '${req.body.product_name}' 
        AND a.product_id='${req.body.product_id}'     
        `;
    connection.query(del_product, function (error, results, fields) {
        if (error) throw error;
        res.send('del');
    })
    connection.end();

});

module.exports = router;
