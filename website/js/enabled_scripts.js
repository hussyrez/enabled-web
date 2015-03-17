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

		if (classie.has(overlay, 'open')) {
			
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
		}
		// If the overlay does NOT has the class "close", then add the class open.
		else if (classie.has(overlay, 'close') == false) {
			classie.add( overlay, 'open' );
			classie.add( noscroll, 'clip' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();

$(window).scroll(function(){
    if ($(window).scrollTop() >= 230) {
		$('#header').addClass('fixed');
    }
    else {
       $('#header').removeClass('fixed');
    }
	
	//if( slideIsPastTop(".content-slider-holder") )
	//{
		//console.log("Starting playback");
		//$('.content-slider').slick('slickPlay');
	//}
	
});

function jumpScroll() {
   	window.scroll(0,550); // horizontal and vertical scroll targets
}

  $('.content-slider').slick({
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    fade: true,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 1000,
    adaptiveHeight: false
  });			

//function slideIsPastTop(slideName)
//{
  
  //var windowPosition = $(window).scrollTop();
  //var slidePosition = $(slideName).offset().top;

 // return (slidePosition < windowPosition);
//}

