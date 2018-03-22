var express = require('express');
var mysqlutil = require('../src/util/mysqlutil');
var router = express.Router();
var formidable = require('formidable');
util = require('util');
/* GET users listing. */
router.post('/add_product_post', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true; // 保留扩展名
    form.uploadDir = 'public/upload/images/';// 设置文件上传路径
    form.multiples = true;//开启数组功能
    var img_upload_s=[];
    var img_upload_n=[];
    var img_upload_b=[];
    var img_upload_desc=[];
    form.parse(req, function (err, fields, files) {
        var img_upload = files.img_upload.path;
        img_upload = img_upload.replace(/\\/g, '/');
        var img_upload1 = img_upload.indexOf('/');
        var img_upload2 = img_upload.substring(img_upload1);
        img_path(img_upload_s,files.img_upload_s);
        img_path(img_upload_n,files.img_upload_n);
        img_path(img_upload_b,files.img_upload_b);
        img_path(img_upload_desc,files.img_upload_desc);
        var connection=mysqlutil.conn();
        var product=
            `INSERT INTO shopping.product
	        ( product_name,
	        product_desc,
	        product_spec,
	        category_p_id,
	        category_c_id,
	        style_id,
	        product_type_id,
	        product_price)
	        VALUES(
	        '${fields.product_name}',
	        '${fields.product_desc}',
	        '${fields.product_spec}',
	        '${fields.category_p}',
	        '${fields.category_c}',
            '${fields.style}',
            '${fields.type}',
            '${fields.price}'
	        );`;
        var product_images=
            `INSERT INTO shopping.product_images
	        ( product_image_good,
	        product_image_s1,
	        product_image_s2,
	        product_image_s3,
	        product_image_n1,
	        product_image_n2,
	        product_image_n3,
	        product_image_b1,
	        product_image_b2,
	        product_image_b3)
	        VALUES(
	        '${img_upload2}',
	        '${img_upload_s[0]}',
	        '${img_upload_s[1]}',
	        '${img_upload_s[2]}',
	        '${img_upload_n[0]}',
            '${img_upload_n[1]}',
            '${img_upload_n[2]}',
            '${img_upload_b[0]}',
            '${img_upload_b[1]}',
            '${img_upload_b[2]}'
	        );`;
        var product_desc="";
            for (var i = 0; i < img_upload_desc.length; i++) {
                product_desc=product_desc+
                    `INSERT INTO shopping.desc_images
	                ( desc_image,product_name)
	                VALUES(
	                '${img_upload_desc[i]}',
	                '${fields.product_name}'
	                );`;
            }
        var select_product=`SELECT product_name FROM shopping.product WHERE product_name='${fields.product_name}';`;
        connection.query(select_product,function(error, results, fields){
            if(results.length>0){
                res.send("商品已存在！");
            }else{
                var connection1=mysqlutil.conn();
                var add_product=product+product_images+product_desc;
                connection1.query(add_product, function (error, results1, fields) {
                    if (error) {
                        res.send("输入内容为空或未填写完整！");
                    }else {
                        res.send("添加成功！");
                    }
                });
                connection1.end();
            }
        })
        connection.end();
    });
});
//多张上传图片的格式处理封装
function img_path(img,name) {
    for ( var key=0;key< name.length;key++) {
        var img_path = name[key].path;
        img_path = img_path.replace(/\\/g, '/');
        var img_path1 = img_path.indexOf('/');
        var img_path2 = img_path.substring(img_path1);
        img.push(img_path2);
    }
}


module.exports = router;

