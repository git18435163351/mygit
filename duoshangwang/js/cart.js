/**
 * Created by Administrator on 2016/9/18.
 */
$(".num-wrap").click(function () {
    $(".account").show()

})



$(function () {
    /*
     var $chAll = $(".ch-all");
     var $chItem = $(".ch-item");
     var $ok = $(".ok");
     var $cartBar = $("#cart-bar");

     var $allNum = $(".all-num");
     var $allSum = $(".all-sum");

     /!*var iT = $ok.offset().top;*!/

     $chAll.on("click",function () {
     /!*判断当前是否选中*!/
     if($(this).prop("checked")){
     $chItem.prop("checked",true);
     $chAll.prop("checked",true)
     }else {
     $chItem.prop("checked",false);
     $chAll.prop("checked",false)
     }
     getSum()
     });*/
    var $allSum = $(".all-sum");
    //事件委托
    /*加减*/
    var $allNum = $(".all-num");
    var $allSum = $(".all-sum");
    /*加减*/
    $(document).on("click",".num-minus",function () {

        var oP =$(this).parents(".cart-left");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price");
        var sum = oP.find(".item-sum");
        console.log(num)
        var val = num.val();
        if(val<=1){
            val=2
        }
        num.val(--val);
        //金额
        sum.html(val*price.html())
        getSum()

    });
    $(document).on("click",".num-plus",function () {

        var oP =$(this).parents(".cart-left");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price");
        var sum = oP.find(".item-sum");

        var val = num.val();

        num.val(++val);//可能要判断库存

        //金额
        sum.html(val*parseInt(price.html()))
        var allNum = 0;
        var allSum = 0;

        /*var oP = $(this).parents(".mes-cost");*/
        var num = oP.find(".cart-list");
        var sum = oP.find(".item-sum");
        allNum += parseFloat(num.val());
        allSum += parseFloat(sum.html());

        $allNum.html(allNum);
        $allSum.html(allSum);
        // getSum()
        console.log(parseFloat(num.val()))
    });


});


var proData = [];
$.get("json/subpage.json",function (data) {

    proData = data; //所有的商品var $wrap=$(".cart-left")
    var str = "";
   for(var i=0;i<proData.length;i++) {
        console.log(proData[i].pId)
        if($.cookie("pid"+proData[i].pId) != null) {
            $.cookie("pid00100010","-1",{expires:-1,path:"/"});
            console.log($.cookie("pId" + proData[i].pId))
            str +=
                '<div class="cart-list">'+

                '<div class="cart-left fl">' +
                '<div class="cart-title ">'+
                '<ul class="title-list ">'+
                '<li  class="fl cart-shop">商城商品</li>'+
                '<li  class="fl">价格</li>'+
                '<li  class="fl">数量</li>'+
                '<li  class="fl">小计</li>'+
                '<li  class="fl">操作</li>'+
                '</ul>'+
                '</div>'+
                '<ol class="fl cart-lone ">' +
                '<img class="fl padr-10"  src="'+proData[i].src+'" width="65px" height="65px"/>' +
                '<li>' +
                '<a href="/product/2943117.html">'+proData[i].name+'</a></li>' +
                '<li><span class="attr">白色;均码</span></li>' +
                '</ol>' +
                '<ul class="fl ">' +
                '<li class="item-price">'+proData[i].newprice+'</li>' +
                '</ul>' +
                '<ul class="fl ">' +
                '<div class="item-num">' +
                '<div class="num-wrap ovfl">' +
                '<a href="javascript:;" class="num-minus">-</a>' +
                '<input type="text" value="0" class="num-text" />' +
                '<a href="javascript:;" class="num-plus">+</a>' +
                '</div>' +
                '</div>' +
                '</ul>' +
                '<ul class="fl ">' +
                '<h3 class="padl-30 item-sum" style="color: red">'+proData[i].newprice+'</h3>' +
                '</ul>' +
                '<ul class="fl ">' +
                '<li class="padl-50 tem-delete">删除</li>' +
                '</ul>' +
                '<div class="account fl">'+
                '<div  class=" add-accout fl" >'+
                '<h2 class="fr item-sum " style="color: red">130.8</h2>'+
                '<span class="fr continue1">商品总价:</span>'+
                '</div>'+
                '<div  class=" add-accout fl" >'+
                '<h4 class="fr"><a href="##"  style="color:white"> 立即下单</a></h4>'+
                '<span class="fr continue"><a href="##"> 继续购物</a></span>'+
                '</div>'+
                '</div>'


        }

    }



$(".cart-list").html(str);



});


$(document).on("click",".tem-delete",function () {
    // $(this).parents(".cart-list").remove();
    console.log($(this).parents(".cart-list").remove())
    /*    console.log($(this).parents(".cart-list").attr("data-id"));
    $.removeCookie("pId"+$(this).parents(".cart-list").attr("data-id"),{path:"/"});
*/
});



/*




var proData = [];
$.get("json/product.json",function (data) {
    console.log(data);
    proData = data;

    var str = "";
    for (var i=0;i<proData.length;i++){
        console.log(proData[i].name)
        if($.cookie("id"+proData[i].pId) != null){
            console.log($.cookie("id"+proData[i].pId))
            str+='<li class="cartPInfo">' +
                '<div class="pItem pCheckbox">' +
                '<input type="checkbox" class="ch-item"/>' +
                '</div>' +
                '<div class="pItem pGoods">' +
                '<div class="pItem cartPImg">' +
                '<a href="###"><img src="'+proData[i].img+'"/></a>' +
                '</div>' +
                '<div class="pItem cartName">' +
                '<a href="###">'+proData[i].name+' <span class="sWeight">'+proData[i].weight+'</span>kg</a>' +
                '</div>' +
                '</div>' +
                '<div class="pItem pPrice">￥<strong class="price">'+proData[i].price+'</strong></div>' +
 '<div class="pItem pPromotion">&nbsp;</div>' +
 '<div class="pItem pQuantity">' +
 '<div class="cartAmount">' +
                '<a href="###" class="num-minus">-</a><input type="text" value="1" class="amount"/>' +
                '<a href="###" class="num-plus">+</a>' +
                '</div></div>' +
                '<div class="pItem pWeight">' +
                '<span class="weight">'+proData[i].weight+'</span>kg</div>' +
                '<div class="pItem pSubtotal">￥<span class="all-sum">'+proData[i].price+'</span>' +
                '</div><div class="pItem pInventory">现货</div>' +
                '<div class="pItem pOperator">' +
                '<a href="###">收藏</a>' +
                '<a href="###" class="delete">删除</a>' +
                '</div>' +
                '</li>'
        }




    }
    $(".cartItem").html(str)
})

*/

