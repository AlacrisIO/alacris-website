$(function() {

  enableAnimations()

  $(".hamburger").on("click", function() {
    $(this).hasClass("active") ? closeMenu() : openMenu();   
  })

  $(".mmenu-item__link").on("click", closeMenu)

  $(".advisors__see-more").on("click", openPopup)

})

function enableAnimations() {
  smoothScroll();

  //-------------------------------//

  function smoothScroll() {
    $(document).on("click", 'a[href^="#"]', function(event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - $(".header").height()
        },
        600
      );
    });
  }
}

function openMenu() {
  $(".mmenu__list").fadeIn();
  $(".hamburger").addClass("active")
}

function closeMenu() {
  $(".mmenu__list").fadeOut();
  $(".hamburger").removeClass("active");
}

function openPopup() {

}


