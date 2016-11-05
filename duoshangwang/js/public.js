/**
 * Created by Administrator on 2016/9/10.
 */

/*$goTop.click(function () {
    $("body,html").animate({scrollTop:0})
})*/

$(".open").mousedown(function () {
    $(this).animate({right:-48},500)
    $(".close").show()
    $(".close").animate({"right":0},500);

});
$(".close").mousedown(function () {
    $(this).animate({"right":-210},500);
    $(".open").animate({"right":0},500);
});

$(".go-top").mouseover(function () {
    $(this).hide()
    $(".bg-top").show()
})
$(".bg-top").mouseout(function () {
    $(this).hide()
    $(".go-top").show()
})
$(".bg-top").click(function () {

        $("body,html").animate({scrollTop:0},500)
    })




    function focusPic($list,$picLi,$btnLi,$prev,$next,$banCen) {

        /*获取元素*/
       /* var $prev = $("#prev-btn");
        var $next = $("#next-btn");
        var $list = $("#pic-list");
        var $picLi = $("#pic-list li");
        var $btnLi = $("#btn-list li");
        var $banCen = $(".ban-cen");*/

        /*可能会用的变量*/
        var iNow = 0;
        var iW = $picLi.outerWidth();
        var len = $picLi.length;
        var timer = null;
        var animated =true;


// 2、创建一个li，让他的img个第一个的图片一样，然后添加到list里面
    autoplay()
       // $List.html($List.html()+$List.html())
        var src = $picLi.eq(0).find("img").attr("src");
       $('<li><a href="###"><img src="'+src+'"></a></li>').appendTo($list);

        /*右按钮事件*/
        $next.click(function () {
            //点击按钮的时候，先判断，上一次运动有没有结束
            if(!animated) {
                console.log("不能开始下一次")
                return
            }

            if(iNow>=len){
                iNow =0;
                $list.css({"left":0}) //跳到第一张
            }
            iNow++;

            changeView()


        });
        /*左按钮事件*/
        $prev.click(function () {
            if(!animated) {
                console.log("不能开始下一次")
                return
            }

            if(iNow>=len){
                iNow =0;
                $list.css({"left":0}) //跳到第一张
            }
            iNow++;

            changeView()
        });

        $btnLi.click(function () {
            iNow = $(this).index();
            changeView()
        });

        function changeView() {
            animated = false;
            $list.stop().animate({"left":-iW*iNow},function () {
                animated = true;
            });
            $btnLi.removeClass("active").eq(iNow%len).addClass("active")
        }

//自动播放

        function autoplay() {
            timer=setInterval(function () {
                if(!animated) {
                    return
                }

                if(iNow>=len){
                    iNow =0;
                    $list.css({"left":0}) //跳到第一张
                }
                iNow++;

                changeView()
            },2000)
        }

        $banCen.hover(function () {
            clearInterval(timer)
            $next.show()
            $prev.show()
        },function () {
            autoplay()
            $next.hide()
            $prev.hide()
        })
    }



