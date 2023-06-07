

$(document).ready(function() {  

  // contentHeight(); // DIV Height Set to 100% 
  
  
  
  
  
  //--- Premium star toggle Icon ----//
  
  $('.pre_icon_toggle').hide()
  $(".two_category_toggle_tab").click(function() {
    $(this).find('img').toggle();
    // $(this).find('img').animate({width: 'toggle'});
    $(this).find('.sub_1').toggleClass('sub_padding_add');
    $(this).find('.sub_2').toggleClass('sub_padding_add');
  });
  
  //--- Premium star toggle Icon ----//
  
  
  
  
  
  
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
  
  
  
  
  
  //--- Vertical Hamburger Menu ----//
  
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
  
  //--- Vertical Hamburger Menu ----//
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  $('.custom_toggleIcon').click(function(){
    // $(this).next('ul').slideToggle('500');
    // $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle');
    $(this).find('i').toggleClass('fa-bars fa-close');
    
  });
  
  $(window).click(function() {
    $(this).find('i').hide('fa-close')
  });
  */
  
  /*
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
  
  
  
  
  
  
  
  
  
  //--- Header Menu Sectcion Navbar Sticky and onScroll Logo and Icon Add-Remove ----//
  
  // $(".top_stickyMenu_logo_search_iconAdded li:first-child").hide();
  // $(".top_stickyMenu_logo_search_iconAdded li:last-child").hide();
  
  $(window).on('scroll',function(){
    // var winscroll = $(window).scrollTop();
    // if (winscroll >= 50) {
      
      if(window.innerWidth >= 992){
  
        if($(window).scrollTop()){
            $(".mega_menu_list_sec").addClass("top_stickyMenu_logo_search_iconAdded");
            $(".mega_menu_list_sec li.list_first:first-child").addClass("sticky_newMenu_added");
            $(".mega_menu_list_sec li.list_last:last-child").addClass("sticky_newMenu_added");
            // $(".top_stickyMenu_logo_search_iconAdded li:first-child").show();
            // $(".top_stickyMenu_logo_search_iconAdded li:last-child").show();
        }
        else{
            $(".mega_menu_list_sec").removeClass("top_stickyMenu_logo_search_iconAdded");
            $(".mega_menu_list_sec li.list_first:first-child").removeClass("sticky_newMenu_added");
            $(".mega_menu_list_sec li.list_last:last-child").removeClass("sticky_newMenu_added");
            // $(".top_stickyMenu_logo_search_iconAdded li:first-child").hide();
            // $(".top_stickyMenu_logo_search_iconAdded li:last-child").hide();
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
    }
    else{
      $(".mega_menu_list_sec").removeClass("top_stickyMenu_logo_search_iconAdded");
      $(".mega_menu_list_sec li.list_first:first-child").removeClass("sticky_newMenu_added");
      $(".mega_menu_list_sec li.list_last:last-child").removeClass("sticky_newMenu_added");
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