/**
 * Created by Administrator on 2016/9/15.
 */

$(function () {
    focusPic($("#pic-list"), $("#pic-list li"), $("#btn-list li"), $("#prev-btn"),                      $("#next-btn"), $(".ban-middle"))


    /*  $(".ban-cenbom").each(function () {
     slidePic({
     wrap:$(this),
     list:$(this).find("#bom-list"),
     btn: $(this).find("#bom-list li"),
     prev:$(this).find("#prev-ban"),
     next: $(this).find("#next-ban"),
     autoPlay:true
     })
     })*/
})


var proData = [];
$.get("json/subpage.json", function (data) {
    //var $wrap=$(".main-wrap")

    proData=data;
    //console.log(data)
    $(".floor-wrap").each(function () {
        var index = $(this).index(".floor-wrap") + 1;
        //console.log(index);
        var str = "";
        for (var i =10* (index - 1); i <10* index; i++) {
     str+=
     '<div class="floor-list ">'+
     '<div class="floor-pic fl">'+
     '<ul class="item-list">'+
     '<a href="goodspage.html?pId='+proData[i].pId+'">' +
     '<img src="'+proData[i].src+'" " width="218" height="218"/> </a>'+
     '<h4 class="price  magt-15 magb-5" style="color:#cc0000"><a style="color: red">'+proData[i].newprice+'</a></h4>'+
     '<p ><a href="###">'+proData[i].name+'</a></p>'+
     '<p >' +
     '<span >' +
     '<img class="magt-10 magr-10" src="images/images/xp_titbgb.gif" height="7"width="8"/>已售406个</span>' +
     ' <a class="cart" data-id="'+proData[i].pId+'" style="color: white;" href="##" >加入购物车</a>' +
     '</p>'+
     '</ul>'+
     '</div>'+
     '</div>'

     }
        $(this).html(str)

    })
    var $cart=$('.cart');
   // console.log($buy)
    $cart.click(function(){
        console.log(1)
        var aaa=$(this).attr('data-id');
       // console.log($(this).index())
        $.cookie("pid"+aaa,1)
    });
});








var proData = [];
$.get("json/page.json", function (data) {
    //var $wrap=$(".main-wrap")

    proData=data;

    $(".goods-wrap").each(function () {
        var index = $(this).index(".goods-wrap") + 1;

        var str = "";
        for (var i =2* (index - 1); i <10* index; i++) {
            str+=
                '<div class="floor-list ">'+
                '<div class="floor-pic fl">'+
                '<ul class="item-list">'+
                '<a href="##"><img src="'+proData[i].src+'" " width="218" height="218"/> </a>'+
                '<h4 class="price  magt-15 magb-5" style="color:#cc0000"><a style="color: red">'+proData[i].newprice+'</a></h4>'+
                '<p ><a href="###">'+proData[i].name+'</a></p>'+
                '<p ><span ><img class="magt-10 magr-10" src="images/images/xp_titbgb.gif" height="7"             width="8"/>已售406个</span> <a class="cart" style="color: white;" href="###">加入购物车</a></p>'+
                '</ul>'+
                '</div>'+
                '</div>'

        }

        $(this).html(str)


    })
});

var proData = [];
$.get("json/page.json", function (data) {
    //var $wrap=$(".main-wrap")
    console.log(data.length)
    proData=data;
    console.log(data)
    $(".goods-wrap1").each(function () {
        var index = $(this).index(".goods-wrap1") + 1;
        //console.log(index);
        var str = "";
        for (var i =2* (index - 1); i <10* index; i++) {
            str+=
                '<div class="floor-list ">'+
                '<div class="floor-pic fl">'+
                '<ul class="item-list">'+
                '<a href="goodspage.html?pId='+proData[i].pId+'">' +
                '<img src="'+proData[i].src+'" " width="234" height="234"/>' +
                ' </a>'+
                '<h4 class="price  magt-15 magb-5" style="color:#cc0000"><a style="color: red">'+proData[i].newprice+'</a></h4>'+
                '<p ><a href="goodspage.html?pId">'+proData[i].name+'</a></p>'+
                '<p ><span ><img class="magt-10 magr-10" src="images/images/xp_titbgb.gif" height="7"             width="8"/>已售406个</span> <a class="cart" style="color: white;" href="###">加入购物车</a></p>'+
                '</ul>'+
                '</div>'+
                '</div>'

        }

        $(this).html(str)


    })
});





















/*

   var proData = [];
    $.get("json/subpage.json",function (data) {
        console.log(data)
        proData = data; //所有的商品
        var $wrap=$(".floor-list")
        $("<li></li>").appendTo($wrap);
        var str = "";
        for(var i=0;i<10;i++){
            str+=
                '<div class="floor-list ">'+
                '<div class="floor-pic fl">'+
                '<ul class="item-list">'+
                '<a href="##"><img src="'+proData[i].src+'"  width="218" height="218"/> </a>'+
                '<h4 class="price  magt-15 magb-5" style="color:#cc0000"><a >'+proData[i].reminder+'</a></h4>'+
                '<p ><a href="###">'+proData[i].reminder+'</a></p>'+
                '<p ><a href="###" >金丽都</a> <span class="fr"><img class="magt-10 magr-10"                              src="images/images/xp_titbgb.gif" height="7" width="8"/>已售406个</span></p>'+
                '</ul>'+
                '</div>'+
                '</div>'

        }
        $wrap.eq(0).html(str);
    })
*/


