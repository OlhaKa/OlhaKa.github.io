$(document).ready(function(){

        $(".navbar-nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });

        $("window").on("scroll", function() {
           console.log(offset.top)
        });

        var mediaBlock = $('.section-1')

        $(window).on("load scroll", function(){
            if ( $(window).scrollTop() >= (mediaBlock.height() - 50)){
                $(".navbar").delay(500).addClass('scrolledNavbar')
            } else {
                $(".navbar").delay(500).removeClass('scrolledNavbar')
            }
         });

        //  var vh = $( window ).height();
        //     $('.section').css('height', vh);

    });
    