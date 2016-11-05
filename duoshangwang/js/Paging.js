/**
 * Created by Administrator on 2016/9/20.
 */


$(".nav-li").mouseover(function () {
    $(".none-wrap").show()
    console.log(1)
})
$(".nav-li").mouseout(function () {
    $(".none-wrap").hide()

})
$(window).scroll(function () {
   // console.log($(this).scrollTop())
    var height=$(this).scrollTop()
    if(height>=300){
        $(".top").show()
    }else {
        $(".top").hide()
    }

})



/*分页json*/

/* slidePic($(".ad-wrap"),$(".ad-list"),$(".ad-btn li"),$(".ad-prev"),$(".ad-next"));*/
function addData(page) {


    // proData = data; //所有的商品
    var pagenum = (page-1)*10;

    var str = "";

    //var pagecount=proData.length/pageRows;//总页数
   for(var a = 0 ; a < pageRows; a++){

       str += '<div class="pic-wrap fl ">'+
           '<ul class="item-list">'+
           '<a href="goodspage.html?pId='+productData[a].pId+'"><img src="'+productData[a+pagenum].src +'" width="218" height="218"/> </a>'+
           '<a ><img src="images/pro3.jpg"/></a>'+
           '<p><h4 class="price if_login magt-10 magb-5" style="color:#cc0000">￥37.9<span class="fr">建议零售价：￥88.0</span></h4></p>'+
         '<p ><a href="###" style="color: #666666"> 金丽都 2016秋新款韩版修身显瘦拼接绣花打底衫 96129</a></p>'+
       '<p ><a  class="cart" href="###" data-id="'+productData[a].pId+'">购物车</a> <span class="fr"><img class="magt-5 magr-5" src="images/images/xp_titbgb.gif" height="7" width="8"/>已售406个</span></p>'+
           '</ul>'+
           '</div>'
    }
    $(".main-bom").eq(0).html(str);
    var $cart=$('.cart');
    // console.log($buy)
    $cart.click(function(){
        console.log(1)
        var aaa=$(this).attr('data-id');
        // console.log($(this).index())
        $.cookie("pid"+aaa,1)
    });

}

/*分页底部页码*/
var productData = [];
var pageRows=20;//一页10个
$.get("json/subpage.json",function (data) {
    //console.log(data);

    productData = data;
    console.log(productData.length)
    var pageCount =productData.length/pageRows;//总共有多少页

    addData(1);

    $("#page-rows").createPage({
        pageCount:pageCount, //总共有多少页
        current:1,//当前第几页
        backFn:function (page) {
            //alert(page)当前跳转到的页码
            addData(page)
        }
    });

});



































