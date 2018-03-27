// //给按钮绑定事件
// $(function (){
//     $(".head>.topbar>.login>a").click(function(){
//         $(".m-layer").css("display","block");
//     });
//     $(".close").click(function(){
//         $(".m-layer").css("display","none");
//     });
// });

//删除按钮的实现
$(function(){
    $(".head>.topbar>.login>a").click(function(){
        $(".m-layer").css("display","block");
    });
    $(".close").click(function(){
        $(".m-layer").css("display","none");
    });
})
//验证用户
$(function(){
    $('#login').click(function(){
        //
        var username = $.trim($("#user").val());
        var pwd = $.trim($("#pwd").val());  
        if (username == "" || pwd == "") {
            alert("用户名和密码不能为空！");
        }else {
            $.ajax({
                type: "get",  
                url: "http://localhost:3000/user",
                async: true,
                success: function (data) {
                    console.log(data[0].name);
                    for (var i = 0; i < data.length; i++) {
                        if (username == data[i].name && pwd == data[i].pwd) {
                            alert('123');
                            break;
                        }
                    }
                    if (i >= 0 && i < data.length) {
                        alert('登录成功');
                        window.location.href="./person.html";
                    }else {
                        alert("用户名不存在或密码错误");
                    }
                }
            });
        }
    });
})

// $(function(){
//     $("#login").click(function(){
//         //对不利情况做一些判断
//         var name = 
//     });
// });