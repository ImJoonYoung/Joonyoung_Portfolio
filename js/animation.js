// Wrap every letter in a span


$(document).ready(function() {
    const textWrapper = document.querySelector('.letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
        .add({
            targets: '.ml6 .letter',
            translateY: [0, "-100px", 0],
            translateZ: 0,
            duration:1000,
            easing:'linear',
            delay: (el, i) => 200 * i
        });

})
