const navigation = document.querySelector('.header__navigation');
const navPopup = document.querySelectorAll('.header__navigation-popup');
const burgerButton = document.querySelector('.burger-menu');

const settingsButton = document.querySelector('.settings');
let settingsPopup = document.querySelector('.settings__popup');
const closeSettingsButton = document.querySelector('.settings__close-button');


burgerButton.addEventListener('click', function(){
	navigation.classList.toggle('header__navigation-active');
});

document.addEventListener('mousedown', function(e){
  if(e.target.closest('.header') === null){
    navigation.classList.remove('header__navigation-active');
  }
});


/*Кнопка с раскрывающийся информацией*/
document.querySelectorAll('.header__navigation-link').forEach((el) => {
	el.addEventListener('click', () =>{
		let content = el.nextElementSibling;
		if(content.style.maxHeight){
			document.querySelectorAll('.header__navigation-popup').forEach((el) => el.style.maxHeight = null);
		}else{
			document.querySelectorAll('.header__navigation-popup').forEach((el) => el.style.maxHeight = null);
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
});

/*---------*/
const modalOverlay = document.querySelector('.modal-overlay');

settingsButton.addEventListener('click', function(){
	settingsPopup.classList.add('settings__popup-active');
	settingsButton.classList.add('settings-in-active');
	modalOverlay.classList.add('modal-overlay--visible');
	languagePopup.classList.remove('select-languages__popup--active');
});

closeSettingsButton.addEventListener('click', function(){
	settingsPopup.classList.remove('settings__popup-active');
	settingsButton.classList.remove('settings-in-active');
	modalOverlay.classList.remove('modal-overlay--visible');
})

/*Закрытие мадольного окна при нажатии на пустое место*/

modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		settingsPopup.classList.remove('disable-scroll');

		languagePopup.classList.remove('select-languages__popup--active');
		statementPopup.classList.remove('statement-popup--active');
		hideAccessibilityPopup.classList.remove('hide-accessibility--active');

		settingsPopup.classList.remove('settings__popup-active');
		settingsButton.classList.remove('settings-in-active');
		grayBg1.classList.remove('gray-bg-active-1');
		grayBg2.classList.remove('gray-bg-active-2');
		grayBg3.classList.remove('gray-bg-active-3');
	}
});

document.addEventListener('keydown', function (e) {
  if(e.keyCode === 27){
  	settingsPopup.classList.remove('settings__popup-active');
		settingsButton.classList.remove('settings-in-active');
		modalOverlay.classList.remove('modal-overlay--visible');
		settingsPopup.classList.remove('disable-scroll');

		languagePopup.classList.remove('select-languages__popup--active');
		statementPopup.classList.remove('statement-popup--active');
		hideAccessibilityPopup.classList.remove('hide-accessibility--active');

		grayBg1.classList.remove('gray-bg-active-1');
		grayBg2.classList.remove('gray-bg-active-2');
		grayBg3.classList.remove('gray-bg-active-3');
  }
});




/*Зaпрет на скролл*/
// const	body = document.body;

// let disableScroll = function () {
// 	let pagePosition = window.scrollY;
// 	document.body.classList.add('disable-scroll');
// 	document.body.dataset.position = pagePosition;
// 	document.body.style.top = -pagePosition + 'px';
// }

// let enableScroll = function () {
// 	let pagePosition = parseInt(document.body.dataset.position, 10);
// 	document.body.style.top = 'auto';
// 	document.body.classList.remove('disable-scroll');
// 	window.scroll({ top: pagePosition, left: 0 });
// 	document.body.removeAttribute('data-position');
// }

// settingsButton.addEventListener('click', (e) => {
// 	disableScroll();
// 	settingsPopup.classList.add('settings__popup-active');
// 	settingsButton.classList.add('settings-in-active');
// });

// closeSettingsButton.addEventListener('click', (e) => {
// 	enableScroll();
// 	settingsPopup.classList.remove('settings__popup-active');
// 	settingsButton.classList.remove('settings-in-active');
// });
