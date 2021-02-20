'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	// const burgerIcon = document.querySelector('.menu-burger__icon');
	// const burgerMenu = document.querySelector('.menu-drop');
	// const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
	// const body = document.querySelector('body');

	// burgerIcon.addEventListener('click', (event) => {
	// 	burgerIcon.classList.toggle('active');
	// 	if (burgerIcon.classList.contains('active')) {
	// 		body.classList.add('lock');
	// 		burgerMenu.classList.add('active');
	// 	} else {
	// 		body.classList.remove('lock');
	// 		burgerMenu.classList.remove('active');
	// 	}
	// });

	// burgerMenu.addEventListener('click', (event) =>{
	// 	const target = event.target;
	// 	if (target && target.classList.contains('menu-drop__link')){
	// 		burgerIcon.classList.remove('active');
	// 		burgerMenu.classList.remove('active');
	// 		body.classList.remove('lock');
	// 	}
	// });
////////end menu burger//////////
/////////start main screen tabs
// const tabBtn = document.querySelectorAll('.about__tab-title');
// const tabList = document.querySelectorAll('.about__tab-list');
// const tabParent = document.querySelector('.about__questions-wrapper');

// function hideTab() {
// 	tabBtn.forEach(item => {
// 		item.classList.remove('active');
// 	});
// 	tabList.forEach(item => {
// 		item.classList.remove('active');
// 	});
// }

// function showTabs (i = 1){
// 	tabList[i].classList.add('active');
// }

// hideTab();
// showTabs();

// tabParent.addEventListener('click', (event) => {
// 	const target = event.target;
// 	event.preventDefault();
// 	if (target && target.classList.contains('about__tab-title')) {
// 		tabBtn.forEach((item, i) => {
// 			if (target == item) {
// 				hideTab();
// 				showTabs(i);
// 			}
// 		});
// 	}
// });
/////////end main screen tabs
////////////////////start slider Swiper////////////////////
// let mySwipeRealIndex;
// 	let mySwiper = new Swiper('.feedback__container', {
// 		containerModifierClass: 'feedback__container', 
// 		wrapperClass: 'feedback__wrapper',
// 		slideClass: 'feedback__item',
// 		parallax: false,
// 		loop: false,
// 		slidesPerView: 'auto',
// 		spaceBetween: 30,
// 		freeMode: false,
// 		centeredSlides: true,
// 		simulateTouch: true,
// 		autoHeight: false,
// 		navigation: {
// 			nextEl: '.feedback__button-next',
// 			prevEl: '.feedback__button-prev',
// 		},
// 	});
////////////////////end slider Swiper////////////////////

const galaryParent = document.querySelector('.galary__images');
const galaryItem = document.querySelectorAll('.galary__item');
const popupImage = document.querySelector('.popup__img');
const popupBtnPrev = document.querySelector('.popup__btn-prev');
const popupBtnNext = document.querySelector('.popup__btn-next');

galaryParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();

	if (target && target.classList.contains('galary__item')) {
		galaryItem.forEach((item, i) => {
			if (target == item) {
				checkIndex();

				popupBtnNext.addEventListener('click', ()=> {
					//меняем нумерацию изображения
					i++;
					checkIndex();
				});

				popupBtnPrev.addEventListener('click', ()=> {
					i--;
					checkIndex();
				});

				function checkIndex() {
					//получаем атрибуты тэгов source и img из picture
					let galaryItemSource = popupImage.children[0].srcset=`images/${i + 1}.webp`;
					let galaryItemImg = popupImage.children[1].src=`images/${i + 1}.jpg`;

					if (i + 1 === 1) {
						popupBtnPrev.disabled = true;
					} else if (i + 1 >= galaryItem.length) {
						popupBtnNext.disabled = true;
					} else {
						popupBtnNext.disabled = false;
						popupBtnPrev.disabled = false;
					}
				}
			}
		});
	}
});


});
