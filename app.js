var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
var parent_category = require('./routes/parent_category');
var children_category = require('./routes/children_category');
var category = require('./routes/category');
var product = require('./routes/product');
var shoppingcart = require('./routes/shoppingcart');
var add_shoppingcart = require('./routes/add_shoppingcart');
var del_shoppingcart = require('./routes/del_shoppingcart');
var add_number = require('./routes/add_number');
var del_number = require('./routes/del_number');
var pay = require('./routes/pay');
var success_post = require('./routes/success_post');
var success = require('./routes/success');
var clear_cookie = require('./routes/clear_cookie');
var user_main = require('./routes/user_main');
var save_userinfo = require('./routes/save_userinfo');
var add_address = require('./routes/add_address');
var edit_address = require('./routes/edit_address');
var del_address = require('./routes/del_address');
var edit_password = require('./routes/edit_password');
var edit_zhifu = require('./routes/edit_zhifu');

var top = require('./routes/top');
var product_list = require('./routes/product_list');
var add_product = require('./routes/add_product');
var add_product_post = require('./routes/add_product_post');
var edit_product = require('./routes/edit_product');
var edit_product_post = require('./routes/edit_product_post');
var del_product = require('./routes/del_product');
var users_list = require('./routes/users_list');
var del_user = require('./routes/del_user');
var success_list = require('./routes/success_list');
var del_success = require('./routes/del_success');
var admin_list = require('./routes/admin_list');
var del_admin = require('./routes/del_admin');
var edit_admin = require('./routes/edit_admin');
var edit_admin_post = require('./routes/edit_admin_post');
var add_admin = require('./routes/add_admin');
var add_admin_post = require('./routes/add_admin_post');
var admin_login = require('./routes/admin_login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.post('/login', login);
app.post('/register', register);
app.post('/parent_category', parent_category);
app.post('/children_category', children_category);
app.use('/category', category);
app.use('/product', product);
app.use('/shoppingcart', shoppingcart);
app.post('/add_shoppingcart', add_shoppingcart);
app.post('/del_shoppingcart', del_shoppingcart);
app.post('/add_number', add_number);
app.post('/del_number', del_number);
app.use('/pay', pay);
app.post('/success_post', success_post);
app.use('/success', success);
app.use('/clear_cookie', clear_cookie);
app.use('/user_main', user_main);
app.post('/save_userinfo', save_userinfo);
app.post('/add_address', add_address);
app.post('/edit_address', edit_address);
app.post('/del_address', del_address);
app.post('/edit_password', edit_password);
app.post('/edit_zhifu', edit_zhifu);

app.use('/product_list', product_list);
app.use('/top', top);
app.use('/add_product', add_product);
app.post('/add_product_post', add_product_post);
app.use('/edit_product', edit_product);
app.post('/edit_product_post', edit_product_post);
app.post('/del_product', del_product);
app.use('/users_list', users_list);
app.post('/del_user', del_user);
app.use('/success_list', success_list);
app.post('/del_success', del_success);
app.use('/admin_list', admin_list);
app.post('/del_admin', del_admin);
app.use('/edit_admin', edit_admin);
app.post('/edit_admin_post', edit_admin_post);
app.use('/add_admin', add_admin);
app.post('/add_admin_post', add_admin_post);
app.post('/admin_login', admin_login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
