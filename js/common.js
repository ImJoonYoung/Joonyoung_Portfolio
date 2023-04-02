/* 비쥬얼 메뉴 */
$(document).ready(function() {
   $('.visual_menu > li').on('mouseenter', function() {
      $('.visual_menu > li').removeClass('close');
      $('.visual_menu > li').eq($(this).index()).addClass('close');
      $('.visual').css('width', '0px')
      $('#rotateTit, #rotateTit>img').animate({opacity:0})
   });

   $('.visual_sec').on('mouseleave', function() {
      $('.visual_menu > li').removeClass('close');
      $('#rotateTit, #rotateTit>img').animate({opacity:1})
   })

   let mainSlider = $('#pjSlide');
   let innerText = $('.inner-text');

   mainSlider.slick({
      slidesToShow: 4,
      dots: true,
   });

   mainSlider.on('wheel', function(e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
         $(this).slick('slickPrev');
      } else {
         $(this).slick('slickNext');
      }
   });

   innerText.on('wheel', function(e) {
      e.stopPropagation();
   })


});
