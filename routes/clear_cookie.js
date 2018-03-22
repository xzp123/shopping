var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
        //删除Cookie
        res.clearCookie('user');
        res.clearCookie('admin');
        res.redirect('/');
});

module.exports = router;
