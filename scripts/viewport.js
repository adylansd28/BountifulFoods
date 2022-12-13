let width;
let style = document.querySelector(".style");



window.onresize = window.onload = function() {
    width = this.innerWidth;

    if (width < 560) {
        style.setAttribute("href", "styles/small.css");
    } else if ((width > 560) && (width < 1028)) {
        style.setAttribute("href", "styles/medium.css");
    } else if (width > 1028) {
        style.setAttribute("href", "styles/large.css");
    }
}