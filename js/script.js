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


$(".gallery-categories a").on("click", function (event) {
    event.preventDefault();

    var categoria = $(this).attr("data-filter");
    var contenido = $('.gallery-container [data-category="' + categoria + '"]');

    // Ocultamos las fotos y desplegamos la categoría elegida
    $(".gallery-container [data-category]").stop(true, true).hide();
    contenido.show();

    // Marcamos el enlace seleccionado
    $(".gallery-categories a").removeClass("active").removeAttr("aria-current");
    $(this).addClass("active").attr("aria-current", "true");
});