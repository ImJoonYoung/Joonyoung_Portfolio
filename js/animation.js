// Wrap every letter in a span


$(document).ready(function() {
    const textWrapper = document.querySelector('.letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
        .add({
            targets: '.ml6 .letter',
            translateY: [0, "-100px", 0],
            translateZ: 0,
            duration:500,
            easing:'linear',
            delay: (el, i) => 150 * i
        });
    rotateTit.animate(
        { opacity: [0, 1] },
        {
            duration: 1000,
            delay:5500,
            fill: 'both',
        }
    );
    rotateTit.animate(
        { transform: ["rotate(0deg)", "rotate(360deg)"] },
        {
            duration: 8000,
            iterations: Infinity,
            composite: "add" // *** this is the important line
        }
    );







})
