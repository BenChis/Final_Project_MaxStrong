const menuIconOpen = document.querySelector('.header__menu-icon');

const menuIconClose = document.querySelector('.mobile-close__icon');

const mobileNav = document.querySelector('.nav-mobile');

// Mobile Navigation

console.log(menuIconOpen, menuIconClose, mobileNav);

menuIconOpen.addEventListener('click', () =>
  mobileNav.classList.remove('nav-mobile--hidden')
);

menuIconClose.addEventListener('click', () =>
  mobileNav.classList.add('nav-mobile--hidden')
);
