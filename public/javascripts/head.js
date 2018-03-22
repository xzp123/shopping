//            导航栏部分
//     $(".menu_r .nav_li").hover(
//         function(){
//             $(".nav_li_sub").eq($(this).index()).toggle();
//         });
// 搜索栏
$('.search_btn').on('click',function(){
    var search_txt=$('.search_input').val();
    location.href='/category/?category_name='+search_txt;

});
if($('.type .c_category a').length<1){
    $('.type').css('display','none');
}else{
    $('.type').css('display','block');
}

//            左边导航栏
$(".nav_box_l li").hover(
    function () {
        $(this).addClass('cl').siblings().removeClass('cl');
        $(".nav_box_r ul").eq($(this).index()).addClass('tgl').siblings().removeClass('tgl');
    });
    $(".cate_menu").on('mouseleave',function(){
        $(".nav_box_l li").removeClass();
        $(".nav_box_r ul").removeClass();
    });
$.post("../parent_category",function(data,status) {
    var data = JSON.parse(data);
    $.each($(".nav_box_l ul a"), function (key, value) {
        $.each(data[key].category, function (index, el) {
            value.append(el);
            $(".nav_box_l ul a").eq(key).attr('href','/category/?category_id='+data[key].id);
        })
    });
    $.each($(".nav_box_r ul em"), function (key, value) {
        $.each(data[key].category, function (index, el) {
            value.append(el);
        })
    });
});
$.post("../children_category",function(data,status) {
    var data2 = JSON.parse(data);
    for (var i = 0; i < data2.length; i++) {
        for (var j = 0; j < $(".nav_box_l ul a").length + 1; j++) {
            if (j == data2[i].parent_id) {
                $(".nav_box_r li div").eq(j - 1).append("<a href='#'></a>");
            }
        }
    }
    $.each($(".nav_box_r div a"), function (key, value) {
        $.each(data2[key].category, function (index, el) {
            value.append(el);
            $(".nav_box_r div a").eq(key).attr('href','/category/?category_id='+data2[key].id);

        })
    })
});
//导航购物车
function cart() {
    if($('.menu_l .nav_li a').eq(1).text()=='请登录'){
        if(confirm("您当前为未登录,需登录后才能查看购物车！是否登录？")){
            location.href="/users";
        }
    }else{
        location.href="/shoppingcart";
    }
}
//商品分类
$.each($('.list_goods .goods'),function(key,value){
    if((key+1)%4==0){
        $('.list_goods .goods').eq(key).after('<div style="clear:both;"></div>');
    }
})

