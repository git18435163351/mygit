/**
 * Created by Administrator on 2016-09-16.
 */


var $smalllist=$(".pic-list li")
$smalllist.click(function () {
    $(this).addClass("active")

});
$smalllist.mousemove(function () {
    $(this).addClass("active").siblings().removeClass("active");


});
    $(".mes-list2 li").mousemove(function () {
        $(".mes-list2 img").hide().eq($(this).index()).show()
    });
    $(".mes-list2 li").mouseout(function () {
        $(".mes-list2 img").hide()
    });
    $(".mes-list2 li").mousedown(function () {
        $("#loginshow").show()
    });
    $(".close_l").mousedown(function () {
        $("#loginshow").hide()
    });
    $(".mes-color li").mousemove(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".mes-color li").mousedown(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

 $(".show-list li").click(function () {
     $(this).addClass("active").siblings().removeClass("active");
     $(".show-cbom div").hide().eq($(this).index()).show()
 })




$(function () {

    var url = window.location.href;
    //console.log(url.split("?"))//数组
    //url.split("?")[1]//"pId=0020003"

    // console.log(url.split("?")[1].split("=")[1])//0020003
    var pId = fnBase.request("pId");
    //console.log(fnBase.request("timer"));
    $.get("json/subpage.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].pId == pId) {
                //找到和url里面pId一样的商品
                console.log(data[i].imgArray);

                //有imgArray就使用imgArray，没有的话就使用[data[i].img]（放在数组里面使用）

                var imgArray = data[i].imgArray || [data[i].src];
                console.log(imgArray);
                /*设置大图的src*/
                $blowUpImg.attr("src", imgArray[0])
                $bigPicWrap.find("img").attr("src", imgArray[0])

                /*设置列表图片的src*/
                var str = "";
                for (var j = 0; j < imgArray.length; j++) {
                    str += '<li><img src="' + imgArray[j] + '" ></li>'
                }

                $imgList.html(str)
            }
        }
    });
    $.get("json/.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].pId == pId) {
                //找到和url里面pId一样的商品
                console.log(data[i].imgArray);

                //有imgArray就使用imgArray，没有的话就使用[data[i].img]（放在数组里面使用）

                var imgArray = data[i].imgArray || [data[i].src];
                console.log(imgArray);
                /*设置大图的src*/
                $blowUpImg.attr("src", imgArray[0])
                $bigPicWrap.find("img").attr("src", imgArray[0])

                /*设置列表图片的src*/
                var str = "";
                for (var j = 0; j < imgArray.length; j++) {
                    str += '<li><img src="' + imgArray[j] + '" ></li>'
                }

                $imgList.html(str)
            }
        }
    });



    var $bigPicWrap = $(".bigpic-list ");
    var $moveBox = $(".move-box");
    var $blowUpWrap = $(".blowUp-pic");
    var $blowUpImg = $(".blowUp-pic img");
    var $imgList = $(".pic-list li ");
    var offsetT = $bigPicWrap.offset().top;
    var offsetL = $bigPicWrap.offset().left;



    /*列表图片点击事件*/
    $imgList.on('click', "img", function () {
        var src = $(this).attr("src");
        $bigPicWrap.find("img").attr("src", src);
        $blowUpImg.attr("src", src)
    });
    $imgList.on('mouseover', "img", function () {
        var src = $(this).attr("src");
        $bigPicWrap.find("img").attr("src", src);
        $blowUpImg.attr("src", src)
    });

    /*当鼠标移入图片的壳子时*/
    $bigPicWrap.mouseover(function () {
        $moveBox.show();
        $blowUpWrap.show();
    });

    /*当鼠标移出图片的壳子时*/
    $bigPicWrap.mouseout(function () {
        $moveBox.hide();
        $blowUpWrap.hide();
    });

    $bigPicWrap.mousemove(function (ev) {
        var iL = ev.pageX - offsetL -100;
        var iT = ev.pageY - offsetT - 100;

        if (iL < 0) {
            iL = 0
        } else if (iL > 220) {
            iL = 220
        } else {
            iL = iL
        }

        iT = iT < 0 ? 0 : iT > 220 ? 220 : iT;
        //console.log(iT);
        $moveBox.css({left: iL, top: iT})
        //iL 0-200
        //iT 0-200
        $blowUpImg.css({left:-iL*2.1,top:-iT*2.1})
        console.log(iL)
    });
})


$(function () {

/*    var $chAll = $(".ch-all");
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
    //事件委托
    var $allNum = $(".all-num");
    var $allSum = $(".all-sum");
     /*加减*/
    $(document).on("click",".num-minus",function () {

        var oP =$(this).parents(".pic-message");
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
        getSum()

    });
    $(document).on("click",".num-plus",function () {

        var oP =$(this).parents(".pic-message");
        var num =oP.find(".num-text");
        var price = oP.find(".item-price");
        var sum = oP.find(".item-sum");

        var val = num.val();

        num.val(++val);//可能要判断库存

        //金额
        sum.html(val*price.html())
        getSum()
    });


   function getSum() {
        var allNum = 0;
        var allSum = 0;
            var oP = $(".mes-cost");
            var num = oP.find(".num-text");
           var val = num.val();
           var sum = oP.find(".item-sum");
            allNum += parseFloat(val);
            allSum += parseFloat(val);

        $allNum.html(allNum);
      $allSum.html(allSum);


    }


    //console.log(fnBase.accAdd(0.2,0.1));
    //console.log(0.1+0.2)
});
