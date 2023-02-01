$(function ($) {
    "use strict";
    
    var htmlBody = $('html, body');

    // this is for back to top
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 500);
    });


    var windo = $(window),
        wWidth = windo.width();
    //nave top js
    var navNavbar = $('nav.navbar');
    var navOffset = navNavbar.offset().top;
    var navright = $('.navbar-right');

    navNavbar.wrap('<div class="nav-wrapper"></div>');
    $('.nav-wrapper').height(navNavbar.outerHeight());

    windo.on('scroll', function () {

        var scrollPos = windo.scrollTop();

        if (scrollPos >= navOffset) {
            navNavbar.addClass('navbar-fixed-top');
            navright.css('margin-right', '0');
        } else {
            navNavbar.removeClass('navbar-fixed-top');
            navright.css('margin-right', '0px');
        }
        //back to top button js
        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });

    // makes sure the whole site is loaded
	windo.on('load', function () {
		$(".loader").delay(2000).fadeOut();
		$("#preloader").delay(2000).fadeOut("slow");
	});
    
    //light box js
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#ff5f83',
        arrowsColor: '#ff5f83',
        border: '5px',
        closeBackground: '#ff5f83',
        closeColor: '#fff',
        bgcolor: '#ff5f83'
    });


    //coundown js
    $('.coundown_res').countdown('2018/06/02', function (event) {
        var $this = $(this);
        $this.find('#day').html(event.strftime('<span>%D</span>'));
        $this.find('#hour').html(event.strftime('<span>%H</span>'));
        $this.find('#month').html(event.strftime('<span>%M</span>'));
        $this.find('#second').html(event.strftime('<span>%S</span>'));
    });
    $('.coundown_res_two').countdown('2018/07/02', function (event) {
        var $this = $(this);
        $this.find('#day2').html(event.strftime('<span>%D</span>'));
        $this.find('#hour2').html(event.strftime('<span>%H</span>'));
        $this.find('#month2').html(event.strftime('<span>%M</span>'));
        $this.find('#second2').html(event.strftime('<span>%S</span>'));
    });
    $('.coundown_res_three').countdown('2018/09/02', function (event) {
        var $this = $(this);
        $this.find('#day3').html(event.strftime('<span>%D</span>'));
        $this.find('#hour3').html(event.strftime('<span>%H</span>'));
        $this.find('#month3').html(event.strftime('<span>%M</span>'));
        $this.find('#second3').html(event.strftime('<span>%S</span>'));
    });

    //header slider js
    $('.slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: false,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    //Dj slider js
    $('.dj_slider_active').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow',
        centerMode: true,
        centerPadding: 0,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    setTimeout(function () {
        var SlickCurrent = $('.slick-current');
        SlickCurrent.prev().addClass('prev');
        SlickCurrent.next().addClass('next');
    }, 100);

    $('.dj_slider_active').on('beforeChange', function () {
        $('.slick-slide').removeClass('prev next');
        setTimeout(function () {
            var beforechange = $('.slick-current') ;
            beforechange.prev().addClass('prev');
            beforechange.next().addClass('next');
        }, 100);
    });

    //events slider js
    $('.hm_event_slider_active').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        prevArrow: '.left_arrow_up',
        nextArrow: '.right_arrow_up',
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //home blog slider js
    $('.hm_blog_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: '.left_arrow_blog',
        nextArrow: '.right_arrow_blog',
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });

    //home testmonial slider js
    $('.hm_testmonial_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: '.left_arrow_testmonial',
        nextArrow: '.right_arrow_testmonial',
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });

    //about page  slider js
    $('.about_us_slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 300,
        prevArrow: '.left_arrow_about',
        nextArrow: '.right_arrow_about',
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });


    //google map
    var googleMapSelector = $('#map'),
        myCenter = new google.maps.LatLng(23.741380, 90.382538);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#263c3f'
                    }]
            },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#6b9a76'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#38414e'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#212a37'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9ca5b3'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#746855'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#1f2835'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#f3d19c'
                    }]
            },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#2f3948'
                    }]
            },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#17263c'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#515c6d'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#17263c'
                    }]
            }
          ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter

        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    windo.on('load', function(){
        $('.testbest').packery({
            itemSelector: '.gridtest',
            gutter: 0
        });
    });


}(jQuery));