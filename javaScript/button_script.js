

document.addEventListener("DOMContentLoaded", function () {
    function checkOffset() {
        const downloadLink = document.querySelector(".download-link");
        const footer = document.querySelector("footer");

        if($('#social-float').offset().top + $('#social-float').height() 
            >= $('#footer').offset().top - 10)

        if (!downloadLink || !footer) return;

        const linkRect = downloadLink.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        if (linkRect.bottom >= footerRect.top - 10) {
            downloadLink.style.position = "absolute";
            downloadLink.style.bottom = "100px"; // Ajusta según necesidad
        } else {
            downloadLink.style.position = "fixed";
            downloadLink.style.bottom = "20px"; // Posición original
        }
    }

    document.addEventListener("scroll", checkOffset);
    window.addEventListener("resize", checkOffset);

    // Llamada inicial por si la página se carga en una posición avanzada
    checkOffset();
});