let changeColorButtonBlue = document.querySelector('.select-color__all-text-blue');
let changeColorButtonPurple = document.querySelector('.select-color__all-text-purple');
let changeColorButtonRed = document.querySelector('.select-color__all-text-red');
let changeColorButtonOrange = document.querySelector('.select-color__all-text-orange');
let changeColorButtonTeal = document.querySelector('.select-color__all-text-teal');
let changeColorButtonGreen = document.querySelector('.select-color__all-text-green');
let changeColorButtonWhite = document.querySelector('.select-color__all-text-white');
let changeColorButtonBlack = document.querySelector('.select-color__all-text-black');

let changeText = document.querySelectorAll('.change-color');

let cencelButton = document.querySelector('.button-cencel__text-color');

/*Кнопка сброса цвета текста*/
cencelButton.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		if(!el.classList.contains('')){
			el.classList.remove('blue-color');
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

/*------------------*/
changeColorButtonBlue.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('blue-color');
		if(el.classList.contains('blue-color')){
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

changeColorButtonPurple.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('purple-color');
		if(el.classList.contains('purple-color')){
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


changeColorButtonRed.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('red-color');
		if(el.classList.contains('red-color')){
			el.classList.remove('purple-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})


changeColorButtonOrange.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('orange-color');
		if(el.classList.contains('orange-color')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})


changeColorButtonTeal.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('teal-color');
		if(el.classList.contains('teal-color')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonGreen.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('green-color');
		if(el.classList.contains('green-color')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('white-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonWhite.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('white-color');
		if(el.classList.contains('white-color')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('black-color');
		}
	})
})

changeColorButtonBlack.addEventListener('click', function (event){
	event.preventDefault();
	changeText.forEach((el) => {
		el.classList.toggle('black-color');
		if(el.classList.contains('black-color')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color');
			el.classList.remove('orange-color');
			el.classList.remove('teal-color');
			el.classList.remove('green-color');
			el.classList.remove('white-color');
		}
	})
})


/*--------------------*/