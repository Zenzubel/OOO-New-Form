'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-drop');
	const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenu.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenu.classList.remove('active');
		}
	});

	burgerMenu.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenu.classList.remove('active');
			body.classList.remove('lock');
		}
	});

});

////////end menu burger//////////