$(function() {
    $('.login').hide();
    $('.logo').click(function() {
        // 未填写 点击登录目录栏 显示登录页面
        $('.login').show();
        return false
    })

    $('#logo-submit').click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username == '') {
            alert('用户名不能为空!')
            return false;
        }
        if (password == '') {
            alert('密码不能为空!')
            return false;
        }
        if (username == 'admin' && password == '123456') {
            return true;
        } else {
            alert('用户名或密码错误');
            return false;
        }
    })
    $('.close').click(function() {
        $('.login').hide();
    })


})

// $(function() {
//     (function() {
//         var h = $('.content .table3 .tab .bd .col1').height();
//         console.log(h);
//         $('.content .table3 .tab .bd .col2').height(h)
//     })();
//     (function() {
//         $(".input-box button").click(function() {
//             var username = $("#username").val();
//             var password = $("#password").val();
//             if (username == '') {
//                 alert('用户名不能为空！')
//                 return false;
//             }
//             if (password == '') {
//                 alert('密码不能为空！')
//                 return false;
//             }
//             if (username == 'admin' && password == '123456') {
//                 return true;
//             } else {
//                 alert('用户名或密码错误');
//                 return false;
//             }
//         })

//     })

// })()