// Acordeón (Work)
$(".acordeon__titulo").on("click", function() {

    var contenido = $(this).next();

    contenido.stop(true, true).slideToggle(300);

    $(this).toggleClass("abierto");

    $(this).attr(
        "aria-expanded",
        $(this).hasClass("abierto")
    );

});



// Galeria (Work)
$(".gallery-categories a").on("click", function (event) {
    event.preventDefault();

    var categoria = $(this).attr("data-filter");
    var contenido = $('.gallery-container [data-category="' + categoria + '"]');

    $(".gallery-container [data-category]").stop(true, true).hide();
    contenido.show();

    $(".gallery-categories a").removeClass("active").removeAttr("aria-current");
    $(this).addClass("active").attr("aria-current", "true");
});


// PHILOSOPHY ANIMATION

var animationStarted = false;

$(window).on("scroll", function() {

    var section = $(".philosophy-section");

    var sectionTop = section.offset().top;

    var scrollPosition = $(window).scrollTop() + $(window).height();

    if (scrollPosition > sectionTop + 100 && animationStarted == false) {

        animationStarted = true;

        $(".philosophy-card").each(function(index) {

            $(this).delay(index * 500).animate({

                marginTop: (index * 80) + "px"

            }, 1500);

        });

    }

});



// Menú
$(".menu-btn").on("click", function () {
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
    $(this).attr("aria-expanded", $(this).hasClass("abierto"));
});



// Ventana Modal
var bookingForm = document.getElementById("bookingForm");
var bookingModal = document.getElementById("bookingModal");
var bookingModalClose = document.getElementById("bookingModalClose");

if (bookingForm && bookingModal && bookingModalClose) {
    var bookingSubmit = bookingForm.querySelector('button[type="submit"]');

    function cerrarBookingModal() {
        bookingModal.classList.remove("active");
        bookingSubmit.focus();
    }

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        bookingModal.classList.add("active");
        bookingModalClose.focus();
    });

    bookingModalClose.addEventListener("click", cerrarBookingModal);

    bookingModal.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            cerrarBookingModal();
        }

        if (event.key === "Tab") {
            event.preventDefault();
        }
    });
}