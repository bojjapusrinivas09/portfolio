// JavaScript Document

// Nav Drop Down


$("#drop_down").click(function(){
	$(".sub_nav").toggle();	
});

// SIDE NAV


	
$("#side_nav_open").click(function(){
	$("#screen_cover").show();
	$("#side_nav_bar").animate({left:'0'}, 200);
});


$("#side_nav_close").click(function(){
	$("#screen_cover").hide();
	$("#side_nav_bar").animate({left:'-100%'}, 200);
	
});

$("#screen_cover").click(function(){
	$(this).hide();
	$("#side_nav_bar").animate({left:'-100%'}, 200);
	
});



// OWL CAROUSEL 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	 dots:true,
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
})

// GALLERY FILTER

 $(function() {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();
});