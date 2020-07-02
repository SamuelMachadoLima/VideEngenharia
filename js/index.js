const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop;

window.onscroll = function () {
    fixarMenuNoTopo();
}

function fixarMenuNoTopo() {
    if (window.pageYOffset - 5 >= topoNav) {
        nav.classList.add("headerOnScroll");
    } else {
        nav.classList.remove("headerOnScroll");
    }
}

$(document).ready(function () {
    $('.nav li').click(function (e) {

        $('.nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});


$(".nav li").on('click', function (e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#") + 1);
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
});