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
                top0:  -300,
                x0:  0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation-text")[0]),
				startScrollingOffset: -300
            });
            break;
		 case 5:  /* innovation - innovation */
            myElement.data('params', {
                top0: -500,
                x0: 0,
                top1: $(this).css('top'),
                x1: $(this).css('left'),
				scrollTop: findTop($("#innovation-text")[0]),
				startScrollingOffset: -500
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

