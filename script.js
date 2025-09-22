const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const page = document.querySelector('.page');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	page.classList.toggle('blur');
});
