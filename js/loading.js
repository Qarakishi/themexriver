let loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.5);
        }, 500);
        // her 1000 milli saniyelik dovrde qeyri sefafliq 0.5 azalmaqdadir
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});



//  <div id="preloader" class="saas-classic-preloader"></div> html terefde bunu yaziriq,isi qurtarandan sonra yoxa cixir.
// 1. asagidaki hisse sass hissesidir.
// .saas-classic-preloader {
//     background-color: #fff;
//     background: #fff url("../img/saas-c/pre.svg") no-repeat center center;
// }
// 2.asagidaki hisse jquery-dir. slow oz ozelliyidir ve transition terkibinde var.
// Saasiopreloader: function (){
//     jQuery(window).on('load', function(){
//         jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
//     });
// },