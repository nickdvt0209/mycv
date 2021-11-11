document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".header__button-toggle");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.querySelector(".menu");
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
        menu.classList.add("is-active")
    });
    menuClose.addEventListener("click", function () {
        menu.classList.remove("is-active")
    })
});

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelectorAll('header.header');
    var header = header[0];
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 100) {
            header.classList.add('header__fixed');
            document.getElementById("rocket").style.display = 'block';
        }
        else {
            header.classList.remove('header__fixed');
            document.getElementById("rocket").style.display = 'none';
        }

    })
})