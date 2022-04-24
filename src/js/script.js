const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('active'); 
});

closeElement.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
});

// Скрипт для автоматического подсчета процентов в опыте скиллов

const getPercentExperience = document.querySelectorAll('.experience-item__percent');
const lines = document.querySelectorAll('.experience-item__divider span');

getPercentExperience.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
