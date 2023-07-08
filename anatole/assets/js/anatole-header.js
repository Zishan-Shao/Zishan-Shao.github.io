document.addEventListener("DOMContentLoaded", function () {
// Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
// Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener("click", function () {
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

function toggleBlock(element) {
    var hidden = document.getElementById(element);
    hidden.className = hidden.className == 'hide-content' ? 'show-content': 'hide-content';
}