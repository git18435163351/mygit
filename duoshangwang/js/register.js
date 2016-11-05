/**
 * Created by Administrator on 2016/9/18.
 */




$(function () {
    var lock = true;
    $('.mes-wrap input').focus(function () {

            $('.none_wrong').hide()

        console.log(1)
    });

    $('.mes-wrap input').blur(function () {
        if ($(this).attr('value') == '') {
            $('.none_wrong').show()
            $('.userName_wrong').hide()
            $('.pwd_wrong').hide()
            $('.userName_right').hide()
        }
    });

    $('#userName').keyup(function () {
        var $username = $('#userName').attr('value');
        console.log($username)
        var reg = /^[0-9A-Za-z\u4e00-\u9fa5-_]{0,10}$/;
        if (reg.test($username)) {
            $('.userName_wrong').show()
            $('.userName_right').hide()
            $('#pwd').keyup(function () {
                var $pwd = $('#pwd').attr('value');
                console.log($pwd)
                var reg = /^[0-9A-Za-z\u4e00-\u9fa5-_]{0,20}$/;
                if (reg.test($pwd)) {
                    $('.pwd_wrong').show()
                    $('.pwd_right').hide()
                }else {
                    $('.pwd_right').show()
                    $('.pwd_wrong').hide()
                }
            })
        }else {
            $('.userName_right').show()
            $('.userName_wrong').hide()
        }
    })


    var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var obtn=document.getElementById("btn");
    var otxt=document.getElementById("txt");

    obtn.onclick=function () {
        var str="";
        while (str.length<4){
            var num=parseInt(Math.random()*36);

            str=str+arr[num];
        }
        otxt.value=str.toUpperCase();//把小写字母转化成大写字母
    }
    $('#checkNum').keyup(function () {
        if (checkNum != otxt.value) {
            $('.check_wrong').show()
        } else {
            //$('.check_right').show()
            $('.check_wrong').hide()

        }
    })





})

