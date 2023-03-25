/* 비쥬얼 메뉴 */
$(document).ready(function() {
   $('.visual_menu > li').on('mouseenter', function() {
      $('.visual_menu > li').removeClass('close');
      $('.visual_menu > li').eq($(this).index()).addClass('close');
      $('.visual').css('width', '0px')
   });

   $('.visual_sec').on('mouseleave', function() {
      $('.visual_menu > li').removeClass('close');
   })


});
