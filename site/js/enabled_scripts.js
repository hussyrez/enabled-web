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

        var controller = new ScrollMagic.Controller();


        // var pinFirst = new ScrollMagic.Scene({
        //     triggerElement: '#first',
        //     triggerHook: 0,
        //     duration: '500px'

        // })
        // .setPin('#first', {
        //     pushFollowers: false
        // })
        // .addIndicators({
        //     name: "div#1 pin"
        // })
        // .addTo(controller);

        // var fixNav = new ScrollMagic.Scene({
        //     triggerElement: '#navbar',
        //     triggerHook: 0.9

        // })
        // .setClassToggle('#navbar', 'fixed')
        // .addIndicators({
        //     name: "NavFixture"
        // })
        // .addTo(controller);

        // var pinSecond = new ScrollMagic.Scene({
        //     triggerElement: '#second',
        //     triggerHook: 0.2,
        //     // duration: '300px'

        // })
        // .setPin('#first', {
        //     pushFollowers: false
        // })
        // .addTo(controller);

        // var scene = new ScrollMagic.Scene({
        //     duration: 100,
        //     triggerElement: '#text',
        //     triggerHook: 1

        // })
        // // .setTween("#text", 0.5, {backgroundColor: "green", scale: 2.5, opacity: 1})
        // .setClassToggle("#text", 'fade-in')
        // .addIndicators({
        //     name: "1"
        // })
        // .addTo(controller);

       
//=========================== INDEX PAGE =====================================




        var pinFirst = new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook: 0,
            duration: 700

        })
        .setPin('#header', {
            pushFollowers: false
        })
        .addIndicators({
            name: "landingPin"
        })
        .addTo(controller);
        $('video').get(0).play();

        var fixedNav = new ScrollMagic.Scene({
            triggerElement: '#wrapper',
            offset: 10,
            triggerHook: 0

        })
        .setClassToggle('#nav', 'fixed-nav')
        .addIndicators({
            name: "NavFixture",
        })
        .addTo(controller);


        var landingParallex = new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook:0.1,
            offset: 90,
            duration: '35%'
        })
        // .setTween(TweenMax.from('#fullscreen-video', 1, {y: "-10%", ease:Linear.easeNone}) )
        .setTween("#fullscreen-video", {y: "-15%", ease:Linear.easeNone})
        // .addIndicators({
        //     name:"LandingParallex"
        // })
        .addTo(controller);

        if($(window).innerWidth() > 767) {
            var landingContentParallex = new ScrollMagic.Scene({
                triggerElement: '#header',
                triggerHook: 0,
                offset: 0,
                duration: '50%'
            })
            .setTween(".container", {y: "-150", ease:Linear.easeNone})
            .addIndicators({
                name: "ContentParallex"
            })
            .addTo(controller);            
        }


        var landingContentFade = new ScrollMagic.Scene({
            triggerElement: "#header",
            triggerHook:0.2,
            offset: 550,
            duration: "30%"

        })
        // .setTween(TweenMax.fromTo('#howdy', 0.2, {opacity: 0}, {opacity: 1}))
        .setTween(TweenLite.to('#howdy', 1, {opacity:0, ease:Power0.easeNone}))
        .addIndicators({
            name: "Fade"
        })
        .addTo(controller);
        
        // var hideLanding = new ScrollMagic.Scene({
        //     triggerElement: '#content-holder',
        //     triggerHook:0.11,
        // })
        // .setClassToggle('#header', 'hidden')
        // .addIndicators({
        //     name: "HideLanding"
        // })
        // .addTo(controller);

        // var navExpansion = new ScrollMagic.Scene({
        //     triggerElement: '#nav',
        //     triggerHook: 0,
            

        // })
        // .addIndicators({

        // })
        // .addTo(controller)

        // var addclass = new ScrollMagic.Scene({
        //     triggerElement: '#content-holder',
        //     triggerHook: 0.9,
        // })
        // .setClassToggle('#header', 'fixed')
        // .addIndicators({
        //     name: "Landing Page"
        // })
        // .addTo(controller);

        // console.log("Mouse Pos is: " + mouseTopPerc);

		// if ($(window).scrollTop() >= 20) {
		// 	$('#header').addClass('fixed');
		// 	//$('body.index #wrapper').addClass('reduce');
		// 	$('#wrapper').addClass('reduce');
		// 	$('.page-home .fullscreen-video').addClass('hidden');
		// }
		// else {
		//    $('#header').removeClass('fixed');
		//    //$('body.index #wrapper').removeClass('reduce');
		// 	$('#wrapper').removeClass('reduce');
		// 	$('.page-home .fullscreen-video').removeClass('hidden');
		// }
		

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


