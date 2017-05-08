$(document).ready(function() {
  ///Mobile menu hiding on click anywhere but the menu toggle button (checkbox)
  $('body').click(function () {
    $('.menu_toggle input').prop('checked', false);
  });
  $('.menu_toggle input').click(function (event) {
    event.stopPropagation();
  })

  //On scroll fade-in
  $(window).scroll( function(){
    $('.fade-hidden').each(function(i){

      var objectMiddle = $(this).offset().top + ($(this).outerHeight()) * 0.5;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if( windowBottom > objectMiddle ){
        $(this).animate({
          'opacity':'1',
          'right': '0'
        },800);
      }
    });
  });

  //Smooth scrolling
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    $(window).scrollTo(this.hash, {duration:1000, interrupt:true});
  });

  //Scroll tracing
  var navAnchors = $('.menu-items li').children();
  var anchorsArray = [];

  for (var i = 0; i < navAnchors.length; i++) {
    var navAnchor = navAnchors[i];
    var navHref = $(navAnchor).attr('href');
    anchorsArray.push(navHref);
  }

  $(window).scroll(function () {
    var windowPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    for (var i = 0; i < anchorsArray.length; i++) {
      var sectionID = anchorsArray[i];
      var sectionPosition = $(sectionID).offset().top;
      var sectionHeight = $(sectionID).height();

      if (windowPosition >= sectionPosition && windowPosition < (sectionPosition + sectionHeight)) {
        $("a[href='" + sectionID + "']").addClass("menu-item_active");
      } else {
        $("a[href='" + sectionID + "']").removeClass("menu-item_active");
      }
    }

    if(windowPosition + windowHeight === documentHeight) {
      if (!$(".menu-items li:last-child a").hasClass("menu-item_active")) {
        var navActiveCurrent = $(".menu-item_active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("menu-item_active");
        $(".menu-items li:last-child a").addClass("menu-item_active");
      }
    }
  })
});