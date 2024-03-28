const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelectorAll('.btn-close, .btn-primary');

const toggleButton = document.querySelector('#btn-toggle');
const headerContainer = document.querySelector('#header-container');

const switchButton = document.querySelector('#btn-replace');
const orangeButton = document.querySelector('.bg-orange');

// задание 3 - показываем модальное окно при загрузке страницы
window.addEventListener('load', () => {
    modal.style.display = 'block';
});
closeModalBtn.forEach(btn => btn.addEventListener('click', () => {
    modal.style.display = 'none';
}))

// задание 1 - выполняем функцию при нажатии на кнопку
toggleButton.addEventListener('click', () => {
    if (headerContainer.style.display === 'none') {
        headerContainer.style.display = 'block';
    } else {
        headerContainer.style.display = 'none';
    }
})

// задание 2 - меняем блоки во 2-ом ряду местами
switchButton.addEventListener('click', () => orangeButton.classList.toggle('first'));
