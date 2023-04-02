let changeColorButtonBlueTitle = document.querySelector('.select-color-title-blue');
let changeColorButtonPurpleTitle = document.querySelector('.select-color-title-purple');
let changeColorButtonRedTitle = document.querySelector('.select-color-title-red');
let changeColorButtonOrangeTitle = document.querySelector('.select-color-title-orange');
let changeColorButtonTealTitle = document.querySelector('.select-color-title-teal');
let changeColorButtonGreenTitle = document.querySelector('.select-color-title-green');
let changeColorButtonWhiteTitle = document.querySelector('.select-color-title-white');
let changeColorButtonBlackTitle = document.querySelector('.select-color-title-black');

let changeColorTitle = document.querySelectorAll('.change-color-title');

let cencelButtonTitle = document.querySelector('.button-cencel__text-color-title');

/*Кнопка сброса цвета текста*/
cencelButtonTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		if(!el.classList.contains('')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');
		}
	})
})

/*------------------*/
changeColorButtonBlueTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('blue-color-title');
		if(el.classList.contains('blue-color-title')){
			el.classList.remove('orange-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('orange-color');
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonPurpleTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('purple-color-title');
		if(el.classList.contains('purple-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('blue-color');
			el.classList.remove('orange-color');
			el.classList.remove('red-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})


changeColorButtonRedTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('red-color-title');
		if(el.classList.contains('red-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('purple-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})


changeColorButtonOrangeTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('orange-color-title');
		if(el.classList.contains('orange-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})


changeColorButtonTealTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('teal-color-title');
		if(el.classList.contains('teal-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonGreenTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('green-color-title');
		if(el.classList.contains('green-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('white-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonWhiteTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('white-color-title');
		if(el.classList.contains('white-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('black-color-title');

			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonBlackTitle.addEventListener('click', function (event){
	event.preventDefault();
	changeColorTitle.forEach((el) => {
		el.classList.toggle('black-color-title');
		if(el.classList.contains('black-color-title')){
			el.classList.remove('blue-color-title');
			el.classList.remove('purple-color-title');
			el.classList.remove('red-color-title');
			el.classList.remove('orange-color-title');
			el.classList.remove('teal-color-title');
			el.classList.remove('green-color-title');
			el.classList.remove('white-color-title');
		}
	})
})