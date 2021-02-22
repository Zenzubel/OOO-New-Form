$(function () {

	// initScrollMagic
	var controller = new ScrollMagic.Controller();
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".welcome__features",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.welcome__features', 'fade-left') //add class to progect
	.addTo(controller);
// end scene
});