var advisorsCvIsCutted = false;

$(function () {

  enableAnimations()

  $(".hamburger").on("click", function () {
    $(this).hasClass("active") ? closeMenu() : openMenu();
  })

  $(".mmenu-item__link").on("click", closeMenu)

  cutAdvisorsText()
  highlightNavItems() 

  $(".advisors__see-more").on("click", openPopup)
  $(".popup__close, .popup__shadow").on("click", closePopup)

  $(window)
    .on("resize", cutAdvisorsText)
    .on("scroll", highlightNavItems)

})

function enableAnimations() {
  smoothScroll();

  //-------------------------------//

  function smoothScroll() {
    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();

      $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top - $(".header").height()
        },
        600
      );
    });
  }
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

function openPopup() {
  $("html, body").css("overflow-y", "hidden");

  $advisor = $(this).closest(".advisor");
  var imageSrc = $advisor.data("popup-photo-src");
  var webLinkHtml = $advisor.data("weblink-html")
  var webLinkHref = $advisor.data("weblink-href")

  var cv = $advisor.data("full-text")
  var name = $advisor.find(".advisor__name").html();
  var position = $advisor.find(".advisor__position").html();
  var socials = $advisor.find(".advisors__socials").html().replace(/advisors/g, 'popup');

  name ? $(".popup__name").html(name) : $(".popup__name").html("");
  position ? $(".popup__position").html(position) : $(".popup__position").html("");
  cv ? $(".popup__cv").html(cv) : $(".popup__cv").html("");
  socials ? $(".popup__socials").html(socials) : $(".popup__socials").html("");
  imageSrc ? $(".popup__image").attr('src', imageSrc) : $(".popup__image").attr('src', "");
  webLinkHtml ? $(".popup__link").attr("href", webLinkHref).html(webLinkHtml) : $(".popup__link").attr("href", "").html("");

  $(".popup, .popup__shadow").fadeIn();
}

function closePopup() {
  $("html, body").css("overflow-y", "auto");
  $(".popup, .popup__shadow").fadeOut();
}

function cutAdvisorsText() {
  $(".advisor").each(function () {
    var $advisorCv = $(this).find(".advisor__cv");

    if (!advisorsCvIsCutted) {
      $(this).attr("data-full-text", $advisorCv.html())
    }

    var shortTextMd = $(this).data("short-text-md");
    var shortTextSm = $(this).data("short-text-sm");

    if ($(window).width() > 767) {
      $advisorCv.html(shortTextMd);
    } else {
      $advisorCv.html(shortTextSm);

    }

  })
  advisorsCvIsCutted = true;
}

function highlightNavItems() {
  var windowScrolled = $(window).scrollTop();

  var homeTop = 0;
  var benefitsTop = $('#Benefits').offset().top;
  var ourTeamTop = $('#OurTeam').offset().top;
  var partnersTop = $('#Partners').offset().top;
  var contactUsTop = $('#ContactUs').offset().top;

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
