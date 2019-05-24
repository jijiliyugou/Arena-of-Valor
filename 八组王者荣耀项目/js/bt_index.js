
$(function () {
    myVideo= $("#myVideo");
    myVideo.show();
    myVideo[0].onended = function(){
    	$('.con_mp4').fadeOut();
    	$('body').removeClass('.con_mp4')
    }
})
$(function () {

    $('.con_part2 li').mouseenter(function () {
        $(this).css('opacity', 1).siblings('li').css('opacity', 0.6);
    });
    $('.con_part2').mouseleave(function () {
        $(this).find('li').css('opacity', 1);
    });
    // $('#box').mouseenter(function () {
    //     $('#box').children('#arr').css('display', 'block');
    // });
    // $('#box').mouseleave(function () {
    //     $('#box').children('#arr').css('display', 'none');
    // });
    var index = 0;
    $('#right').click(function () {
        index++;
        if (index == 9) {
            index = 0;
        }
        $('.screen>ul>li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
    });
    $('#left').click(function () {
        index--;
        if (index < 0) {
            index = 8;
        }
        $('.screen>ul>li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
    });
});
$(function(){
    $('.con_part2>ul>li').click(function(){
        alert('所学有限，暂时无法实现！');
    })
})
// $('#btn1').click(function () {
//     $(this).parent('div').siblings().removeClass('on');
//     $(this).parent('div').addClass('on');
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var $target = $(this.hash);
//         $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
//         if ($target.length) {
//             var targetOffset = $target.offset().top;
//             $('html,body').animate({
//                 scrollTop: targetOffset
//             }, 500);
//             return false;
//         }
//     }
// });



var con_part1 = document.getElementById('con_part1');
var con_nav2 = document.getElementById('con_nav2');

document.body.onscroll = function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop >= con_part1.offsetHeight) {
        con_nav2.classList.add('fixed');
    } else {
        con_nav2.classList.remove('fixed');
    }
}

// $(function () {
//     $('#btn1').on('click', function () {
//         $(window).scrollTop(800);
//     })
// })


// function checkVideo() {
//     if (!!document.createElement('video').canPlayType) {
//         var vidTest = document.createElement("video");
//         oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
//         if (!oggTest) {
//             h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
//             if (!h264Test) {
//                 return false;
//             }
//             else {
//                 if (h264Test == "probably") {
//                     return true;
//                 }
//                 else {
//                     return false;
//                 }
//             }
//         }
//         else {
//             if (oggTest == "probably") {
//                 return true;
//             }
//             else {
//                return false;
//             }
//         }
//     }
//     else {
//         return false;
//     }
// }
// var louie=checkVideo();
// if(louie){
// 	//播放视频
// 	var videoSrc=mediaURLData['2145'];
// 	// alert(videoSrc);
// 	// var video = $("#myVideo")[0];
// 	myVideo= $("#myVideo");
// 	myVideo.attr("src",videoSrc);
// 	myVideo.show();
// 	myVideo[0].onended = function(){
// 		$('.con_mp4').fadeOut();
// 		$('body').removeClass('overfl')
// 	}
// }else{
// 	$('.con_mp4').hide();
// 	$('body').removeClass('overfl');
// }