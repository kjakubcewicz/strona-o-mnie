$(document).ready(function() {
  //On scroll fade-in

  $(window).scroll( function(){
    $('.fade-hidden').each(function(i){

      var objectBottom = $(this).offset().top + ($(this).outerHeight()) * 0.5;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if( windowBottom > objectBottom ){
        $(this).animate({
          'opacity':'1',
          'right': '0'
        },800);
      }
    });
  });

  //TODO: Smooth scrolling
});