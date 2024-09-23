$(document).ready(function () {
    
    // Efecto del Menu
    $('body header .container .menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    // Efecto header
    if( $(window).width() > 800 ) {
        $('body header .container .texts').css({
            opacity: 0,
            marginTop: '30%'
        });

        $('body header .container .texts').animate({
            opacity: 1,
            marginTop: '15%'
        }, 2000);
    };

    // Scroll al contenido de los enlaces del menu

    var acercaDe = $('#about_us').offset().top;
    var menuComida = $('#menu_food').offset().top;
    var galeriaImg = $('#gallery_img').offset().top;
    var ubicacionComercio = $('#ubication_com').offset().top;
    

    $('#btn_acercaDe').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 320
        }, 500)
    });

    $('#btn_menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menuComida
        }, 500)
    });

    $('#btn_galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeriaImg
        }, 500)
    });

    $('#btn_ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacionComercio
        }, 500)
    });

    // Efecto Parallax
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        if (windowWidth > 800){

            var scroll = $(window).scrollTop();

            $('body header .container .texts').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('body .main .about_us .container article').css({
                'transform': 'translate(0px,' + scroll / -4 + '%)'
            });
        };
    });
    $(window).resize(function(){
        var windowWidth = $(window).width();

        if (windowWidth < 800) {
            $('body .main .about_us .container article').css({
                'transform': 'translate(0px, 0px'
            });
        };
    });
});