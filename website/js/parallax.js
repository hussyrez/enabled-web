$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.introduction').click(function(){
    	$('html, body').animate({
    		scrollTop:0
			/*scrollTop:$('#introduction').offset().top*/
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.aboutkwp').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#aboutkwp').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.ikon').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#ikon').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

	$('a.history').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#history').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	$('a.today').click(function(){
		$('html, body').animate({
			scrollTop:$('#today').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
	$('a.fullservice').click(function(){
		$('html, body').animate({
			scrollTop:$('#fullservice').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });

	$('a.coopers').click(function(){
		$('html, body').animate({
			scrollTop:$('#coopers').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });

	$('a.peopleschoice').click(function(){
		$('html, body').animate({
			scrollTop:$('#peopleschoice').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
	$('a.SAtourism').click(function(){
		$('html, body').animate({
			scrollTop:$('#SAtourism').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
	$('a.healthpartners').click(function(){
		$('html, body').animate({
			scrollTop:$('#healthpartners').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
	$('a.oxford').click(function(){
		$('html, body').animate({
			scrollTop:$('#oxford').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
	$('a.ourclients').click(function(){
		$('html, body').animate({
			scrollTop:$('#ourclients').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
	
		$('a.seeyousoon').click(function(){
		$('html, body').animate({
			scrollTop:$('#seeyousoon').offset().top
		}, 1000, function() {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
    });
		
    /* Show/hide dot lav labels on hover */
    $('div#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#about').offset().top - (($('#aboutkwp').offset().top - $('#about').offset().top) / 2);
	var section3Top =  $('#aboutkwp').offset().top - (($('#ikon').offset().top - $('#aboutkwp').offset().top) / 2);
	var section4Top =  $('#ikon').offset().top - (($('#history').offset().top - $('#ikon').offset().top) / 2);
	var section5Top =  $('#history').offset().top - (($('#today').offset().top - $('#history').offset().top) / 2);
	var section6Top =  $('#today').offset().top - (($('#fullservice').offset().top - $('#today').offset().top) / 2);
	var section7Top =  $('#fullservice').offset().top - (($('#coopers').offset().top - $('#fullservice').offset().top) / 2);
	var section8Top =  $('#coopers').offset().top - (($('#peopleschoice').offset().top - $('#coopers').offset().top) / 2);
	var section9Top =  $('#peopleschoice').offset().top - (($('#SAtourism').offset().top - $('#peopleschoice').offset().top) / 2);
	var section10Top =  $('#SAtourism').offset().top - (($('#healthpartners').offset().top - $('#SAtourism').offset().top) / 2);
	var section11Top =  $('#healthpartners').offset().top - (($('#oxford').offset().top - $('#healthpartners').offset().top) / 2);
	var section12Top =  $('#oxford').offset().top - (($('#ourclients').offset().top - $('#oxford').offset().top) / 2);
	var section13Top =  $('#ourclients').offset().top - (($('#seeyousoon').offset().top - $('#ourclients').offset().top) / 2);
	var section14Top =  $('#seeyousoon').offset().top - (($(document).height() - $('#seeyousoon').offset().top) / 2);;
	$('div#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('div#primary a.introduction').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('div#primary a.about').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('div#primary a.aboutkwp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('div#primary a.ikon').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('div#primary a.history').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('div#primary a.today').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('div#primary a.fullservice').addClass('active');
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top){
		$('div#primary a.coopers').addClass('active');
	} else if ($(document).scrollTop() >= section9Top && $(document).scrollTop() < section10Top){
		$('div#primary a.peopleschoice').addClass('active');
	} else if ($(document).scrollTop() >= section10Top && $(document).scrollTop() < section11Top){
		$('div#primary a.SAtourism').addClass('active');
	} else if ($(document).scrollTop() >= section11Top && $(document).scrollTop() < section12Top){
		$('div#primary a.healthpartners').addClass('active');
	} else if ($(document).scrollTop() >= section12Top && $(document).scrollTop() < section13Top){
		$('div#primary a.oxford').addClass('active');
	} else if ($(document).scrollTop() >= section13Top && $(document).scrollTop() < section14Top){
		$('div#primary a.ourclients').addClass('active');
	} else if ($(document).scrollTop() >= section14Top){
		$('div#primary a.seeyousoon').addClass('active');
	}	
}
