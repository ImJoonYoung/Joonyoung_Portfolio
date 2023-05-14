/* 비쥬얼 메뉴 */
$(document).ready(function() {

   $('.visual_menu > li').on('mouseenter', function() {
      $('.visual_menu > li').removeClass('close');
      $('.visual_menu > li').eq($(this).index()).addClass('close');
      $('.visual').css('width', '0px')
      $('.word').removeClass('on');
      $('.word > span').fadeOut(300);
   });

   $('.visual_sec').on('mouseleave', function() {
      $('.visual_menu > li').removeClass('close');
      $('.word').addClass('on');
      $('.word > span').fadeIn(300);
   })

   let mainSlider = $('#pjSlide');
   let innerText = $('.inner-text');

   mainSlider.slick({
      slidesToShow: 3,
      dots: true,
      arrows:true,
      autoplay:true,
      autoplaySpeed:3000,
      draggable:true,
      centerMode:true,
      infinite:true,
      speed:800
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

   /* 스크롤 svg animation */

      let sv1 = new Vivus('pjSvg',{type:'oneByOne', duration:100 });
      let sv2 = new Vivus('skillSvg',{type:'oneByOne', duration:100 });
      $(window).on('scroll',function(){
         let wdt=$(this);
         scrollAni(wdt,'#pjSvg',sv1);
         scrollAni(wdt,'#skillSvg',sv2);
      });//vivus scroll

      function scrollAni(wd,wdt,vv){
         if( $(wd).scrollTop() > $(wdt).offset().top - wd.height() ){
            vv.play();
         }else{
            vv.reset();
         }
      }

   let time = 0
   let mouseX = window.innerWidth * 0.75
   let x = 0

   const opt = {
      radius: 160,
      radiusY: 0.02,
      maxSpeed: 0.04,
      maxRotation: 0,
      minOpacity: 0.3,
      spacer: ' * '
   }

   const scale = (a, b, c, d, e) => {
      return (a - b) * (e - d) / (c - b) + d
   }
   const lerp = (v0, v1, t) => {
      return v0 * (1 - t) + v1 * t
   }

   let letter
   const createInvaders = () => {
      const word = document.querySelector('.word')
      const Letters = word.innerHTML.replace(/\s/g, opt.spacer).split('').reverse()
      word.innerHTML = ''
      Letters.forEach(i => {
         const l = document.createElement('span')
         l.innerHTML = i
         word.appendChild(l)
      })
      letter = document.querySelectorAll('.word span')
   }
   createInvaders()


   /*--------------------
   Animate
   --------------------*/
   const animate = () => {
      if (!letter) return

      x = lerp(x, mouseX / window.innerWidth, 0.1)
      const rotation = -opt.maxRotation + x * opt.maxRotation * 2
      const speed = (-opt.maxSpeed + x * opt.maxSpeed * 2)
      const modY = 1 + x * -2

      time -= speed

      letter.forEach((i, ind) => {
         const theta = 1 - ind / letter.length
         const x = opt.radius * Math.sin(time + theta * Math.PI * 2)
         const y = opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2)
         const s = scale(y, -opt.radius * opt.radiusY, opt.radius * opt.radiusY, opt.minOpacity, 1)

         Object.assign(i.style, {
            zIndex: Math.min(2, Math.max(-2, Math.ceil(y))),
            filter: `blur(${4 - 5 * s}px)`,
            opacity: s,
            transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`
         })
      })
      requestAnimationFrame(animate)
   }
   animate()




   /* a링크 이동 시 부드러운 스크롤 */
   function smoothScroll() {
      $('a').click(function () {
         var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
         var aHref = $.attr(this, 'href');
         if(aHref.length > 1 && aHref.indexOf('#') > -1) {
            var windowTop = $(window).scrollTop();
            var offsetTop = $('#' + aHref.substr(1).replace(regExp,"\\$&")).offset().top;
            var distance = Math.abs(windowTop - offsetTop);
            var calcSpeed = 400*distance/2000;
            var speed = calcSpeed<300?300:(calcSpeed>800?800:calcSpeed);
            $('html, body').animate({
               scrollTop: offsetTop
            }, speed, 'swing');
            return false;
         }
      });
   }
   smoothScroll()
});

