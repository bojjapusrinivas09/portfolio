// JavaScript Document

// SIDE NAV BAR DROP DOWN

$('.sub_list').hide(); //Hide children by default

$('.nav_list').click(function(){
    $(this).children('.sub_list').slideToggle('slow');     
}).children('.sub_list').click(function (event) {
    event.stopPropagation();
});


// LEFT SIDE BAR HIDE AND SHOW //


$(".close_bt").click(function(){
	$(".left_slider").animate({left: '-100%'});
})

$(".nav_toggle").click(function(){
	$(".left_slider").animate({left:'0%'});
	$(".right-slider").animate({right: '-100%'});
	
})

// RIGHT SIDE BAR HIDE AND SHOW //


$(".close_bt_cart").click(function(){
	$(".right-slider").animate({right: '-100%'});
})

$(".car_toggle").click(function(){
	$(".right-slider").animate({right:'0%'});
   $(".left_slider").animate({left: '-100%'});
	
})




// SLIDE SHOW //

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}



//OWL CAROUSEL SLIDE

	$(document).ready(function() {
	  var owl = $('.owl-carousel');
	  owl.owlCarousel({
		 margin: 10,
		 nav: true,
		 loop: true,
		 dots:false,
		 responsive: {
			0: {
			  items: 1
			},
			600: {
			  items: 2
			},
			1000: {
			  items: 3
			}
		 }
	  })
	})



// CART REMOVER



  
