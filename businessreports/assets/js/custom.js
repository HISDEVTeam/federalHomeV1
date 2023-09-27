

$(document).ready(function() {  

  // contentHeight(); // DIV Height Set to 100% 
  
  
  //--- Premium star toggle Icon ----//
  
  /*$('.pre_icon_toggle').hide()
  $(".two_category_toggle_tab").click(function() {
    $(this).find('img').toggle();
    // $(this).find('img').animate({width: 'toggle'});
    $(this).find('.sub_1').toggleClass('sub_padding_add');
    $(this).find('.sub_2').toggleClass('sub_padding_add');
  });*/
  
  //--- Premium star toggle Icon ----//
  





//--- Business Report Gallery Banner section ----//


$('.business_report_gallery_sec .report_galleryBox').each(function() {
  var myImage = $(this);
  myImage.on('click', function() {
    $('.report_galleryBox').removeClass('large_width');
    myImage.toggleClass('large_width');
  });
});


//--- Business Report Gallery Banner section ----//

        // Business Page Hide and Show

     $(".reportPara").hide();
        $(".reportVideos").hide();
        $(".reportNews").show();

        $(".reportShow").click(function(){
        $(".reportPara").show();
        $(".reportVideos").hide();
        $(".reportNews").hide();
      });
        
      $(".videoShow").click(function(){
        $(".reportVideos").show();
        $(".reportPara").hide();
        $(".reportNews").hide();
      });

      $(".newShow").click(function(){
        $(".reportNews").show();
        $(".reportPara").hide();
        $(".reportVideos").hide();
      });


  
   // Business Page Hide and Show



























  //--- Bookmart tag toggle Icon ----//
  $('.bookmark_icon').click(function() {
    $(this).find('i').toggleClass('fa-bookmark fa-bookmark-o')
  });
  //--- Bookmart tag toggle Icon ----//
  
  
  
  
  
  
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
  
  
  
  
  
  //--- Header Premium Tag button Hover text change ----//
  
  $(".premium_access_btn").hover(
    function() {
      $(".hover_text_change").text("Only ₹599/year");
    },
    function() {
      $(".hover_text_change").text('Premium Access');
    }
  );
  
  //--- Header Premium Tag button Hover text change ----//
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //--- Banner Type Sectcion Navbar Sticky and bg color scrollable change ----//
  
  $(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.header_with_banner_wrapper .header_wrapper').addClass('navbar_bgColor_scroll_changed');
    }
    else{
        $('.header_with_banner_wrapper .header_wrapper').removeClass('navbar_bgColor_scroll_changed');
    }
  })
  
  //--- Banner Type Sectcion Navbar Sticky and bg color scrollable change ----//
  
  
  
  
  
  
  
  
  
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
             items: 2
          },
          600: {
             items: 3
          },
          1000: {
             items: 4
          }
    }
  });
  

  $('.federal_playlist_three_card').owlCarousel({
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
             items: 3
          }
    }
  });
  
  
  
  
  
  
  $('.federal_playlist_six_card').owlCarousel({
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
             items: 2
          },
          600: {
             items: 3
          },
          1000: {
             items: 6
          }
    }
  });
  
  
  
  
  
  
  
  $('.four_record_carousel_1').owlCarousel({
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    responsive: {
        0: {
         items: 2
        },
        600: {
         items: 3
        },
        1000: {
         items: 6
        }
    }
   });
  //--- Event Card Carousel ----//
  
  
  
  
  
  
  
  
  
  
  
  
  //--- For page scroll to top ----//
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
      $('#share-button').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
      $('#share-button').fadeOut();
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
  
  
  
  




  
//--- Desktop Sticky Header Searc Box ----//  

$('.sticky_search_icon').click(function (e) {
  e.stopPropagation()
  $(".stickySearch_inptBox").show();
});

$('.stickySearch_close').click(function (e) {
  e.preventDefault();
  $('.stickySearch_inptBox').hide();
});


$(document).click(function(e) {

  if ( $(e.target).closest('.sticky_search_icon').length ) {
    $(".stickySearch_inptBox").show();
  } 
  else if ( ! $(e.target).closest('.stickySearch_inptBox').length ) {
    $('.stickySearch_inptBox').hide();
}

});

//--- Desktop Sticky Header Searc Box ----//  


  







//--- Mobile Header Searc Box ----//  

$('.mobView_searchIcon').click(function (e) {
    e.stopPropagation()
    $(".search_inptBox").show();
    $(this).addClass('active');
});

$('.mob_search_close').click(function (e) {
    e.preventDefault();
    $('.search_inptBox').hide();
    $('.mobView_searchIcon.active').removeClass('active');
});


$(document).click(function(e) {

  if ( $(e.target).closest('.mobView_searchIcon').length ) {
      $('.search_inptBox').show();
  } 
  else if ( ! $(e.target).closest('.search_inptBox').length ) {
    $('.search_inptBox').hide();
    $('.mobView_searchIcon.active').removeClass('active');
  }

});

//--- Mobile Header Searc Box ----//

  


//--- Mobile Vertical Hamburger Toggle Icon ----//

