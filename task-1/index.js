const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelectorAll('.btn-close, .btn-primary');

const toggleButton = document.querySelector('#btn-toggle');
const headerContainer = document.querySelector('#header-container');

const switchButton = document.querySelector('#btn-replace');
const orangeButton = document.querySelector('.bg-orange');

const toggleModal = () => modal.classList.toggle('modal_open');

// задание 3 - показываем модальное окно при загрузке страницы
window.addEventListener('load', () => toggleModal());
closeModalBtn.forEach(btn => btn.addEventListener('click', () => toggleModal()))

// задание 1 - выполняем функцию при нажатии на кнопку
toggleButton.addEventListener('click', () => headerContainer.classList.toggle('header-container_closed'))

// задание 2 - меняем блоки во 2-ом ряду местами
switchButton.addEventListener('click', () => orangeButton.classList.toggle('first'));
