$(document).ready(function(){
	
	console.log($('.place-date-left').outerWidth());
	
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
	  speed: 1500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});