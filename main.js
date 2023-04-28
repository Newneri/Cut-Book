$(document).ready(function () {
    $.getJSON("salons.json", function (data) {
        var salonHtml = '';
        $.each(data.salons, function (index, salon) {
            salonHtml += '<div class="salon-card">';
            salonHtml += '<img src="' + salon.image + '" alt="' + salon.nom + '">';
            salonHtml += '<div class="salon-card-body">';
            salonHtml += '<h3>' + salon.nom + '</h3>';
            salonHtml += '<p>' + salon.adresse + ', ' + salon.ville + '</p>';
            salonHtml += '<p>' + salon.telephone + '</p>';
            salonHtml += '<a href="#" class="btn btn-primary">Réserver</a>';
            salonHtml += '</div>';
            salonHtml += '</div>';
        });

        $('.slick-slider').html(salonHtml);

        $('.slick-slider').slick({
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplayspeed: 250,
            arrows: true,    
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
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

        $('.slick-prev').click(function () {
            $('.slick-slider').slick('slickPrev');
        });

        $('.slick-next').click(function () {
            $('.slick-slider').slick('slickNext');
        });
    });
});

