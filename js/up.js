document.getElementById("ir-arriba").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        irArriba.style.transform = "scale(0)"
    }
}

irArriba = document.getElementById("ir-arriba");

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        irArriba.style.transform = "scale(1)"
    } else if (scroll < 500) {
        irArriba.style.transform = "scale(0)"
    }
}