//购物车加入商品
function add_cart(name) {
    if($('.menu_l .nav_li a').eq(1).text()=='请登录'){
        if(confirm("您当前为未登录！是否登录？")){
            location.href="/users";
        }
    }else{
        var number=$(".goodsNumber").val();
        var username=$('.menu_l .nav_li a').eq(1).text();
        $.post('../add_shoppingcart', {'product_name': name,'number':number,'username':username}, function (data, status) {
            if(data=='add'){
                alert('添加购物车成功！');
                location.href="/shoppingcart"
            }
        })
    }
}
// 购物车删除商品
function del_cart(name) {
    var username=$('.menu_l .nav_li a').eq(1).text();
    $.post('../del_shoppingcart', {'product_name': name,'username':username}, function (data, status) {
        if(data=='del'){
            location.reload();
        }
    })
}
//购物车增加商品数量
function add_number(name) {
    var username=$('.menu_l .nav_li a').eq(1).text();
    $.post('../add_number', {'product_name': name,'username':username}, function (data, status) {

    })
}
// 购物车减少商品数量
function del_number(name) {
    var username=$('.menu_l .nav_li a').eq(1).text();
    if($(".goodsNumber").val()>1){
        $.post('../del_number', {'product_name': name,'username':username}, function (data, status) {

        })
    }
}
//判断用户是否登入
if($('.menu_l .nav_li a').eq(1).text()=='请登录'){
    $('.menu_l .nav_li a').eq(1).attr('href','/users');
    $('.menu_l .nav_li a').eq(2).attr('href','/users');
}else{
    $('.menu_l .nav_li a').eq(1).attr('href','javascript:;');
    $('.menu_l .nav_li a').eq(2).text('退出');
    // $('.menu_l .nav_li a').eq(2).attr({'href':'','onclick':'exit()'});
}
//退出登录
$('.menu_l .nav_li a').eq(2).on('click',function() {
    $.get('../clear_cookie', function (data, status) {

    })
});
//付款页面选择收货地址
$('.shouhuo_address li').eq(0).addClass('check');
$('.shouhuo_address li').click(function(){
   $(this).addClass('check').siblings().removeClass('check');
})
// 付款页面选择物流
$('.wuliu li').eq(0).addClass('check');
$('.wuliu li').click(function(){
    $(this).addClass('check').siblings().removeClass('check');
})
//支付页面选择付款方式
$('.zhifu li').eq(0).addClass('check');
$('.zhifu li').click(function(){
    $(this).addClass('check').siblings().removeClass('check');
})
//付款页面新增收货地址
$('.cart_title .add_address_btn input').click(function(){
    $('.add_address h4').text('添加新地址');
    $('.address_add input[type="button"]').eq(0).css('display','block');
    $('.address_add input[type="button"]').eq(1).css('display','none');
    $('.address_bg').css('display','block');
    $('.address_add').css('display','block');
    $('body').css('overflow','hidden');

});
$('.address_add .add_address .add_save').eq(2).click(function(){
    $('.address_bg').css('display','none');
    $('.address_add').css('display','none');
    $('.address_add input[type="text"]').val('');
    $('body').css('overflow','visible');
});
//编辑收货地址页面
function edit_address(id,username,name,phone,address,youbian){
    $('.address_add .add_address h4').text('修改地址');
    $('.address_add input[type="button"]').eq(0).css('display','none');
    $('.address_add input[type="button"]').eq(1).css('display','block');
    $('.address_bg').css('display','block');
    $('.address_add').css('display','block');
    $('body').css('overflow','hidden');
    $('.address_add .add_address').attr('title',id);
    $('.address_add .add_address input').eq(0).val(name);
    $('.address_add .add_address input').eq(1).val(address);
    $('.address_add .add_address input').eq(2).val(youbian);
    $('.address_add .add_address input').eq(3).val(phone);

}
//获取订单详情
function pay() {
    var ads=$('.shouhuo_address li').eq(0).addClass('check');
    var name=$('.shouhuo_address .check .name_phone span').eq(0).text();
    var phone=$('.shouhuo_address .check .name_phone span').eq(1).text();
    var wuliu=$('.wuliu .check  span').text();
    var address=$('.shouhuo_address .check .address textarea').text();
    var liuyan=$('.liuyan input').val();
    var zhifu=$('.zhifu .check span').text();
    if(ads.length<=0){
        alert('请选择收货地址！');
    }else if($('.cart_product tr').attr('title')=='null'){
            alert('购物车中没有商品！');
        }
        else{
            var products=[];
            var number=[];
            var price=$('.all_price').text();
            $.each($(".cart_product .goodsNumber"),function(key,value){
                number.push(value.value);
            });
            $.each($(".cart_product img"),function(key,value){
                products.push(value.title);
            });
            $.post('../success_post', {'name': name,'phone':phone,'wuliu':wuliu,'address':address,'liuyan':liuyan,'number':JSON.stringify(number),'products':JSON.stringify(products),'zhifu':zhifu}, function (data, status) {
                if(data=='success'){
                    location.href='/success?name='+name+'&phone='+phone+'&address='+address+'&price='+price;
                }else{
                    location.href='/success?name='+name+'&phone='+phone+'&address='+address+'&price=￥0';
                }
            });
    }
}
//个人中心
function usermain() {
    if($('.menu_l .nav_li a').eq(1).text()=='请登录'){
        if(confirm("您当前为未登录,需登录后才能查看个人中心！是否登录？")){
            location.href="/users";
        }
    }else{
        location.href="/user_main";
    }
}
$.each($(".center_l dd a"),function(key,value){
    $(".center_l dd a").eq(key).click(
        function(){
            $(".center_l dd a").removeClass('current');
            $(this).addClass('current');
            $(".wrap .center_r .my_desc").eq(key).addClass('block').siblings().removeClass('block');
        });
})
//保存用户资料
function save_userinfo(username) {
    var name=$('.center_r .my_info input').eq(0).val();
    var sex=$('.center_r .my_info input').eq(1).val();
    var birthday=$('.center_r .my_info input').eq(2).val();
    var phone=$('.center_r .my_info input').eq(3).val();
    var email=$('.center_r .my_info input').eq(4).val();
    var address=$('.center_r .my_info input').eq(5).val();
        $.post('../save_userinfo', {'username': username,'name':name,'sex':sex,'birthday':birthday,'phone':phone,'email':email,'address':address}, function (data, status) {
            if(data='success'){
                alert('修改个人资料成功！');
            }
        })
}
//添加收货地址
function add_address(username) {
    var name=$('.add_address input').eq(0).val();
    var address=$('.add_address input').eq(1).val();
    var youbian=$('.add_address input').eq(2).val();
    var phone=$('.add_address input').eq(3).val();
    $.post('../add_address', {'username': username,'name':name,'address':address,'youbian':youbian,'phone':phone}, function (data, status) {
        if(data='success'){
            alert('添加地址成功！');
            location.reload();

        }
    })
}
//修改收货地址
function save_edit(username) {
    var id=$('.address_add .add_address').attr('title');
    var name=$('.address_add .add_address input').eq(0).val();
    var address=$('.address_add .add_address input').eq(1).val();
    var youbian=$('.address_add .add_address input').eq(2).val();
    var phone=$('.address_add .add_address input').eq(3).val();
    $.post('../edit_address', {'id':id,'username': username,'name':name,'address':address,'youbian':youbian,'phone':phone}, function (data, status) {
        if(data='success'){
            alert('修改成功！');
            location.reload();

        }
    })
}
//删除收货地址
function del_address(id,username) {
    $.post('../del_address', {'id':id,'username': username}, function (data, status) {
        if(data='success'){
            alert('删除成功！');
            location.reload();

        }
    })
}
//用户修改密码
function edit_password(username) {
    var pwd1=$('.set_pwd input').eq(0).val();
    var pwd2=$('.set_pwd input').eq(1).val();
    var pwd3=$('.set_pwd input').eq(2).val();
    if(pwd2!=pwd3){
        alert('两次新密码不一致！');
    }else{
        $.post('../edit_password', {'username': username,'old_password':pwd1,'new_password':pwd2}, function (data, status) {
            if(data=='lose'){
                alert('旧密码错误！');
            }else{
                alert('修改成功！');
                location.reload();
            }
        })
    }
}
//个人中心未支付订单支付
function daizhifu(id){
    $('.address_bg').css('display','block');
    $('.quzhifu').css('display','block');
    $('.quzhifu').attr('title',id);
    $('body').css('overflow','hidden');
}
$(".quzhifu .add_save").eq(1).click(function(){
    $('.address_bg').css('display','none');
    $('.quzhifu').css('display','none');
    $('body').css('overflow','visible');
})
function edit_zhifu(username){
    var id=$('.quzhifu').attr('title');
    var zhifu=$('.zhifu .check span').text();
    $.post('../edit_zhifu', {'id':id,'username': username,'zhifu':zhifu}, function (data, status) {
        if(data=='success'){
            alert('支付成功！');
            location.reload();
        }else{
            alert('支付失败！');
            location.reload();
        }
    })
}








