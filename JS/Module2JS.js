document.addEventListener("DOMContentLoaded", function () {
    let figures = document.querySelectorAll("figure");


    figures.forEach((figure, index) => {
        figure.setAttribute("tabindex", "0");
    });


    figures.forEach(figure => {
        figure.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                figure.classList.toggle("selected");
            }
        });
    });
});

