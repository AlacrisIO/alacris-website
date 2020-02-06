
$(function () {

  enableAnimations();

  $(".hamburger").on("click", ({target}) =>  $(target).hasClass("active") ? closeMenu() : openMenu());

  $(".mmenu-item__link").on("click", closeMenu);

  highlightNavItems();

  $(window).on("scroll", highlightNavItems);

});

function enableAnimations() {
    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();

      $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top - $(".header").height()
        }, 600);
    });
}

function openMenu() {
  $(".mmenu__list").fadeIn();
  $(".header").css("background", "rgba(255, 255, 255,1)")
  $(".hamburger").addClass("active")
}

function closeMenu() {
  $(".mmenu-item__link").removeClass("active");
  $(this).addClass("active");
  $(".mmenu__list").fadeOut();
  $(".header").css("background", "rgba(255, 255, 255, .63)")
  $(".hamburger").removeClass("active");
}

function highlightNavItems() {
  var windowScrolled = $(window).scrollTop();

  var homeTop = 0;
  var benefitsTop = $('#about-us').offset().top;
  var ourTeamTop = $('#Benefits').offset().top;
  var partnersTop = $('#caseStudy').offset().top;
  var contactUsTop = $('#ourBlog').offset().top;
  // console.log(benefitsTop, ourTeamTop, partnersTop, contactUsTop);

  var benefitsOffsetTop = benefitsTop - (benefitsTop - homeTop) * 0.3
  var ourTeamOffsetTop = ourTeamTop - (ourTeamTop - benefitsTop) * 0.3
  var partnersOffsetTop = partnersTop - (partnersTop - ourTeamTop) * 0.3
  var contactUsOffsetTop = contactUsTop - (contactUsTop - partnersTop) * 0.3


  if (windowScrolled >= homeTop && windowScrolled < benefitsOffsetTop * 0.7) {
    $('.mmenu-item__link ,.header-nav-item__link').removeClass('active')
    $('.mmenu-item__link:first ,.header-nav-item__link:first').addClass('active')
  } else if (windowScrolled >= benefitsOffsetTop && windowScrolled < ourTeamOffsetTop) {
    $('.mmenu-item__link ,.header-nav-item__link').removeClass('active')
    $('.mmenu-item__link:eq( 1 ) ,.header-nav-item__link:eq( 1 )').addClass('active')
  } else if (windowScrolled >= ourTeamOffsetTop && windowScrolled < partnersOffsetTop) {
    $('.mmenu-item__link ,.header-nav-item__link').removeClass('active')
    $('.mmenu-item__link:eq( 2 ) ,.header-nav-item__link:eq( 2 )').addClass('active')
  } else if (windowScrolled >= partnersOffsetTop && windowScrolled < contactUsOffsetTop) {
    $('.mmenu-item__link ,.header-nav-item__link').removeClass('active')
    $('.mmenu-item__link:eq( 3 ) ,.header-nav-item__link:eq( 3 )').addClass('active')
  } else if (windowScrolled >= contactUsOffsetTop) {
    $('.mmenu-item__link ,.header-nav-item__link').removeClass('active')
    $('.mmenu-item__link:eq( 4 ) ,.header-nav-item__link:eq( 4 )').addClass('active')
  }
}
$( document ).ready(function() {
     function showTeam() {
         if (screen.width < 421) {
             $('#showLess').hide();
             // $('#showAll').show();
             $(".team__list li").slice(0, 4).show();
             $("#showAll").on('click', function (e) {
                 e.preventDefault();
                 $(".team__list li:hidden").css('display', 'block').slideDown();

                 if ($(".team__list li:hidden").length == 0) {
                     $('#showAll').hide();
                     $('#showLess').show();
                 }
             });
             $('#showLess').on('click', function () {
                 $(".team__list li").slice(4).hide();
                 $('#showAll').show();
                 $('#showLess').hide();
             });
         }
     }

     $(window).on("resize", function(){
         showTeam();
         if (screen.width > 421) {
             $(".team__list li").show();
         }
    });

     showTeam();

    // lightbox.option({
    //     'resizeDuration': 200,
    //     'wrapAround': true
    // });
});
