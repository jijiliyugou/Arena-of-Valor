$(function() {
    $('.sp2').mouseenter(function() {
        $('.spanbox').css('display', 'block')
    });
    $('.sp2').mouseleave(function() {
        $('.spanbox').css('display', 'none')
    });
    $('.lastLi').click(function() {
        $('.bgBlack').slideDown(300);
    });
    $('.logIn>.shut').click(function() {
        $('.bgBlack').slideUp(300);
        $('.logIn>.weixin').css('display', 'none')
    });
    $('.logIn>.btn1').click(function() {
        $('.logIn>.weixin').fadeIn(500);
    });
    $('.logIn>.weixin>i').click(function() {
        $('.logIn>.weixin').fadeOut(500);
        $('.logIn>.QQ').fadeOut(500);
    });
    $('.logIn>.btn2').click(function() {
        $('.logIn>.weixin').fadeOut(500);
        $('.logIn>.QQ').fadeIn(500);
    });
    $('.logIn>.QQ>i.QQShut').click(function() {
        $('.logIn>.QQ').fadeOut(500);
    });
    $('.logIn .erWeiMa').mouseenter(function() {
        $('.logIn .THL').fadeIn(500);
        $(' .erWeiMa>.ma').animate({
            'left': 20,
            'marginLeft': 0
        }, 500);
    });
    $('.logIn').mouseleave(function() {
        $('.logIn .THL').fadeOut(200);
        $(' .erWeiMa>.ma').animate({
            'left': '50%',
            'marginLeft': -80
        }, 500);
    });
    $('.r_con .r_wc_gzh').on('mouseenter', function() {
        $('.r_con .r_wc_gzh .r_assBg').css('display', 'block');
    })
    $('.r_con .r_wc_gzh').on('mouseleave', function() {
        $('.r_con .r_wc_gzh .r_assBg').css('display', 'none');
    })
});