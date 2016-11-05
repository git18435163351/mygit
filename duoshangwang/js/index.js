/**
 * Created by Administrator on 2016/9/10.
 *
 */


$(function () {
    focusPic($("#pic-list"), $("#pic-list li"), $("#btn-list li"), $("#prev-btn"), $("#next-btn"), $(".ban-cen"))
    focusPic($("#bom-list"), $("#bom-list li"), $("#icon-list li"), $("#prev-ban"), $("#next-ban"), $(".ban-cenbom"))
    focusPic($(".ad-list"), $(".ad-list li"), $("#icon-new li"), $("#prev-new"), $("#next-new"), $(".ad-wrap"))

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
/*var proData = [];
$.get("json/product.json",function (data) {
    console.log(data)
        proData = data; //所有的商品
    var $wrap=$(".main-wrap")
    $("<li></li>").appendTo($wrap);
        var str = "";
        for(var i=0;i<8;i++){

            str+='<div class="min-wrap fl">'+
                '<li>' +
                '<a href="###"><img src="'+proData[i].src+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p class="ov-ellipsis "><a  href="###">'+proData[i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<span>'+proData[i].pricename+'</span>' +
                '<a href="###" >'+proData[i].sellerNum+'</a>' +
                '</p>' +
                '</div>' +
                '</li>'+
                 '</div>'
        }
    $wrap.eq(0).html(str);
})

})*/


var proData = [];
$.get("json/product.json", function (data) {
    //var $wrap=$(".main-wrap")
    proData=data
    $(".main-wrap").each(function () {
        var index = $(this).index(".main-wrap") + 1;
        console.log(index);
        var str = "";
        for (var i = 8 * (index - 1); i < 8 * index; i++) {
            str+='<div class="min-wrap fl">'+
                '<li>' +
                '<a href="goodspage.html?pId='+proData[i].pId+'"><img src="'+proData[i].src+'" alt=""></a>' +
                '<div class="pad5">' +
                '<p class="ov-ellipsis "><a  href="###">'+proData[i].name+'</a></p>' +
                '<p class="ovfl">' +
                '<span>'+proData[i].pricename+'</span>' +
                '<a href="###" >'+proData[i].sellerNum+'</a>' +
                '</p>' +
                '</div>' +
                '</li>'+
                '</div>'
        }

        $(this).html(str)


    })
});
























/*

var proData = [];
 $.get("json/product.json", function (data) {
     proData=data;
     $(".big-wrap").each(function () {
         var index = $(this).index(".big-wrap") + 1;
         console.log(index);

         var str = "";
         for (var i =2 * (index - 1); i < 2 * index; i++) {
             str += '<div class="main-floor1 wid-1220">'+
                 '<div class="main-head">'+
                '<span class="fl" ><a href="###" style="color:white">F1</a></span>'+
                 '<h2 class="fl"><a href="###" style="color:red">女装货源专区</a></h2>'+
                 '<h5 class="fl"><a href="###" style="color:#666">货源批发市场</a></h5>'+
                 '</div>'+
                 '<div class="main ">'+
                 '<div class="main-lftop ">'+
                 '<dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                 '<dd><a  href="###">t恤</a></dd>'+
                 '<dd><a href="###">雪纺/蕾丝衫</a></dd>'+
                 '<dd><a href="###">衬衫</a></dd>'+
                 '<dd><a href="###">背心</a></dd>'+
                 '</dl>'+
                 '<a   class="fr" href="###"><img src="images/57c78c399293c.jpg" height="165" width="122"/></a>'+
                ' <div class="main-over">'+
                ' <dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                 '<a  href="###">t恤</a>'+
                 '<a href="###">卫衣</a>'+
                 '<a href="###">雪纺/蕾丝衫</a>'+
                 '<a href="###">衬衫</a>'+
                ' <a href="###">背心</a>'+
                 '</dl>'+
                 '</div>'+

                 '</div>'+
                ' <div class="main-lfmin">'+
                ' <dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                 '<dd><a  href="###">t恤</a></dd>'+
                 '<dd><a href="###">卫衣</a></dd>'+
                 '<dd><a href="###">雪纺/蕾丝衫</a></dd>'+
                 '<dd><a href="###">衬衫</a></dd>'+

                 '</dl>'+
                 '<a   class="fr" href="###"><img src="images/57c78c399293c.jpg" height="165" width="122"/></a>'+
                 '<div class="main-over">'+
                 '<dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                ' <a  href="###">t恤</a>'+
                 '<a href="###">卫衣</a>'+
                 '<a href="###">雪纺/蕾丝衫</a>'+
                 '<a href="###">衬衫</a>'+
                 '<a href="###">背心</a>'+
                 '</dl>'+
                 '</div>'+
                 '</div>'+
                 '<div class="main-lfbom">'+
                 '<dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                 '<dd><a  href="###">t恤</a></dd>'+
                 '<dd><a href="###">卫衣</a></dd>'+
                 '<dd><a href="###">雪纺/蕾丝衫</a></dd>'+
                 '<dd><a href="###">衬衫</a></dd>'+
                 '<dd><a href="###">背心</a></dd>'+

                 '</dl>'+
                 '<a   class="fr" href="###"><img src="images/57c78c399293c.jpg" height="165" width="122"/></a></span>'+
                 '<div class="main-over">'+
                 '<dl class="fl">'+
                 '<dt><a href="###" style="color:red" href="###">女士单鞋</a></dt>'+
                 '<a  href="###">t恤</a>'+
                 '<a href="###">卫衣</a>'+
                 '<a href="###">雪纺/蕾丝衫</a>'+
                 '<a href="###">衬衫</a>'+
                 '<a href="###">背心</a>'+
                 '</dl>'+
                 '</div>'+



                 '</div>'+



                 '<div class="min-wrap ">' +
                 '<li>' +
                 '<a href="###"><img src="' + proData[i].src + '" alt=""></a>' +
                 '<div class="pad5">' +
                 '<p class="ov-ellipsis "><a  href="###">' + proData[i].name + '</a></p>' +
                 '<p class="ovfl">' +
                 '<span>' + proData[i].pricename + '</span>' +
                 '<a href="###" >' + proData[i].sellerNum + '</a>' +
                 '</p>' +
                 '</div>' +
                 '</li>' +
                 '</div>' +
                 '<div class="main-right">' +
                 '<p><a href="" ><img src="images/57cd2871c42b0.jpg" height="247" width="247"/></a></p>' +
                 '<p><a href="" ><img src="images/57cd2871c42b0.jpg" height="247" width="247"/></a></p>' +
                 '</div>' +
                 '</div>' +
                 '</div>'

         }

         $(this).html(str)
     })
 })*/



