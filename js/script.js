
$(document).ready(function() {
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
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$(document).ready(function() {
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
});

$(document).ready(function() {
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
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$(document).ready(function() {
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
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});


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
// Open youtube Button

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

// MODAL BOXES

$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
});

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

$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
   loop: true,
   items: 1,
   dots: false,
   autoplay: true,
   center: true
});
});

// Vector 

// document.getElementsByClassName("card-inner").addEventListener("mouseover", function() {
//     document.getElementsByClassName("card-vector").style.fill = "#f9f9f9";
// });
    
// document.getElementsByClassName("card-inner").addEventListener("mouseout", function() {
//     document.getElementsByClassName("card-vector").style.fill = "#292929";
// });

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


