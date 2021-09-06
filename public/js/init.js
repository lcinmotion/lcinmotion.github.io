jQuery(document).ready(function($) {


//	Make sure that #header-background-image height is
// equal to the browser height.

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });
});








