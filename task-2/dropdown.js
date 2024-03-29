const form = document.querySelector('.form');

// задание 5 - формирование JSON-структуры из данных формы и вывод её на экран
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const jsonOutput = document.querySelector('.json__data');
    const jsonData = {};
    const formData = new FormData(form);

    for (const [key, value] of formData) {
        jsonData[key] = value;
    }

    jsonOutput.textContent = JSON.stringify(jsonData);

    // задание 6 - отправляем GET-запрос с полученными данными
    const currentUrl = window.location.href;
    const params = new URLSearchParams(jsonData).toString();
    const baseUrl = `${currentUrl}?${params}`; // к текущему url добавляем данные из формы
    try {
        const res = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/javascript',
                Accept: 'application/javascript'
            },
        });
        if (res.ok) {
            const data = await res.text();
            alert(JSON.stringify(jsonData));
        } else {
            alert('Ошибка: ' + res.statusText);
        }
    } catch (err) {
        console.error('Произошла ошибка:', err);
    }
});
