const form = document.querySelector('.form');
const jsonOutput = document.querySelector('.json__data');

// задание 5 - формирование JSON-структуры из данных формы и вывод её на экран
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const jsonData = {};
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
        jsonData[key] = value;
    }

    jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
    document.querySelector('.json__header').textContent = 'JSON данные';
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