// дожидаемся загрузки всего документа и после этого обращаемся к элементам
$(document).ready(function() {
    // задание 3 - показываем модальное окно при загрузке страницы
    $('.modal').show();
    // закрываем модальное окно
    $('.btn-close, .btn-primary').click(function() {
        $('.modal').fadeOut();
    });
    
    // задание 1 - выполняем функцию при нажатии на кнопку
    $('#btn-toggle').click(function() {
        $('.display-1').slideToggle();
    });

    // задание 2 - меняем блоки во 2-ом ряду местами
    $('#btn-replace').click(function() {
        // если слева от красного блока есть оранжевый
        if ($('.bg-red').next().hasClass('bg-orange')) {
            // меняем их местами
            $('.bg-red').insertAfter($('.bg-orange'));
        } else {
            // и снова меняем местами по клику
            $('.bg-orange').insertAfter($('.bg-red'));
        }
    });

    
    // $(window).on(function)
});