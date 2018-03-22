if($('.cart_product tr').length<1){
    $('.cart_product').append("<tr style='height:200px' title='null'><td colspan='8' style='font-size:25px;color: rgb(85, 85, 85);'> 您的购物车中暂时没有商品！</td></tr>");
    $('.cart_btn .check').css('display','none');
}
//购物车全选复选框
$('.check_p').click(function(){
    for (var i = 0; i < $('.check_c').length; i++) {
        $('.check_c')[i].checked=this.checked;

    }
});
$('.check_c').click(function(){
    if(!this.checked){
        $('.check_p')[0].checked=this.checked;
    }
})
$('.cart_allnumber').text($('.check_c').length);
//如果商品数量为空进行赋值
for(var v=0;v<$(".goodsNumber").length;v++){
    if($(".goodsNumber").eq(v).val()==' '){
        $(".goodsNumber").eq(v).attr('value','1');
        $(".money").eq(v).text($(".c_price").eq(v).text());
    }
}
sums();
//计算总价钱
function sums(){
    var sum=0;
    var arr=$(".cart_product .money").text().split('￥');
    $.each(arr,function(i){
        sum+=+arr[i];//+表示把字符串的数字转换为 number的数字
    });
    $(".all_price").text('￥'+sum);
}











