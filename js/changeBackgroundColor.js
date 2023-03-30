let changeBackGroundColorButtonBlue = document.querySelector('.select-color-bg-blue');
let changeBackGroundColorButtonPurple = document.querySelector('.select-color-bg-purple');
let changeBackGroundColorButtonRed = document.querySelector('.select-color-bg-red');
let changeBackGroundColorButtonOrange = document.querySelector('.select-color-bg-orange');
let changeBackGroundColorButtonTeal = document.querySelector('.select-color-bg-teal');
let changeBackGroundColorButtonGreen = document.querySelector('.select-color-bg-green');
let changeBackGroundColorButtonWhite = document.querySelector('.select-color-bg-white');
let changeBackGroundColorButtonBlack = document.querySelector('.select-color-bg-black');

let changeBg = document.querySelectorAll('.change-bg');

let cencelButtonBg= document.querySelector('.button-cencel__bg-color');

cencelButtonBg.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		if(!el.classList.contains('')){
			el.classList.remove('blue-color-bg');
			el.classList.remove('orange-color-bg');
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})




changeBackGroundColorButtonBlue.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('blue-color-bg');
		if(el.classList.contains('blue-color-bg')){
			el.classList.remove('orange-color-bg');
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})


changeBackGroundColorButtonPurple.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('purple-color-bg');
		if(el.classList.contains('purple-color-bg')){
			el.classList.remove('blue-color-bg');
			el.classList.remove('orange-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})


changeBackGroundColorButtonRed.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('red-color-bg');
		if(el.classList.contains('red-color-bg')){
			el.classList.remove('purple-color-bg');
			el.classList.remove('oorange-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})


changeBackGroundColorButtonOrange.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('orange-color-bg');
		if(el.classList.contains('orange-color-bg')){
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})


changeBackGroundColorButtonTeal.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('teal-color-bg');
		if(el.classList.contains('teal-color-bg')){
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color');
			el.classList.remove('orange-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})

changeBackGroundColorButtonGreen.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('green-color-bg');
		if(el.classList.contains('green-color-bg')){
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('orange-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('white-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})

changeBackGroundColorButtonWhite.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('white-color-bg');
		if(el.classList.contains('white-color-bg')){
			el.classList.remove('purple-color-bg');
			el.classList.remove('red-color-bg');
			el.classList.remove('orange-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('black-color-bg');
		}
	})
})

changeBackGroundColorButtonBlack.addEventListener('click', function (event){
	event.preventDefault();
	changeBg.forEach((el) => {
		el.classList.toggle('black-color-bg');
		if(el.classList.contains('black-color-bg')){
			el.classList.remove('purple-color');
			el.classList.remove('red-color-bg');
			el.classList.remove('orange-color-bg');
			el.classList.remove('teal-color-bg');
			el.classList.remove('green-color-bg');
			el.classList.remove('white-color-bg');
		}
	})
})