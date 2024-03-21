$(document).ready(function() {
    // открываем выпадающий список по клику
    $('.dropdown').click(function() {
        // находим текущий дропдаун
        const dropdownMenu = $(this).find('.dropdown-menu');
        $(dropdownMenu).slideToggle();
    });

    // обновляем значение кнопки при выборе опции
    $('.dropdown-menu .dropdown-item').click(function() {
        // получаем текст выбранной опции
        const selectedOption = $(this).text();
        // получаем родителя дропдауна
        const dropdownParent = $(this).closest('.dropdown');
        // устанавливаем текст кнопки равным выбранной опции
        dropdownParent.find('.dropdown-toggle').text(selectedOption);
    });

    $('.form').submit(function(e) {
        // отменяем стандартное поведение формы
        e.preventDefault();
        const form = $(this);

        // задание 5 - формируем JSON из данных формы, выводим на экран под формой
        const formData = {};
         // обрабатываем каждый дропдаун
         $('.dropdown').each(function(index) {
            // получаем текст выбранной опции (из кнопки) и убираем символы новой строки "\n"
            const selectedOption = $(this).find('.dropdown-toggle').text().trim();

            // проверяем, что значение !== дефолтному значению и было выбрано
            if (selectedOption !== "Dropdown " + (index + 1) && selectedOption !== "") { 
                formData['dropdown' + (index + 1)] = selectedOption; // передаём выбранное значение в formData
            } else {
                formData['dropdown' + (index + 1)] = ""; // если значение дефолтное или "", ничего не передаём в json
            }
        });

        // обрабатываем каждый инпут
        $('.form-control').each(function(index) {
            const inputValue = $(this).val().trim();
            formData['input' + (index + 1)] = inputValue;
        });

        const jsonData = JSON.stringify(formData);

        // проверяем валидность инпутов формы
        if (form[0].checkValidity()) {
            console.log('Валидация прошла успешно');
            form.addClass('was-validated');
            $('.json__header').text('JSON данные');
            $('#jsonOutput').text(jsonData);
        } else {
            form.addClass('was-validated');
        }
    });
})

// задание 6 - отправляем GET-запрос с полученными данными (примерная схема)
// const url = 'url';
// try {
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: jsonData
//     });
//     const data = await response.json();
//     alert(data);
// } catch (err) {
//     console.error('Произошла ошибка:', err);
// }