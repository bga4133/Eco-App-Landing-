$(function(){
  $('a').click(function(){
    var href =$(this).attr("href");
    $('a').children('div').removeClass().addClass('bolita2');
    $(this).children('div').removeClass('bolita2').addClass('bolita1');
    $('body,html').animate({
      scrollTop: $(href).offset().top
    },800)
  });
});
