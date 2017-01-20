(function() {
    var triggerBttn = $('#menu');
    var overlay = $('div.overlay');
    var noscroll = $('body');
    var closeBttn = $('button.overlay-close');

    function toggleOverlay() {
        // Closes the overlay
        if (overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
            noscroll.removeClass('clip');
            triggerBttn.removeClass('cross');
        } else {// Opens the overlay
            overlay.removeClass('close');
            overlay.addClass('open');
            noscroll.addClass('clip');
            triggerBttn.addClass('cross');
        }

        // Stops the page jumping to the top
        return false;
    }
    triggerBttn.on("click", toggleOverlay);
    closeBttn.on("click", toggleOverlay);
})();
$( document ).ready(function() {
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 1) {
			$('#header').addClass('fixed');
			//$('body.index #wrapper').addClass('reduce');
			$('#wrapper').addClass('reduce');
			$('.page-home .fullscreen-video').addClass('hidden');
		}
		else {
		   $('#header').removeClass('fixed');
		   //$('body.index #wrapper').removeClass('reduce');
			$('#wrapper').removeClass('reduce');
			$('.page-home .fullscreen-video').removeClass('hidden');
		}
		
		//if( slideIsPastTop(".content-slider-holder") )
		//{
			//console.log("Starting playback");
			//$('.content-slider').slick('slickPlay');
		//}
	});
});

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results===null){
       return null;
    }
    else{
       return results[1] || 0;
    }
};

//function slideIsPastTop(slideName)
//{
  
  //var windowPosition = $(window).scrollTop();
  //var slidePosition = $(slideName).offset().top;

 // return (slidePosition < windowPosition);
//}


