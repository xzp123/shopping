var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
router.get('/', function(req, res, next) {
        res.render('edit_admin',{name:req.query.name});

});

module.exports = router;
