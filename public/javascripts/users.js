$(".login_btn").click(function(){
    var username=$(".username").val();
    var password=$(".password").val();
    $.post("../login",{'username':username,'password':password},function(data,status) {
        if(data=='false'){
            alert('账号或密码错误，请重新输入！');
            $(".username").val('');
            $(".password").val('');
        }else{
            location.href="/";
        }
    })
})
$(".register_btn").click(function(){
    var username=$(".register .username").val();
    var password=$(".register .password").val();
    var password2=$(".register .password2").val();
    if(username==""||password==""||password2==""){
        alert('用户名或密码不能为空！');
    }else if(password!=password2){
        alert('两次密码不一致，请重新输入!');
    }else {
        $.post("../register", {'username': username, 'password': password}, function (data, status) {
            if (data == 'add success') {
                alert('注册成功！');
                $(".register .username").val('');
                $(".register .password").val('');
                $(".register .password2").val('');
                location.reload();
            } else {
                alert('用户名已存在！');
                $(".register .username").val('');
                $(".register .password").val('');
                $(".register .password2").val('');
            }
        })
    }
})
$(".login_box_tit a").click(function(){
    $(this).addClass('select').siblings().removeClass('select');
    $(".login_box_con div").eq($(this).index()).css('display','block').siblings().css('display','none');

})