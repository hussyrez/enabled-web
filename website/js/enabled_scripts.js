(function() {
	var triggerBttn = document.getElementById('trigger-overlay');
	var overlay = document.querySelector('div.overlay');
	var noscroll = document.querySelector('body');
	var closeBttn = overlay.querySelector('button.overlay-close');
		
	var transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	};
	var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
	var support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {

		if (classie.has(overlay, 'open')) {// overlay is open, so close it...
			
			classie.remove(overlay, 'open');
			classie.add( overlay, 'close' );
	
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				
				classie.remove( overlay, 'close' );
				classie.remove( noscroll, 'clip' );
				
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}

			classie.remove(triggerBttn, 'cross');// change the cross to 3-strokes
		}
		// If the overlay does NOT has the class "close", then add the class open.
		else if (classie.has(overlay, 'close') == false) { // overlay is closed, so open it...
			classie.add( overlay, 'open' );
			classie.add( noscroll, 'clip' );

			classie.add(triggerBttn, 'cross');// change the 3-strokes to cross
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();

$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
		$('#header').addClass('fixed');
		$('body.index #wrapper').addClass('reduce');
    }
    else {
       $('#header').removeClass('fixed');
	   $('body.index #wrapper').removeClass('reduce');
    }
	
	//if( slideIsPastTop(".content-slider-holder") )
	//{
		//console.log("Starting playback");
		//$('.content-slider').slick('slickPlay');
	//}
	
});

function jumpScroll() {
   	window.scroll(0,1); // horizontal and vertical scroll targets
}

  $('.content-slider').slick({
    dots: true,
    infinite: true,
    speed:180,
    slidesToShow: 1,
    //fade: true,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 1000,
    adaptiveHeight: false
  });

$('.content-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	//classie.add($('.content-slider').get(currentSlide), 'fade');
	//classie.remove($('.content-slider').get(nextSlide), 'fade');
	//$(this).find(".slide-content:nth-child("+(currentSlide+1)+")").fadeOut();
	//$(this).find(".slide-content:nth-child("+(nextSlide+1)+")").fadeIn();
	console.log("Slide: " + currentSlide + ", " + nextSlide);
});

//function slideIsPastTop(slideName)
//{
  
  //var windowPosition = $(window).scrollTop();
  //var slidePosition = $(slideName).offset().top;

 // return (slidePosition < windowPosition);
//}

