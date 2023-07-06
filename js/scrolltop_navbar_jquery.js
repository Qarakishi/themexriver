$(document).ready(function () {
        // clickledikde sectiona yavas sekilde gedir, animasiya ile gedir.
        $("#header_main .nav-link").click(function (e) {
                e.preventDefault();
                let elem = $($(this).attr("href"));
                $("html, body").animate({ scrollTop: elem.offset().top - 100 }, "slow");
                //header veya navbarin birinci id-sidir.
        });

        // navbarda yasil isiqi yandirir.
        // $("body").scrollspy({
        //         target: "#navbarNav",
        //         offset: 0
        //         //div id-sidi hansi ki, icerisinde ul li a-dir
        // });

        //reflesh vurduqda eger seyfede ortasinda onda navbarin olcusunu kicildir.      
        if ($(window).scrollTop() > 250) {
                $("#scrollup .classic-scrollup").removeClass("none");
                $("#scrollup .classic-scrollup").addClass("block");
                // nav en birinci id olan.classidir.
        }

        // // yuxaridan gosterilen piksel ayrildiqda navbarin olcusunu kicildir.
        
        $(window).scroll(function () {
                // console.log(($(window).scrollTop()));
                if ($(this).scrollTop() > 250) {
                        $("#scrollup .classic-scrollup").removeClass("none");
                        $("#scrollup .classic-scrollup").addClass("block");
                } else {
                        $("#scrollup .classic-scrollup").removeClass("block");
                        $("#scrollup .classic-scrollup").addClass("none");
                }
        })
});

// $('#scrollup').on("click", function()  {
//         $("html, body").animate({
//                 scrollTop: 0
//         }, 800);
//         return false;
//        burdaki scroll a verilen id-dir
// });	







