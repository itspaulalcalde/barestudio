// Galería de work 1

document.addEventListener("DOMContentLoaded", function() {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryImages = document.querySelectorAll(".gallery-image");

    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const selectedCategory = button.getAttribute("data-filter");

            // Update active button
            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Filter images
            galleryImages.forEach(function(image) {

                const imageCategory = image.getAttribute("data-category");

                if (selectedCategory === "all" || selectedCategory === imageCategory) {
                    image.classList.remove("hidden");
                } else {
                    image.classList.add("hidden");
                }

            });

        });

    });

});


// Acordeón


$(".acordeon__titulo").on("click", function() {

    var contenido = $(this).next();

    contenido.stop(true, true).slideToggle(300);

    $(this).toggleClass("abierto");

    $(this).attr(
        "aria-expanded",
        $(this).hasClass("abierto")
    );

});



