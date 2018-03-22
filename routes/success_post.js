var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.post('/success_post', function(req, res, next) {
    var username;
    if(req.cookies.user !== undefined){
        username=req.cookies.user;
    }else{
        username={username:'请登录'};
    }
    var connection = mysqlutil.conn();
    var success="";
    var del_shoppingcart ="";
        for (var i = 0; i < JSON.parse(req.body.products).length; i++) {
            success = success +  `
   INSERT INTO success(product_name,name,number,phone,wuliu,address,other,zhifu,user_name)
   VALUES ('${JSON.parse(req.body.products)[i]}','${req.body.name}','${JSON.parse(req.body.number)[i]}','${req.body.phone}','${req.body.wuliu}','${req.body.address}','${req.body.liuyan}','${req.body.zhifu}','${username.username}')	      
        ;`;
            del_shoppingcart=del_shoppingcart+ `
        DELETE FROM shopping.shoppingcart WHERE product_name = '${JSON.parse(req.body.products)[i]}' AND user_name='${username.username}';	      
        `;
    }
    connection.query(success, function (error, results, fields) {
        if (error) throw error;
        var connection1 = mysqlutil.conn();
        connection1.query(del_shoppingcart, function (error, results1, fields) {
            if(req.body.zhifu=='支付宝'){
                res.send('success');
            }else {
                res.send('lose');
            }
        })
        connection1.end();
    });
    connection.end();

});

module.exports = router;
