/**
 * Created by Administrator on 2016/9/18.
 */


var picList=$(".pic-list")
var picLi=$(".pic-list li")
autopaly ()
function autopaly () {
    setInterval(function () {

            picLi.eq(0).fadeOut().eq(1).fadeIn(function(){
                picLi.eq(1).fadeOut().eq(0).fadeIn()
            })


    },2000)
}



$(function(){
    $("#login").on("click",function(){
        var userName = $("#userName").val();
        var pwd = $("#pwd").val();
        var checkNum = $("#checkNum").val();

        if(userName == "" || pwd == "" || checkNum == ""){
            alert("请完善你的信息");
        }else{
            if(checkNum != checkCode){
                /*alert("验证码错误");*/
            }else{
                toLogin(userName,pwd);
            }
        }
    });
    function toLogin(userName,pwd){
        if(getCookie(myUserName) != userName){
            alert("无此用户，请先注册");
        }else{//用户名有啦
            if(getCookie(myPwd) != pwd){
                alert("密码错误");
            }else{//密码也对啦
                updateCookie(isLogin,"true",5);
                window.location = "index.html";
            }
        }
    }
});