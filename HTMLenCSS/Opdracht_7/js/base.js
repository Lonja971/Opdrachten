//Burger menu more information

const firstMorePopup = document.getElementById('firstMorePopup');
const firstMoreParent = document.getElementById("firstMoreParent");

firstMorePopup.addEventListener('mouseenter', () => {
   firstMoreParent.classList.add('moreOpen');
    firstMorePopup.classList.remove('hovered');
});

firstMoreParent.addEventListener('mouseenter', () => {
   firstMorePopup.classList.remove('hovered');
});

firstMorePopup.addEventListener('mouseleave', () => {
    if (!firstMoreParent.contains(event.relatedTarget)) {
      firstMoreParent.classList.remove('moreOpen');
        firstMorePopup.classList.add('hovered');
    }
});

firstMoreParent.addEventListener('mouseleave', () => {
    if (!firstMorePopup.contains(event.relatedTarget)) {
      firstMoreParent.classList.remove('moreOpen');
    }
});

//----------------language-burger--------------

const menu = document.querySelector('.header__info');
const menuBtn = document.querySelector('.hamburger');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})



	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}