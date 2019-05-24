$(function () {

    // 头部DNF  排行榜
    $('.DNF>img').on('mouseenter',function(){
       $('.DNF_bg').show();
    });

    $('.DNF_bg').on('mouseenter',function(){
        $('.DNF_bg').show();
     });

     $('.DNF_bg').on('mouseleave',function(){
        $('.DNF_bg').hide();
     });

     $('.top_game').on('mouseenter',function(){
        $('.top_top').show();
     })

     $('.top_top').on('mouseenter',function(){
        $('.top_top').show();
     });

     $('.top_top').on('mouseleave',function(){
        $('.top_top').hide();
     });
    // 视频播放选择联赛
    $('.top_video_head_right').on('click', function () {
        if ($(this).children('ul').css('display') == 'none') {
            $(this).children('i').css('transform', 'rotate(360deg)');
            $(this).children('ul').show();
        } else {
            $(this).children('i').css('transform', 'rotate(180deg)');
            $(this).children('ul').hide();
        }
    });


    // 最新资讯鼠标移入
    var news = [
        {
            adress: 'KPL',
            title: '虎牙明星大腿杯：XQ战队出战，阿泰直言“赢一把这么开心吗”',
            day: '05-13',
            picture: './img/下载 (31).jpg',
            minute: '大腿杯冠军究竟是职业选手还是主播，请大家继续关注5月13、14、15日20:00-24:00由虎牙独家带来的明星大腿杯精彩直播。'
        },

        {
            adress: 'KPL',
            title: '【春季赛课代表】EDG.M vs TS，多体系战术对决，胜者前进', day: '05-13',
            picture: './img/下载 (32).jpg',
            minute: '【春季赛课代表】EDG.M vs TS，多体系战术对决，胜者前进'
        },

        {
            adress: 'KPL',
            title: '【春季赛课代表】WE vs VG，季后赛今日开战', day: '05-10',
            picture: './img/下载 (33).jpg',
            minute: '【春季赛课代表】WE vs VG，季后赛今日开战'
        },

        {
            adress: 'KPL',
            title: 'KPL春季赛季后赛今日18:00打响，WE对阵VG高燃巅峰对决',
            day: '05-9',
            picture: './img/下载 (34).jpg',
            minute: '今天季后赛首战由西部赛区第四WE对阵东部赛区第五VG。WE762与VG易瞳的边路对抗成最大亮点。'
        },

        {
            adress: 'KPL',
            title: '庆KPL季后赛开赛，内测皮肤等多重福利来袭！你还不快来领？',
            day: '05-9',
            picture: './img/下载 (35).jpg',
            minute: ':KPL一直以来都是喜欢着王者荣耀的人心中最神圣的舞台，在这里，有无数选手挥洒汗水，为了梦想拼尽一切。 2019年KPL新秀选拔赛让更多的潜力选手们有机会登上KPL舞台，在此逐梦荣耀，为热爱而战！'
        },

        {
            adress: 'KPL',
            title: '5月9日18:00季后赛热血开战，生死之争谁能剑指银龙？',
            day: '05-8',
            picture: './img/下载 (36).jpg',
            minute: '季后赛首战将于5月9日18:00开启，季后赛采用BO7全局BP+巅峰对决赛制。败者淘汰，胜者晋级，可谓是残酷异常，那么究竟哪支战队能够突破重围呢？相信各位小伙伴们已经开始期待首战的结果了吧？'
        },

        {
            adress: 'KPL',
            title: '2019年KPL新秀选拔赛报名开启，你准备好了吗？',
            day: '05-8',
            picture: './img/下载 (37).jpg',
            minute: '这次KPL夏季新秀选拔赛各个位置的第一名究竟是谁，谁将成为新秀状元？这群冉冉升起的新星，未来是以一人之力带领团队跻身争冠新贵，还是将为豪门劲旅再添锦绣？让我们拭目以待。'
        },

        {
            adress: 'KPL',
            title: '2019年KPL新秀选拔赛选手招募开启公告',
            day: '05-7',
            picture: './img/下载 (38).jpg',
            minute: '2019年KPL夏季新秀选拔赛选手招募开启公告'
        },

    ]
    // console.log(news[0]['adress']);
    
    var i = 0;
    $('#news ul li').on('mouseenter', function () {
        for (var j = 0; j < news.length; j++) {
            for (var key in news[i]) {
                $('#top_message>ul>li:eq(i)').find('.message_type').text(news[i]['adress']);
                console.log(news[i]['adress']);

            }
            i++;
        }


    });

    // 最新资讯主体内容
    $('.top_message_content>ul>li').on('mouseenter', function () {
        $(this).children('.more_content').show().parent().siblings().children('.more_content').hide();
    });

    //最新资讯里的积分排名
    $('#redio_east').on('click', function () {
        $('#east').show().siblings().hide();
    });
    $('#redio_west').on('click', function () {
        $('#west').show().siblings().hide();
    })

    // 热门赛事进行中
    $('.Competition_video>a').on('mouseenter', function () {
        $('.moving').show();

        $('.moving').stop(true,false).animate({
            left:64,
        },2000,function(){
            $('.moving').css('left',0);
            $('.moving').hide();
        });
       
    })

   

    // 视频中心开始按钮
    $('.video_img').on('mouseenter',function(){
        $(this).children('.video_start').show().parent().parent().parent().siblings().children().find('.video_start').hide();
        console.log($(this).children('.video_start'))
    
        
    })

    $('.video_img').on('mouseleave',function(){
        $('.video_start').hide();
    })


    //荣耀排行
    $('.mvps_mouths').on('click',function(){
        if ($(this).children('ul').css('display') == 'none') {
            $(this).children('p').children('i').css('transform', 'rotate(360deg)');
            $(this).children('ul').show();
        } else {
            $(this).children('p').children('i').css('transform', 'rotate(180deg)');
            $(this).children('ul').hide();
        }
    })

    $('#the_best').on('click', function () {
        $('.mvp_plays').children('.mvps').show().siblings().hide();
    });
    $('#the_end').on('click', function () {
        $('.mvp_plays').children('.mvps_best').show().siblings().hide();
    })

    //解说裁判
    $('#narrate_east').on('click', function () {
        $('.narrate_mans.mans_east').show().siblings('.narrate_mans.mans').hide();
    });
    $('#narrate_west').on('click', function () {
        $('.narrate_mans.mans').show().siblings('.narrate_mans.mans_east').hide();
    })


    //队伍图标
    $('.team_left').on('click',function(){
        $('.team_nav').children().animate({
            left:0,
        },1000);
    })

    $('.team_right').on('click',function(){
        $('.team_nav').children().animate({
            left:-129,
        },1000);
    })

    $('.team_people_left').on('click',function(){
        $('.team_people_nav').children().animate({
            left:0,
        },1000);
    })

    $('.team_people_right').on('click',function(){
        $('.team_people_nav').children().animate({
            left:-500,
        },1000);
    })

    //队伍东西部
    $('#team_east').on('click',function(){
        $('.east_team_nav.east').show().siblings('.east_team_nav.west').hide();
        $('.team_maincon.VG').show().siblings('.team_maincon.XQ').hide();

    })

    $('#team_west').on('click',function(){
        $('.east_team_nav.west').show().siblings('.east_team_nav.east').hide();
        $('.team_maincon.XQ').show().siblings('.team_maincon.VG').hide();
        
    })
})