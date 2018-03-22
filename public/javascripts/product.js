$(".nav_box").hover(function(){
    $(".nav_box_l").slideDown();
},function(){
    $(".nav_box_l").css('display','none');
});
$(".cate_menu").on('mouseleave',function(){
    $(".nav_box_l").css('display','none');
});
//商品数量和放大镜
$(".jqzoom").imagezoom();
$("#thumblist li").eq(0).addClass("tb-selected");
$("#thumblist li img").mousemove(function() {
    $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
    $(".jqzoom").attr('src', $(this).attr("mid"));
    $(".jqzoom").attr('rel', $(this).attr("big"));
});
var i=$(".goodsNumber").val();
$(".goodsNumber").blur(function(){
    if($(".goodsNumber").val()<1){
        $(".goodsNumber").val('1');
    }
})
$(".click .add").on('click',function(){
    i++;
    $(".goodsNumber").val(i);
})
$(".click .minus").on('click',function(){
    i--;
    if(i<1){
        i=1;
    }
    $(".goodsNumber").val(i);
})