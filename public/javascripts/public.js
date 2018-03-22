$(document).ready(function(){
	
 //Tabel Interlaced background color 2015-04-20 DeathGhost
 $('.Interlaced tr:odd').addClass('trbgcolor');
 //left menu toggle style
 $('.menu-list-title').click(function(){
	   $(this).next('li').toggle('1500');
	  });
 //menu current background color
 $(".menu-children li").click(function(){
	 $(".menu-children li").css({background:''});
	 $(this).css({background:'#4bcf99'});
	});
 $(".menu-children li a").click(function(){
	 $(".menu-children li a").css({color:''});
	 $(this).css({color:'#fff'});
	});
 
});
//管理员登录
function adminLogin(){
    var admin_name=$("#admin_name").val();
    var password=$("#admin_password").val();
    $.post("../admin_login",{'admin_name':admin_name,'password':password},function(data,status) {
        if(data=='false'){
            alert('账号或密码错误，请重新输入！');
            $("#admin_name").val('');
            $("#admin_password").val('');
        }else{
            location.href='/htmls/index.html';

        }
    })
}
//修改商品
function edit_product(product_id,name) {
    location.href='/edit_product?product_id='+product_id+'&product_name='+name;
}
//删除商品
function del_product(product_id,name) {
    $.post('../del_product', {'product_id':product_id,'product_name': name}, function (data, status) {
        if(data='del'){
            location.reload();
        }
    })
}
//删除用户
function del_user(name) {
    $.post('../del_user', {'user_name': name}, function (data, status) {
        if(data='del'){
            location.reload();
        }
    })
}
//删除订单
function del_success(id,user_name) {
    $.post('../del_success', {'id': id,'user_name': user_name}, function (data, status) {
        if(data='del'){
            location.reload();
        }
    })
}
//删除管理员
function del_admin(name) {
    $.post('../del_admin', {'name': name}, function (data, status) {
        if(data='del'){
            location.reload();
        }
    })
}
//修改管理员
function admin_name(name){
    location.href='/edit_admin?name='+name;
}
function edit_admin(){
    var admin_name=$(".admin_name").text();
    var pwd1=$(".pwd1").val();
    var pwd2=$(".pwd2").val();
    if(pwd1==""||pwd2==""){
        alert('密码不能为空！');
    }
    else if(pwd1!=pwd2){
        alert('两次密码不一致，请重新输入!');
        $(".pwd1").val('');
        $(".pwd2").val('');
    }else{
        $.post('../edit_admin_post', {'name': admin_name,'password':pwd1}, function (data, status) {
            if(data='success'){
                alert('修改成功！');
                $(".admin_name").val('');
                $(".pwd1").val('');
                $(".pwd2").val('');
                location.href="/admin_list";
            }
        })
    }
}
//新增管理员
function add_admin(){
    var admin_name=$(".admin_name").val();
    var pwd1=$(".pwd1").val();
    var pwd2=$(".pwd2").val();
    if(admin_name==""||pwd1==""||pwd2==""){
        alert('管理员名称或密码不能为空！');
    }
    else if(pwd1!=pwd2){
        alert('两次密码不一致，请重新输入!');
        $(".pwd1").val('');
        $(".pwd2").val('');
    }else{
        $.post('../add_admin_post', {'name': admin_name,'password':pwd1}, function (data, status) {
            if(data=='lose'){
                alert('管理员已存在！');
            }else{
                alert('添加成功！');
                $(".admin_name").val('');
                $(".pwd1").val('');
                $(".pwd2").val('');
            }
        })
    }
}
