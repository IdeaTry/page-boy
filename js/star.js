$(function() {
    var s = $('.stars > div'),
        si = s.size();

    stars();
    setInterval(stars, 500);
    setInterval(function() {
        for (var j = 0; j < si / 5; j++) {
            s.eq(si - j).remove();
        }
    }, 1000)
});


function stars() {
    for (var i = 0; i < 5; i++) {
        starNum();
    }
}

function starNum() {
    var star = $('.stars'), s = $('.stars > div'), o, p, q, n;

    o = parseInt(Math.random() * 1600 + 100);
    p = parseInt(Math.random() * 600 + 900);
    q = parseInt(Math.random() * 600 + 1500);
    n = parseInt(Math.random() * 10 + (-10));
    star.prepend('<div class="star"></div>');
    star.children('div').eq(0).css({'left': o, 'top': n});
    star.children('div').eq(0).animate({'left': o - p, 'top': $(window).height() + 100}, q);
}

/*
 P爷的几个建议：
 合理地定义函数；
 避免重复的计算和取值；
 避免频繁的dom操作；
 变量在函数顶部声明.
 */

/*

 $(function() {
 // 容器
 var container = $('.stars');
 // 随机添加星星
 var addStars = function() {
 appendStars(container, 5);
 };

 // 立即添加一些星星
 addStars();

 // 定时添加星星
 setInterval(addStars, 500);

 // 定时抹掉星星
 setInterval(removeStar, 1000);

 });

 // 添加指定数量的星星到容器中
 function appendStars(container, count) {
 var tags = [];

 // 得到一个星星数组
 for (var i = 0; i < count; i++) {
 tags.push(createStar());
 };

 // 隐藏容器后再append以减少重绘
 container.hide();
 tags.forEach(function(tag) {
 container.append(tag);
 });
 container.show();
 };

 // 创建一个星星
 function createStar() {
 var tag = $('<div class="star"></div>'),
 o = parseInt(Math.random() * 1600 + 100),
 p = parseInt(Math.random() * 600 + 900),
 q = parseInt(Math.random() * 600 + 1500),
 n = parseInt(Math.random() * 10 + (-10)),
 wh = window._WINDOW_HEIGHT || (window._WINDOW_HEIGHT = $(window).height());

 tag.css({'left': o, 'top': n});
 tag.animate({'left': o - p, 'top': wh + 100}, q);

 return tag;
 }

 // 抹掉一些星星
 function removeStar() {
 for (var j = 0; j < $('.stars > div').size() / 5; j++) {
 $('.stars > div').eq($('.stars > div').size() - j).remove();
 }
 }
 */
