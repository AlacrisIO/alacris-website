var advisorsCvIsCutted = false;

$(function () {

  enableAnimations()

  $(".hamburger").on("click", function () {
    $(this).hasClass("active") ? closeMenu() : openMenu();
  })

  $(".mmenu-item__link").on("click", closeMenu)

  cutAdvisorsText()


  $(".advisors__see-more").on("click", openPopup)
  $(".popup__close, .popup__shadow").on("click", closePopup)

  $(window).on("resize", cutAdvisorsText)
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

  $(".popup__name").html(name);
  $(".popup__position").html(position);
  $(".popup__cv").html(cv);
  $(".popup__socials").html(socials);
  $(".popup__image").attr('src', imageSrc);
  $(".popup__link").attr("href", webLinkHref).html(webLinkHtml);

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
      $(this).attr("data-full-text", $advisorCv.html())    }

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
