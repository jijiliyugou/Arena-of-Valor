$(function () {
    // 周免
    // $('.free-hero .details').hide();
    // $('.free-hero .details')[0].style.display = 'block';
    // $('.free-hero .small')[0].classList.add('conceal');
    // $('.free-hero .small').mouseenter(function () {
    //     $('.free-hero .small').fadeIn(500);
    //     $(this).hide();
    //     $('.free-hero .details').hide();
    //     $(this).siblings('.details').show();
        
    // });
    $(".hero-box ul li").mouseenter(function () {
        $(this).addClass("active").stop().siblings().removeClass("active");
    });
  
})

$(function () {
    //周免英雄华划来划去事件
    $(".box ul li").mouseenter(function () {
        $(this).addClass("active").stop().siblings().removeClass("active");
    });



    // 英雄介绍点击事件
    $(".hero-list .type-ms li").click(function () {
        $(this).parent().parent().find("i").removeClass("block");
        $(this).children("span").children("i").addClass("block")
            .parent().parent().siblings().children("span").children("i").removeClass("block");

        // $(".lbqh").siblings().css("display","none");
        // $(".hero-head li").css("display","none");

    });


    $("#all").click(function () {
        $(".hero-head").find("li").css("display", "block");
    });
    $("#tk").click(function () {


        $(".hero-head .tk").siblings("li").hide();
        $(".hero-head .tk").show();

    });
    $("#zs").click(function () {


        $(".hero-head .zs").siblings("li").hide();
        $(".hero-head .zs").show();

    });
    $("#ck").click(function () {


        $(".hero-head .ck").siblings("li").hide();
        $(".hero-head .ck").show();

    });
    $("#fs").click(function () {


        $(".hero-head .fs").siblings("li").hide();
        $(".hero-head .fs").show();

    });
    $("#ss").click(function () {


        $(".hero-head .ss").siblings("li").hide();
        $(".hero-head .ss").show();

    });
    $("#fz").click(function () {


        $(".hero-head .fz").siblings("li").hide();
        $(".hero-head .fz").show();

    });
    $("#xs").click(function () {


        $(".hero-head .xs").siblings("li").hide();
        $(".hero-head .xs").show();

    });
    $("#zm").click(function () {


        $(".hero-head .zm").siblings("li").hide();
        $(".hero-head .zm").show();

    });
    // 图片忽悠人事件
    $(".game-nav li:nth-of-type(1)").mouseenter(function(){
        $(".content .hero-list").show();
        $(".display-dj").hide();
        $(".display-jn").hide();
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".game-nav li:nth-of-type(2)").mouseenter(function(){
        $(".content .hero-list").hide();
        $(".display-dj").show();
        $(".display-jn").hide();
        $(this).addClass("current").siblings().removeClass("current");
    });
    $(".game-nav li:nth-of-type(3)").mouseenter(function(){
        $(".content .hero-list").hide();
        $(".display-dj").hide();
        $(".display-jn").show();
        $(this).addClass("current").siblings().removeClass("current");
    });
});
