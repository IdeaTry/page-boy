$(function() {
  var star = $('.stars');
  function stars() {
    for (var i = 0; i < 7; i++) {
      var o = parseInt(Math.random() * 1600 + 100);
      var p = parseInt(Math.random() * 600 + 900);
      var q = parseInt(Math.random() * 600 + 1500);
      var n = parseInt(Math.random() * 10 + (-10));
      star.prepend('<div class="star"></div>')
      star.children('div').eq(0).css({'left': o, 'top': n})
      star.children('div').eq(0).animate({'left': o - p, 'top': $(window).height() + 100}, q)
    }
  }

  stars();
  setInterval(function() {
    stars();
  }, 500);
  setInterval(function() {
    for (var j = 0; j < $('.stars > div').size() / 7; j++) {
      $('.stars > div').eq($('.stars > div').size() - j).remove();
    }
  }, 1000)
});