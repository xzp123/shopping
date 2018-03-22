
$(".nav_box").hover(function(){
    $(".nav_box_l").slideDown();
},function(){
    $(".nav_box_l").css('display','none');
});
$(".cate_menu").on('mouseleave',function(){
    $(".nav_box_l").css('display','none');
});
//商品筛选
$(".list_cond_l a").on('click',function () {
    $(this).addClass('desc').siblings().removeClass('desc');
});
$.each($("#c1 a"),function(key,value){
    if(value.search.split('&')[0]==location.search.split('&')[0]){
        $("#c1 a").eq(key).addClass('cur').siblings().remove('cur');
    }
});
$.each($("#c2 a"),function(key,value){
    if(value.search.split('&')[1]==location.search.split('&')[1]){
        $("#c2 a").eq(key).addClass('cur').siblings().remove('cur');
    }
});
$.each($("#c3 a"),function(key,value){
    if(value.search.split('&')[2]==location.search.split('&')[2]){
        $("#c3 a").eq(key).addClass('cur').siblings().remove('cur');
    }
});
$.each($("#c4 a"),function(key,value){
    if(value.search.split('&')[3]==location.search.split('&')[3]){
        $("#c4 a").eq(key).addClass('cur').siblings().remove('cur');
    }
});
