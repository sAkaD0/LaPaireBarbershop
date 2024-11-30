(function () {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    // Collapse Navbar
    var collapseNavbar = function () {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})();

$(window).on('load', function () {
  $('.apparition').css('opacity', 0);
  old = 0;
})
$(window).scroll(function () {


  hauteur = $(window).scrollTop() + $(window).height()

  if ($(window).scrollTop() >= old + 50) {
    $('.apparition').each(function () {
      if ($(this).offset().top < hauteur) {
        $(this).css('opacity', 1);
        old = $(window).scrollTop();
      }
    })

  }
});

