(function ($) {
    "use strict";

    //======================================
    //=========== Fixed navbar =============
    //======================================
    $(window).on('scroll', function(){
        var fixed_top = $(".header");
        var topbar = $('.topbar');
        $(window).on("scroll", function(){
            if( $(window).scrollTop() > 100){  
                fixed_top.addClass("animated fadeInDown fixed-header");
                topbar.hide();
                if ($(window).width() < 960) {
                    $('.header').removeClass('fixed-header');
                }
            }
            else{
                fixed_top.removeClass("animated fadeInDown fixed-header");
                topbar.show();
                if ($(window).width() < 960) {
                    topbar.hide();
                }
            }
        });
    }); 

    
    //=======================================
    //   side-menubar
    //========================================
    $(".side-manubar-button").on('click', function(){
        $(".side-menubar").toggleClass("opened");
    });

    $('.close').on('click', function(){
        $(".side-menubar").removeClass("opened");
    });

    


    //=======================================
    //   img slider for service details
    //========================================
    jQuery(".img-slider").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout: 7000,
        margin: 10,
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });


   //=======================================
    //   product-slider
    //========================================
    jQuery(".product-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
        autoplayTimeout: 7000,
        margin: 50,
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });


    //=======================================
    //   team carousel
    //========================================
    jQuery(".team-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplayTimeout: 7000,
        animateIn: "fadeInDown",
        animateOut: "fadeOutDown",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

   //=======================================
    //   brand carousel
    //========================================
    jQuery(".brand-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 7000,
        animateIn: "fadeInDown",
        animateOut: "fadeOutDown",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            960: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

   //=======================================
    //   testimonial carousel
    //========================================
    jQuery(".testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 7000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        animateIn: "fadeInDown",
        animateOut: "fadeOutDown",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true
    });

    //=======================================
    //   testimonial carousel
    //========================================
    jQuery(".testimonial-2-slider").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 7000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        animateIn: "fadeInDown",
        animateOut: "fadeOutDown",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            960: {
                items: 2
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });

    //=======================================
    //   banner slider
    //========================================
    jQuery("#animation-slide").owlCarousel({
        items: 1,
        loop: false,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 7000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: false
    });
    jQuery("#animation-slide").on("translate.owl.carousel", function () {
        jQuery(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity","0");
        jQuery(this).find(".owl-item .part-img").removeClass("fadeInRight animated").css("opacity","0");
    });          
    jQuery("#animation-slide").on("translated.owl.carousel", function () {
        jQuery(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity","1");
        jQuery(this).find(".owl-item.active .part-img").addClass("fadeInRight animated").css("opacity","1");
    });
   

    



    $(window).on('load', function () {
        //======================================
        //============= Preloader ==============
        //======================================
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });


    $('.responsive-menu-button').on('click', function(){
        $(this).toggleClass("add-transform");
    });


    //======================================
    //========== magnificPopup video ============
    //======================================
    $('.venobox').magnificPopup({
        type: 'video'
    });
    $('.image-popup').magnificPopup({
        type: 'image'
    }); 
    
    $(document).on('click', '.back-to-top', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 3000);
    });
    
}(jQuery));	







