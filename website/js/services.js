/* animated titles */

$(document).ready(function () {
							
    $('.element').each(function (i) {
        var myElement = $(this);
        myElement.data('params', 
					   {
         top1: $(this).css('top'),
         x1: $(this).css('left')
        });
        switch (i) {
        case 0: /* innovation - business */
            myElement.data('params', {
                top0: -600,
                x0:0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: -250
            });
            break;
        case 1:  /* innovation - technology  */
            myElement.data('params', {
                top0: -600,
                x0: 0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: -150
            });
            break;
		case 2: /* innovation - human */
            myElement.data('params', {
                top0: -600,
                x0:0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: -450
            });
            break;
        case 3:  /* innovation light globe */
            myElement.data('params', {
                top0: -800,
                x0: 0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: -550
            });
            break;
		 case 4:  /* innovation - line */
            myElement.data('params', {
                top0:  -600,
                x0:  0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: 0
            });
            break;
		 case 5:  /* innovation - innovation */
            myElement.data('params', {
                top0: -600,
                x0: 0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation")[0]),
				startScrollingOffset: 0
});
            break;
        }
    });

  
	
/* FUNCTION USED TO FIND THE COMPLETE TOP OFFSET OF A CERTAIN ELEMENT */
	function findTop(obj) {
		if(!obj){ 
			return 0;
		}
		var curtop = 0;
		if (obj.offsetParent){
			do{
				curtop += obj.offsetTop;
			} 
			while (obj = obj.offsetParent);
			return curtop;
		}
}

    $(window).scroll(function () {

        function move(p0, p1, s) {
            //return Math.min((-p0 + p1) / s_max * s + p0, p1);
			return  Math.max(Math.min(p1+p0*(1-s), p1), p1+p0); //From p1+p0 to p1 as s goes from 0 to 1
        }
        var winScrollTop = parseInt($(window).scrollTop());
        $('.element').each(function (i) {
			if($(this).data('params').scrollTop) {
				var offset =  $(this).data('params').startScrollingOffset;
				var scrollAlpha = Math.max(0,Math.min(1,(winScrollTop - $(this).data('params').scrollTop - offset) / Math.abs(offset)));
	
				var myX = move($(this).data('params').x0, parseInt($(this).data('params').x1), scrollAlpha),
					myY = move($(this).data('params').top0, parseInt($(this).data('params').top1), scrollAlpha);
				
				if(i===0) {
					console.log(scrollAlpha);
				}
				var fadeAmount = Math.pow(move(-1,1,scrollAlpha),2);
					
				
				//console.log(myY);
				
				$(this).stop().css({
					left: myX + 'px',
					top: myY + 'px',
					opacity: fadeAmount
				});
			}
        });
    });
});


jQuery(function($) {
	$('.hero-slider').slick({
		slideShow : true, // Set to false to prevent SSS from automatically animating.
		startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
		transition : 700, // Length (in milliseconds) of the fade transition.
		speed : 3500, // Slideshow speed in milliseconds.
		draggable: true,
		showNav : true// Set to false to hide navigation arrows.
	});
	});
	
 $('.content-slider').slick({
    dots: true,
    infinite: true,
    speed:180,
    slidesToShow: 1,
    fade: false,
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


