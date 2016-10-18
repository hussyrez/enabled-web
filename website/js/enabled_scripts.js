
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

$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
        $('#header').addClass('fixed');
        //$('body.index #wrapper').addClass('reduce');
        $('#wrapper').addClass('reduce');
        $('.fullscreen-video').addClass('hidden');
    }
    else {
       $('#header').removeClass('fixed');
       //$('body.index #wrapper').removeClass('reduce');
        $('#wrapper').removeClass('reduce');
        $('.fullscreen-video').removeClass('hidden');
    }
    
    //if( slideIsPastTop(".content-slider-holder") )
    //{
        //console.log("Starting playback");
        //$('.content-slider').slick('slickPlay');
    //}
    
});

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

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

//function slideIsPastTop(slideName)
//{
  
  //var windowPosition = $(window).scrollTop();
  //var slidePosition = $(slideName).offset().top;

 // return (slidePosition < windowPosition);
//}


