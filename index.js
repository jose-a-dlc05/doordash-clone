const inputWrapper = document.querySelector('.input-wrapper');

inputWrapper.addEventListener('click', () => {
	inputWrapper.classList.add('input-active');
});

window.addEventListener('click', (e) => {
	if (!inputWrapper.contains(e.target)) {
		inputWrapper.classList.remove('input-active');
	}
});
