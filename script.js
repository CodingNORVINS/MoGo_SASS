const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const page = document.querySelector('.page');
const menuLinks = menuList.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	menuList.classList.toggle('active');
	page.classList.toggle('blur');
	menuLinks.forEach(link => link.classList.toggle('active'));
	document.body.style.overflow = menu.classList.contains('active')
		? 'hidden'
		: '';
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('active');
		menu.classList.remove('active');
		menuList.classList.remove('active');
		page.classList.remove('blur');
		menuLinks.forEach(l => l.classList.remove('active'));
		document.body.style.overflow = '';
	});
});
