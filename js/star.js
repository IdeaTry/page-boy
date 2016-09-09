$(function() {
  var star = $('.stars');
  function stars() {
    for (var i = 0; i < 5; i++) {
      var j = parseInt(Math.random() * 1600 + 000);
      var j1 = parseInt(Math.random() * 300 + 300);
      var j2 = parseInt(Math.random() * 300 + 1200);
      var n = parseInt(Math.random() * 10 + (-10));
      star.prepend('<div class="star"></div>')
      star.children('div').eq(0).css({'left': j, 'top': n})
      star.children('div').eq(0).animate({'left': j - j1, 'top': $(window).height() + 120}, j2)
    }
  }

  stars();
  setInterval(function() {
    stars();
  }, 500);
  setInterval(function() {
    for (var jj = 0; jj < $('.stars > div').size() / 5; jj++) {
      $('.stars > div').eq($('.stars > div').size() - jj).remove();
    }
  }, 1000)
});