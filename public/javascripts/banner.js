//            中间轮播图
var timer = setInterval(autoNext, 4000);
var imageIndex = 0;
$(".banner_num li").hover(function(){
    clearInterval(timer);
    imageIndex=$(this).index();
    timer = setInterval(autoNext, 4000);
    $(this).addClass('current').siblings().removeClass('current');
    $(".banner_list a").eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
});
function autoNext(){
    if(imageIndex==5){
        imageIndex = 0;
    }
    imageIndex++;
    $(".banner_list a").eq(imageIndex%5).stop().fadeIn('normal').siblings().stop().fadeOut('normal');
    $(".banner_num li").eq(imageIndex%5).addClass('current').siblings().removeClass('current');
}
$(".banner_list a").eq(0).css('display','block');
$(".banner_num li").eq(0).addClass('current');
