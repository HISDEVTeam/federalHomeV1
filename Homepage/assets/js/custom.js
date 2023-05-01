

$(document).ready(function() {  

// contentHeight(); // DIV Height Set to 100% 





//--- Megamenu Hover ----//

  $('.hover_mengamenu').hover(function () {
    $(this).find('.sm_menu').first().stop(true, true).slideDown(150);
  }, function () {
    $(this).find('.sm_menu').first().stop(true, true).slideUp(105)
  });
  
  $(".megamenu").on("click", function(e) {
    e.stopPropagation();
  });

//--- Megamenu Hover ----//











//--- Vertical Hamburger Menu ----//

$('.vertical_menu_sec .dropdown-menu a.dropdown-toggle').on('click', function(e) {

  if (!$(this).next().hasClass('show')) {
  // if (!$(this).find(".dropdown-menu").hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.vertical_menu_sec .dropdown-submenu .show').removeClass("show");
  });


  return false;

});

//--- Vertical Hamburger Menu ----//








//--- Banner slider ----//

$('.carousel').carousel({
  interval: 3000,
  pause: "false",
});

//--- Banner slider ----//






//--- Event Card Carousel ----//

$('.card_carousel').owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  // navText: [
  //   "<div class='nav-button owl-prev'><i class='fa fa-angle-left'></i></div>", 
  //   "<div class='nav-button owl-next'><i class='fa fa-angle-right'></i></div>"
  // ],
  navText: [
    "<i class='fa fa-angle-left'></i>", 
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
        0: {
           items: 1
        },
        600: {
           items: 1
        },
        1000: {
           items: 1
        }
  }
});



$('.federal_playlist_four_card').owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>", 
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
        0: {
           items: 1
        },
        600: {
           items: 3
        },
        1000: {
           items: 4
        }
  }
});



//--- Event Card Carousel ----//












//--- For page scroll to top ----//

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// scroll body to 0px on click
$('#back-to-top').click(function () {
  //$('#back-to-top').tooltip('hide');
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});

//--- For page scroll to top ----//










// $(this).find($(".fa")).removeClass('fa-bars').addClass('fa-close');


/*
$('.custom_toggleIcon').click(function() {
  $(this).find('.fa-bars,.fa-close').toggleClass('fa-bars').toggleClass('fa-close');
});
*/




/*
$('.custom_toggleIcon').click(function(){
  // $(this).next('ul').slideToggle('500');
  $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle')
});

$(document).on('click', function(){
  $('.vertical_menu_sec ul .dropdown-menu').hide();
});

$(".dropdown-menu").on("click", function(e) {
  e.stopPropagation();
});
*/




  
  // $(".imgDiv").height( $(".cardBody_content_2").height()+20 );

   // var divHeight = $('.rightSide').height(); 
  // $('.rightSide').css('min-height', divHeight+'px');

  // $("body").css('height', $(window).height() );
  // $(".leftSide").css('height', $(".rightSide").height() );
  


  
  
  
/*
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
*/

  


/*
$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');

       
    if (url !== '#') {
    
      window.location.href = url;
    }

  }
});
*/









//--- Navbar expand bg color onclick change ----//
/*

$('.nav_wrapper button').on('click', function(e){
  $('.nav_wrapper').toggleClass('navbar_bgColor_onclick_changed');
  e.preventDefault();
});

*/
//--- Navbar expand bg color onclick change ----//







//--- Banner slider ----//

/*
$('#myCarousel').one('slide.bs.carousel', function (e) {
  e.preventDefault();
  $(this).carousel('pause');  // For stop the carousel
});
*/


/*
$('.carousel').carousel({
  interval: 3000,
  pause: "false",
});

  
$( ".carousel .carousel-inner" ).swipe( {
  swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
    this.parent( ).carousel( 'next' );
  },
  swipeRight: function ( ) {
    this.parent( ).carousel( 'prev' );
  },
}
*/  
 

//--- Banner slider ----//






//--- Navbar Sticky bg color scrollable change ----//
/*

$(window).on('scroll',function(){
  if($(window).scrollTop()){
      $('.mega_menu_wrapper').addClass('sticky-top');
  }
  else{
      $('.mega_menu_wrapper').removeClass('sticky-top');
  }
})

*/
//--- Navbar Sticky bg color scrollable change ----//




});  //--- End of Ready function ---//






/*
function enableDisable() {
  if ($("#qtyBtnEdit i").hasClass("fa-bars")) {
      // Is edit, so change
      $("#qtyBtnEdit").text("Save");
  }
  else {
      // Back to edit
      $("#qtyBtnEdit").text("Edit");
  }
  $("#qtyBtnEdit i").toggleClass("fa-bars fa-close")
}

function enableDisable() {
  $("#qtyBtnEdit i").toggleClass("fa-bars fa-close")
}
*/













//--- Navbar Sticky bg color scrollable change ----//

/*
$(window).on('scroll',function(){
  if($(window).scrollTop()){
      $('.nav_wrapper').addClass('navbar_bgColor_scroll_changed');
  }
  else{
      $('.nav_wrapper').removeClass('navbar_bgColor_scroll_changed');
  }
})
*/

//--- Navbar Sticky bg color scrollable change ----//













//--- DIV Height Set to 100% ---//
/*

function contentHeight() {
  // var winH = $(window).outerHeight(),
    // headerHei = $(".header_sec").outerHeight(),
    // headerStickyNavHei = $(".navbar_sticky_sec").outerHeight(),
    // headerBreadcrumHei = $(".customBredcrum_sec").outerHeight(),
    // footerHei = $(".footer_sec").outerHeight(),
    // contentHei = winH - headerHei - headerStickyNavHei - headerBreadcrumHei - footerHei;
  //   contentHei = winH;
  // $(".container_height, .container_height_2, .containerFluid_height").css("min-height", contentHei);
  
}

$(window).resize(function() {
  contentHeight();
});

*/
//--- DIV Height Set to 100% ---//

