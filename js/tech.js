
$(function () {

    enableAnimations();

    $(".hamburger").on("click", function () {
        $(this).hasClass("active") ? closeMenu() : openMenu();
    });


    $('.mmenu-item').on('click', function () {
        if($(this).hasClass('faq-mobile')){
            console.log('yes');
        } else {
            closeMenu();
        }
    });

    $('.mmenu-item-list__item').on('click', function () {
        closeMenu();
    });


    $('.faq-mobile__link').on('click', function (e) {
        e.preventDefault();
        if ($(this).closest('.faq-mobile').find('.mmenu-item__list').hasClass('active-block')) {

            $(this).closest('.faq-mobile').find('.mmenu-item__list').removeClass('active-block');
        } else {
            $(this).closest('.faq-mobile').find('.mmenu-item__list').addClass('active-block');

        }
    });

});

function enableAnimations() {
    smoothScroll();

    //-------------------------------//

    function smoothScroll() {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
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
