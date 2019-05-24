$(function() {
    // 周免
    $('.free-hero .details').hide();
    $('.free-hero .details')[0].style.display = 'block';
    $('.free-hero .small')[0].classList.add('conceal');
    $('.free-hero .small').mouseenter(function() {
        $('.free-hero .small').show();
        $(this).hide();
        $('.free-hero .details').hide();
        $(this).siblings('.details').show();
    });
    // 轮播图
    var index = 0;
    $('.Ad').eq(index).fadeIn(500).siblings('a').fadeOut(500);
    $('.title').mouseenter(function() {
        index = $(this).index();
        $('.Ad').eq(index).fadeIn(500).siblings('a').fadeOut(500);
    });
    // 视频图文
    $('.vd>li').mouseenter(function() {
        $(this).children('a').addClass('m-style').parent().siblings('li').children('a').removeClass('m-style');
        $('.s-list>div').eq($(this).index()).addClass('on').siblings().removeClass('on');

    });
    $('.vdate>li').mouseenter(function() {
        $(this).children('a').addClass('d-style').parent().siblings('li').children('a').removeClass('d-style');
        $('.v-content').eq($(this).index()).addClass('on').siblings('ul').removeClass('on');
        $('.i-content').eq($(this).index()).addClass('on').siblings('ul').removeClass('on');

    });
    // 英雄攻略
    $('.t-hero>li').mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).children('.h-data').addClass('sw').parent('li').siblings('li').children('.h-data').removeClass('sw');
        $('.vlist').eq($(this).index()).addClass('v-on').siblings('ul').removeClass('v-on');
        $('.txt-ul').eq($(this).index()).addClass('t-on').siblings('ul').removeClass('t-on');
    });
    $('#m-heroBox').mouseenter(function() {
        $('.t-hero>li').removeClass('active').children('.h-data').removeClass('sw');
        $('#all-on').css('display', 'block');
    });
    $('#m-heroBox').mouseleave(function() {
        $('#all-on').css('display', 'none');
    });
    $('#all-on').mouseenter(function() {
        $('#all-on').css('display', 'block');
    });
    $('#all-on').mouseleave(function() {
        $('#all-on').css('display', 'none');
    });
    $('.hero-type-ul>li').mouseenter(function() {
        $(this).addClass('li-hover').siblings('li').removeClass('li-hover');
        $('.all-hero>ul').eq($(this).index()).addClass('all-hero-on').siblings('ul').removeClass('all-hero-on');
    })
    $('.all-hero>ul>li>a>img').mouseenter(function() {
        $(this).addClass('img-bd');
    });
    $('.all-hero>ul>li>a>img').mouseleave(function() {
        $(this).removeClass('img-bd');
    });
    $('.vli').mouseenter(function() {
        $(this).find('.v-meng').css({
            opacity: 0.8,
            display: 'block'
        });
        var str = $('.vli-a>.v-title').eq($(this).index()).text();
        console.log(str);
        
        $(this).children('a').attr('title',str);
    });
    $('.vli').mouseleave(function() {
        $(this).find('.v-meng').css({
            opacity: 0,
            display: 'none'
        });
    });
    // 精品栏目
    $('.btq-nav-ul>li').mouseenter(function() {
        $('.nav-scroll').css({
            opacity: 1
        });
    });
    $('.btq-nav-ul>li').mouseleave(function() {
        $('.nav-scroll').css({
            opacity: 0
        });
    });
    $('#bs-1>p').click(function() {
        $(this).removeClass('unfold').siblings('p').addClass('unfold');
        if ($(this).children('a').text() == '收起 ↑') {
            $('#jp-big').css('height', '370px');
        } else {
            $('#jp-big').css('height', 'auto');
        }
    });
    $('.boutique-status>p>a').eq(0).mouseenter(function() {
        $(this).children('em').css('text-decoration', 'underline');
    });
    $('.boutique-status>p>a').eq(0).mouseleave(function() {
        $(this).children('em').css('text-decoration', 'none');
    });
    $('#jp>li').mouseenter(function() {
        var str = $(this).children('a').text();
        $('#bs-1 .nav-txt').text('“' + str + '”');
        $('#jp-v>.btq-v>.vlist').eq($(this).index()).addClass('s-v').siblings('ul').removeClass('s-v');
    });
    // 赛事攻略
    $('#bs-2>p').click(function() {
        $(this).removeClass('unfold').siblings('p').addClass('unfold');
        if ($(this).children('a').text() == '收起 ↑') {
            $('#ss-big').css('height', '370px');
        } else {
            $('#ss-big').css('height', 'auto');
        }
    });
    $('#sais>li').mouseenter(function() {
        var str = $(this).children('a').text();
        $('#bs-2 .nav-txt').text('“' + str + '”');
        $('#sais-v>.btq-v>.vlist').eq($(this).index()).addClass('s-v').siblings('ul').removeClass('s-v');

    });
    // 图片和技能攻略
    $('.p-ul>li').mouseenter(function() {
        $(this).addClass('p-li').siblings('li').removeClass('p-li');
        $(this).children('a').addClass('a-c');
        $('.p-more>ul').eq($(this).index()).addClass('p-on').siblings('ul').removeClass('p-on');
    });
    $('.s-ul>li').mouseenter(function() {
        $(this).addClass('s-li').siblings('li').removeClass('s-li');
        $(this).children('a').addClass('a-c');
        $('.ss>div').eq($(this).index()).addClass('div-on').siblings('div').removeClass('div-on');
    });
    $('.ss-img-s>li').click(function() {
        $(this).addClass('active-s-s').siblings('li').removeClass('active-s-s');
        $('.ss-img-ul>li').eq($(this).index()).addClass('active-ss').siblings('li').removeClass('active-ss');
    });
})