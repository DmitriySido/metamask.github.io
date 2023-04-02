const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function (event){
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
