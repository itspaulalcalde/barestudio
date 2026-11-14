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




/* SLIDESHOW WORK */

// Variables

var slides = $(".gallery-container .slide");
var botonNext = $("#siguiente");
var botonPrev = $("#anterior");

var categoriaActual = "hands";
var slidesCategoria = $(".gallery-container .hands");

var total = slidesCategoria.length;
var actual = 0;


// Foto

function mostrar(indiceSlide) {

    slidesCategoria.eq(actual).fadeOut();

    actual = indiceSlide;

    slidesCategoria.eq(actual).fadeIn();

    $("#contador").text((actual + 1) + " / " + total);
}


// Siguiente

function siguiente() {

    var n = actual + 1;

    if (n === total) {
        n = 0;
    }

    mostrar(n);
}


// Anterior

function anterior() {

    var n = actual - 1;

    if (n < 0) {
        n = total - 1;
    }

    mostrar(n);
}


// Botones

botonNext.on("click", function() {
    siguiente();
});

botonPrev.on("click", function() {
    anterior();
});


// Cambiar Categoría

$(".gallery-categories .category").on("click", function() {

    $(".gallery-categories .category").removeClass("active");

    $(this).addClass("active");

    categoriaActual = $(this).attr("data-category");

    slides.hide();

    slidesCategoria = $(".gallery-container ." + categoriaActual);

    total = slidesCategoria.length;
    actual = 0;

    slidesCategoria.eq(actual).fadeIn();

    $("#contador").text((actual + 1) + " / " + total);

});



// OUR PHILOSOPHY 

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



// MENÚ
$(".menu-btn").on("click", function () {
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
    $(this).attr("aria-expanded", $(this).hasClass("abierto"));
});



// VENTANA MODAL
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