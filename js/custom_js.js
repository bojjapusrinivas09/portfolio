// JavaScript Document
$(document).ready(function(e) {

// SMOOTH SCROOL

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//  TOP NAV 

$("#nav_toggle_open").click(function(){
	$("#side_bar").animate({left:0},200);
	$(".cover").animate({left:0},2);
});


$(".nav_toggle_close, .cover").click(function(){
	$("#side_bar").animate({left:-400},200);
	$(".cover").animate({left:-1000},2);
});


// BANNER CAROUSEL
$('#owl-carouse_ban').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	 dots:false,
	 speed:250,
     autoplay:true,
     rewind:true,
    autoplayTimeout:1500,
    
    
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


// SCREENSHOT 
$('#owl-carouse_screenshoty').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	 dots:true,
	 speed:250,
    rewind:true,
    autoplay:true,
    autoplayTimeout:1000,
     slideBy: 4,
   
    
	 responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



// CLIENTS
$('#owl-carousel_clients').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
	 dots:false,
	 speed:250,
    rewind:true,
    autoplay:true,
    autoplayTimeout:1000,
     slideBy: 4,
  	 responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




// GOOGLE MAP
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}










// GOOGLE MAP

function initMap() {
   var uluru = {lat:17.409045, lng:78.449879};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });

  var contentString = '<p style="color: black;font-size:x-small;"><b>BizAcumen Research Pvt. Ltd.,</b><br>8-2-672, Technovation, Floors 1<sup>st</sup>, 2<sup>nd</sup> & 3<sup>rd</sup><br>Opp: Oyster Swimming Pool, Road No.13<br>Banjara Hills, Hyderabad-500034<br>Telephone: 40-23332999 <p>';
      

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'BizAcumen Address'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


    
    
    


});

