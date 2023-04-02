let searchInput = document.querySelector('.input-search');
let loopIcon = document.querySelector('.input-icon');
let arrow = document.querySelector('.input-drow-arrow');
let inputWrapper = document.querySelector('.input__wrapper');

searchInput.onblur = function() {
	loopIcon.src = "pictures/icons/loop-active.png";
	arrow.classList.remove('input-drow-arrow-active');
	inputWrapper.classList.remove('input__wrapper-active')
};

searchInput.onfocus = function() {
	loopIcon.src = "pictures/icons/loop.png";
	arrow.classList.add('input-drow-arrow-active');
	inputWrapper.classList.add('input__wrapper-active')
};


/*Кнопка с раскрывающийся информацией*/
document.querySelectorAll('.accessibility__wrapper-item').forEach((el) => {
	el.addEventListener('click', () =>{
		let content = el.nextElementSibling;
		if(content.style.maxHeight){
			document.querySelectorAll('.accessibility-profil__customize__item-text').forEach((el) => el.style.maxHeight = null);
		}else{
			document.querySelectorAll('.accessibility-profil__customize__item-text').forEach((el) => el.style.maxHeight = null);
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
});

/*complete*/
const complete = document.querySelector('.complete');
const checkMark = complete.querySelector('.complete__check-mark');
const circle = complete.querySelector('.complete__circle')

const switchButton = document.querySelectorAll('.fecit');

switchButton.forEach((el) => {
	el.addEventListener('click', function(){
			complete.classList.toggle('complete--active');
			circle.classList.toggle('complete__circle--active');
			checkMark.classList.toggle('complete__check-mark--active');

		setTimeout(()=>{
			complete.classList.remove('complete--active');
			circle.classList.remove('complete__circle--active');
			checkMark.classList.remove('complete__check-mark--active');
		}, 600)
	})
})


/*Language Popup*/
const closeLanguagePopup = document.querySelector('.close__select-language');
const openLanguagePopup = document.querySelector('.settings__select-languages');
const langyageSell = document.querySelectorAll('.language-cell');

const languagePopup = document.querySelector('.select-languages__popup');	
const grayBg1 = document.querySelector('.gray-bg-1');

openLanguagePopup.addEventListener('click', () =>{
	languagePopup.classList.add('select-languages__popup--active');
	grayBg1.classList.add('gray-bg-active-1');
	disableScroll();
});

closeLanguagePopup.addEventListener('click', () =>{
	languagePopup.classList.remove('select-languages__popup--active');
	grayBg1.classList.remove('gray-bg-active-1');
	enableScroll();
});

langyageSell.forEach((el) => {
	el.addEventListener('click', function(){
		document.location.reload()
	})
})




/*Statement Popup*/
const statementPopup = document.querySelector('.statement-popup');
const statementButtonOpen = document.querySelector('.statement-button');
const statementButtonClose = document.querySelector('.close__statement-popup');
const grayBg2 = document.querySelector('.gray-bg-2');

statementButtonOpen.addEventListener('click', () =>{
	statementPopup.classList.add('statement-popup--active');
	grayBg2.classList.add('gray-bg-active-2');
	disableScroll();
});
	
statementButtonClose.addEventListener('click', () =>{
	statementPopup.classList.remove('statement-popup--active');
	grayBg2.classList.remove('gray-bg-active-2');
	enableScroll();
});

/*Hide Accessibility*/
const hideAccessibilityOpen = document.querySelector('.interface-button');
const hideAccessibilityClose = document.querySelector('.hide-accessibility-close__popup');
const hideAccessibilityPopup = document.querySelector('.hide-accessibility');
const grayBg3 = document.querySelector('.gray-bg-3');

hideAccessibilityOpen.addEventListener('click', () =>{
	hideAccessibilityPopup.classList.add('hide-accessibility--active');
	grayBg3.classList.add('gray-bg-active-3');
	disableScroll();
});
	
hideAccessibilityClose.addEventListener('click', () =>{
	hideAccessibilityPopup.classList.remove('hide-accessibility--active');
	grayBg3.classList.remove('gray-bg-active-3');
	enableScroll();
});


/*Зaпрет на скролл*/
let disableScroll = function () {
	let pagePosition = window.scrollY;
	settingsPopup.classList.add('disable-scroll');
	settingsPopup.dataset.position = pagePosition;
	settingsPopup.style.top = -pagePosition + 'px' + '50px';
}

let enableScroll = function () {
	let pagePosition = parseInt(settingsPopup.dataset.position, 10);
	
	settingsPopup.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	settingsPopup.removeAttribute('data-position');
}

/*Video*/

let video = document.querySelector('.video');
const circles = document.querySelector('.video-circle');
const triangle = document.querySelector('.video-triangle');

video.addEventListener('click', function(){
	video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/YVgfHZMFFFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

	if(video.classList.contains('ready')){
		return;
	}

	video.classList.add('ready');
	circles.style.display = "none";
	triangle.style.display = "none";

})