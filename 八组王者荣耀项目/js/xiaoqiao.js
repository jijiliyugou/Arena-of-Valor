$(function () {
    $('.skin-skill .accordLi:first').animate({width: '755px'}, 300);
    $('.skin-skill .accordLi').on('mouseenter',function(){
        if (!$(this).is(':animated')) {
            $(this).animate({width: '755px'}, 300).siblings().animate({width: '110px'}, 300);
        }
    });

    $(window).scroll(function(event) {
        $('.nav-2').addClass('scrollDis');
        if ($(window).scrollTop() <= 80) {
            $('.nav-2').removeClass('scrollDis');
        }
    });

    $('.sub-list li a[href*=#],area[href*=#],.info-tab a[href*=#]').click(function() {
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500);
                return false;
            }
        }
    });

});