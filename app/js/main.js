'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-drop');
	const burgerMenuList = document.querySelector('.menu-burger__container');
	const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
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
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenuList.classList.remove('active');
			body.classList.remove('lock');
		}
	});
////////end menu burger//////////
/////////////////start map///////////////////////
ymaps.ready(init);
var myMap;
	function init () {
		var myMap = new ymaps.Map("map", {
			center:[55.02176818641737,82.95640157449007],
			zoom: 18,
			// Выключаем все управление картой
			controls: []
		}); 
		var myGeoObjects = [];
		// Указываем координаты метки
		myGeoObjects = new ymaps.Placemark([55.02176818641737,82.95640157449007],{
			balloonContentHeader: 'ООО "Новая форма"',
			balloonContentBody: `
				- пошив спецодежды <br>
				- продажа спецодежды <br>
				- услуги ателье <br>
				ул. Бориса Богаткова, 101.
			`,
			balloonContentFooter: "+7-923-17-33-711",
		},{
			iconLayout: 'default#image',
			iconImageHref: 'images/favicon/favicon.png', 
			// Размеры иконки
			iconImageSize: [100, 100],
			// Смещение верхнего угла относительно основания иконки
			iconImageOffset: [-250, -50]
		});

		var clusterer = new ymaps.Clusterer({
			clusterDisableClickZoom: false,
			clusterOpenBalloonOnClick: false,
		});

		clusterer.add(myGeoObjects);
		myMap.geoObjects.add(clusterer);
		// Отключим zoom
		myMap.behaviors.disable('scrollZoom');
	}
/////////////////end map///////////////////////
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
///end header scroll/////////////
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
	let mySwiper = new Swiper('.catalog__container', {
		containerModifierClass: 'catalog__container', 
		wrapperClass: 'catalog__wrapper',
		slideClass: 'catalog__item',
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		freeMode: false,
		centeredSlides: false,
		simulateTouch: true,
		autoHeight: false,
		navigation: {
			nextEl: '.catalog__button-next',
			prevEl: '.catalog__button-prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
		}
	});
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
