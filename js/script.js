// staart navbar
$(document).ready(function(){

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass("active");
       });

});

$("header .navbar-nav li a").click(function(){

    $('body,html').animate({
       scrollTop : $($(this).attr('href')).offset().top -100
      });
  });


//   owl-carousel
$('.owl-theme').owlCarousel({
    loop:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// End-carousel

$(window).scroll(function(){
		
    var scroll = $(this).scrollTop();

          if (scroll > 1700) {
            $('.timer').countTo();
            $(window).off('scroll');
       } 
       

    });

    $(window).scroll(function(){
    var scrollTop = $(".scroll-top");
 
    if($(window).scrollTop() > 1000 ){
       scrollTop.fadeIn(400);
       
     } else {
      
       scrollTop.fadeOut(400);
    }

});	
