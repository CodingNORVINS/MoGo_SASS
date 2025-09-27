const menuBtn = document.querySelector('.burger-menu__button');
const menu = document.querySelector('.burger-menu');
const page = document.querySelector('.page');
const close = document.querySelector('.close-burger-menu');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	page.classList.toggle('blur');
});

close.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	page.classList.toggle('blur');
});