$('.custom_toggleIcon').on('click', function(e){

  // e.stopPropagation();
  e.preventDefault();
  $(this).find('i.mobileToggle_icon').toggleClass('fa-bars fa-close');

});


$(document).click(function(e) {
	
  $(this).find('i.mobileToggle_icon').removeClass('fa-close').addClass('fa-bars'); 
  $('.vertical_menu_sec .dropdown-menu a.dropdown-toggle').removeClass('caret_down');     

});

//--- Mobile Vertical Hamburger Toggle Icon ----//


  


//--- Vertical Hamburger Multilevel Menu Type 01 ----//

$('.vertical_menu_sec .dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.vertical_menu_sec .dropdown-submenu .show').removeClass("show");
  });

  return false;

});  
  

$('.vertical_menu_sec .dropdown-menu a.dropdown-toggle').on('click', function(e) {
  
  // e.stopPropagation();

  if (!$(this).next().hasClass('show')) {
    // $(this).removeClass('caret_down');
    $(this).parents('.dropdown-menu').first().find('.caret_down').removeClass("caret_down");
  }
  else {
    $(this).addClass('caret_down');
  }

});

//--- Vertical Hamburger Multilevel Menu Type 01 ----//
 
  
  
  
  
  
//--- Navbar expand bg color onclick change ----//
/*

$('.nav_wrapper button').on('click', function(e){
  $('.nav_wrapper').toggleClass('navbar_bgColor_onclick_changed');
  e.preventDefault();
});

*/
//--- Navbar expand bg color onclick change ----//
  
  
  
  
  
  
  
  //--- Header Menu Sectcion Navbar Sticky and onScroll Logo and Icon Add-Remove ----//
  
  $(window).on('scroll',function(){
    // var winscroll = $(window).scrollTop();
    // if (winscroll >= 50) {
      
      if(window.innerWidth >= 992){
  
        if($(window).scrollTop()){
            $(".mega_menu_list_sec").addClass("top_stickyMenu_logo_search_iconAdded");
            $(".mega_menu_list_sec li.list_first:first-child").addClass("sticky_newMenu_added");
            $(".mega_menu_list_sec li.list_last:last-child").addClass("sticky_newMenu_added");
            // $(".stickySearch_inptBox").show();
        }
        else{
            $(".mega_menu_list_sec").removeClass("top_stickyMenu_logo_search_iconAdded");
            $(".mega_menu_list_sec li.list_first:first-child").removeClass("sticky_newMenu_added");
            $(".mega_menu_list_sec li.list_last:last-child").removeClass("sticky_newMenu_added");
            $(".stickySearch_inptBox").hide();
        }
  
      }
  })
  
  //--- Header Menu Sectcion Navbar Sticky and onScroll Logo and Icon Add-Remove ----//
  
  
  
  });  //--- End of Ready function ---//
  
  
  
  
  
  
  
  
  
  
  //--- Header Menu Sectcion Navbar Sticky at WinResize Logo and Icon Add-Remove ----//
  
  $(window).on("load resize scroll",function(e){
  
    if(window.innerWidth <= 991) {
      $(".mega_menu_list_sec").removeClass("top_stickyMenu_logo_search_iconAdded");
      $(".mega_menu_list_sec li.list_first:first-child").removeClass("sticky_newMenu_added");
      $(".mega_menu_list_sec li.list_last:last-child").removeClass("sticky_newMenu_added");
      $(".stickySearch_inptBox").hide();
    }
    else{
      $(".mega_menu_list_sec").removeClass("top_stickyMenu_logo_search_iconAdded");
      $(".mega_menu_list_sec li.list_first:first-child").removeClass("sticky_newMenu_added");
      $(".mega_menu_list_sec li.list_last:last-child").removeClass("sticky_newMenu_added");
      $(".stickySearch_inptBox").hide();
    }
  
  });
  
  //--- Header Menu Sectcion Navbar Sticky at WinResize Logo and Icon Add-Remove ----//
  
  
  
  
  
  
  
  
  
  
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
  
  
  
  
  
  
  
  
  
  
  


  
  
/*    
  const mouseWheel = document.querySelector('.box-scroll');
  
  mouseWheel.addEventListener('wheel', function(e) {
      const race = 45; // How many pixels to scroll
  
      if (e.deltaY > 0) // Scroll right
          mouseWheel.scrollLeft += race;
      else // Scroll left
          mouseWheel.scrollLeft -= race;
      e.preventDefault();
  });
  
  
  
  
  const mouseWheel1 = document.querySelector('.box-scroll-1');
  
  mouseWheel1.addEventListener('wheel', function(e) {
      const race = 45; // How many pixels to scroll
  
      if (e.deltaY > 0) // Scroll right
      mouseWheel1.scrollLeft += race;
      else // Scroll left
      mouseWheel1.scrollLeft -= race;
      e.preventDefault();
  });
  
  
  const mouseWheel3 = document.querySelector('.box-scroll-3');
  
  mouseWheel3.addEventListener('wheel', function(e) {
      const race = 45; // How many pixels to scroll
  
      if (e.deltaY > 0) // Scroll right
      mouseWheel3.scrollLeft += race;
      else // Scroll left
      mouseWheel3.scrollLeft -= race;
      e.preventDefault();
  }); 

*/












/*
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}*/