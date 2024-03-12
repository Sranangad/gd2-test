function showbox(){
    $('.info-window').toggleClass('hidden');
  }
  $('.info-button').click(showBox);
  $('.info-window').click(showBox);

  function windowScrolled(){
  var scrollAmount = $(window).scrollTop();
  console. log(scrollAmount);
  }
 { $(window).scroll(windowScrolled);
 }
