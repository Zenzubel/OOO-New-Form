'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenuList = document.querySelector('.menu-burger__container');
	const burgerMenuLink = document.querySelectorAll('.menu-burger__link');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenuList.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenuList.classList.remove('active');
		}
	});

	burgerMenuList.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-burger__link')){
			burgerIcon.classList.remove('active');
			burgerMenuList.classList.remove('active');
			body.classList.remove('lock');
		}
	});
///////////end menu burger//////////
///start header scroll/////////////
//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// start scene
	new ScrollMagic.Scene({
		triggerElement: "",
		duration: '0',
		triggerHook: 0.1,
		offset: 10,
		reverse: true})
	.setClassToggle(".header__inner", "active") // add class toggle
	.addIndicators({
			name: 'anim scene',
			colorTrigger: 'black',
			colorStart: 'red',
			colorEnd: 'green'
		})
	.addTo(controller);
	//end scene
//////////////////////end scrollMagic//////////////////////
//////////////////////end header scroll/////////////

});
