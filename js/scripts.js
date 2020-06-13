$(document).ready(function(){

	$('.up').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() >= 300) {
			$('.up').css('opacity',1);
		}
		else {
			$('.up').css('opacity',0);
		}
	});

	$('.menu .nav-link').click(function () {
		let elementClick = $(this).attr('href');
		let destination = $(elementClick).offset().top;
		if(window.matchMedia('(max-width: 767px)').matches) {
			destination -= $('.navbar-collapse').height();
		}
		$('html, body').animate({ scrollTop: destination }, 1000);
		$('.navbar-collapse').removeClass('show');
		return false;
	});
	
	$('.top-slider').slick({
	  infinite: true,
	  autoplay: true,
	  fade: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: true,
	  speed: 1000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	$('.part-slider').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: false,
	  speed: 1000,
	  slidesToShow: 7,
	  slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 6,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		}
	  ] 
	});

	$('.comments-slider').slick({
	  infinite: true,
	  autoplay: false,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: true,
	  speed: 1000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
});