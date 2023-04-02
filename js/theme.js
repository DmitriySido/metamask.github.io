let page = document.querySelector('html');
let switchTheme = document.querySelector('.switchInput');
let firstIllustration = document.querySelector('.apps__pictures')


switchTheme.addEventListener('change', function(evt){
	evt.preventDefault();
	if(!page.classList.contains('light')){
		page.classList.toggle('dark');
		for (let image of document.querySelectorAll(`img[id='logo']`)){
			image.src = 'pictures/logo/full-metamask-logo-dark.png';
		}
		firstIllustration.src = "https://images.ctfassets.net/9sy2a0egs6zh/7wNAiVbgssyrL7UY3xd4FY/2a15d3f50b85a34e8443c08c49579191/home-hero-dark.png?w=1920&q=100&fm=webp";

	}

	if(!page.classList.contains('dark')){
		for (let image of document.querySelectorAll(`img[id='logo']`)){
			image.src = 'pictures/logo/full-metamask-logo.png';
		}
		firstIllustration.src="https://images.ctfassets.net/9sy2a0egs6zh/5n9UZwFnPyMTphfiT6SDMv/67001204dd8d16fa99070e902c512b9c/home-hero.png?w=1920&q=100&fm=webp"
	}
})