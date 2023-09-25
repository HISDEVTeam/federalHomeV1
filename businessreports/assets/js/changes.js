$(document).ready(function() {  


    //--- Business Report Gallery Banner section ----//


$('.business_report_gallery_sec .report_galleryBox').each(function() {
    var myImage = $(this);
    myImage.on('click', function() {
      $('.report_galleryBox').removeClass('large_width');
      myImage.toggleClass('large_width');
    });
  });
  
  
  //--- Business Report Gallery Banner section ----//
  
})
