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



// CURRENT IMAGE

let number = 1;
let category = "hands";


// CHANGE CATEGORY

function changeCategory(name) {

    category = name;
    number = 1;

    document.getElementById("photo").src =
    "images/" + category + "-" + number + ".jpg";


    // REMOVE ACTIVE

    document.getElementById("hands").className = "";
    document.getElementById("feet").className = "";
    document.getElementById("neck").className = "";
    document.getElementById("other").className = "";


    // ADD ACTIVE

    document.getElementById(category).className = "active";

}


// CHANGE IMAGE

function changeImage(direction) {

    number = number + direction;


    if (number > 4) {
        number = 1;
    }

    if (number < 1) {
        number = 4;
    }


    document.getElementById("photo").src =
    "images/" + category + "-" + number + ".jpg";

}





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


// Menú
$(".menu-btn").on("click", function () {
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
    $(this).attr("aria-expanded", $(this).hasClass("abierto"));
});



// GALLERY IMAGES

var galleryData = {

    hands: [
        "images/hands-01.jpg",
        "images/hands-02.jpg",
        "images/hands-03.jpg",
        "images/hands-04.jpg"
    ],

    feet: [
        "images/feet-01.jpg",
        "images/feet-02.jpg",
        "images/feet-03.jpg"
    ],

    neck: [
        "images/neck-01.jpg",
        "images/neck-02.jpg",
        "images/neck-03.jpg"
    ],

    other: [
        "images/other-01.jpg",
        "images/other-02.jpg",
        "images/other-03.jpg"
    ]

};


// ELEMENTS

var galleryImage = document.getElementById("gallery-image");

var categories = document.querySelectorAll(".category");

var prevButton = document.getElementById("prev-button");

var nextButton = document.getElementById("next-button");


// CURRENT GALLERY

var currentCategory = "hands";

var currentImage = 0;


// SHOW IMAGE

function showImage() {

    var images = galleryData[currentCategory];

    galleryImage.src = images[currentImage];

}


// CHANGE CATEGORY

categories.forEach(function(category) {

    category.addEventListener("click", function() {

        categories.forEach(function(button) {
            button.classList.remove("active");
        });

        this.classList.add("active");

        currentCategory = this.dataset.category;

        currentImage = 0;

        showImage();

    });

});


// NEXT IMAGE

nextButton.addEventListener("click", function() {

    var images = galleryData[currentCategory];

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();

});


// PREVIOUS IMAGE

prevButton.addEventListener("click", function() {

    var images = galleryData[currentCategory];

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();

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