const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const close = document.createElement('li');
close.className = 'close';
const closeIcon = document.createElement('img');
closeIcon.className = 'close-icon';
closeIcon.src = './img/Iconclose-icon.png';
close.append(closeIcon);
const menuItem = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu-mobile');
  menu.append(close);
});

close.addEventListener('click', () => {
  menu.classList.remove('menu-mobile');
  closeIcon.remove();
});

menuItem.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.remove('menu-mobile');
  });
});
