// navbar 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sticky-header").style.top = "0";
  } else {
    document.getElementById("sticky-header").style.top = "-128px";
  }
  prevScrollpos = currentScrollPos;
}





$(document).ready(function() {
	// Gallery 1
	$('.popup-gallery1').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Grafitto</small>';
			}
		}
	});

	// Gallery 2
	$('.popup-gallery2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Grafitto</small>';
			}
		}
	});

	// Gallery 3
	$('.popup-gallery3').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Grafitto</small>';
			}
		}
	});

	// Gallery 4
	$('.popup-gallery4').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Grafitto</small>';
			}
		}
	});

	// YouTube Popup

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Owl-Carousel
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		autoplay: true,
		center: true
	 });
});



// Loader JS

$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	console.log("hit");
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	console.log("hit");
	$('body').delay(350).css({'overflow':'visible',
							   'overflow-x':'hidden'});
	console.log("hit");  
})

// WOW JS

wow = new WOW(
	{
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       true,       // default
	live:         true        // default
  }
  )
  
  wow.init();


// Testimonials

const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

 for(let i=0; i<indicatorImages.length; i++){
	 indicatorImages[i].addEventListener("click",function(){
	  
		for(let j=0; j<indicatorImages.length; j++){
		  indicatorImages[j].classList.remove("active");
		}
		 this.classList.add("active");
		 const id=this.getAttribute("data-id");
		for(let j=0; j<slides.length; j++){
			slides[j].classList.remove("active");
		}

		 slides[id].classList.add("active");

	 })
 }


// Client List Carousel


$("#card1").hover(function(){
    $("#img-id1").css("display", "none");
    $("#img-id2").css("display", "block");  
  }, function(){
	$("#img-id1").css("display", "block");
	$("#img-id2").css("display", "none");
});

$("#card2").hover(function(){
    $("#img-id3").css("display", "none");
    $("#img-id4").css("display", "block");  
  }, function(){
	$("#img-id3").css("display", "block");
	$("#img-id4").css("display", "none");
});

$("#card3").hover(function(){
    $("#img-id5").css("display", "none");
    $("#img-id6").css("display", "block");  
  }, function(){
	$("#img-id5").css("display", "block");
	$("#img-id6").css("display", "none");
});


