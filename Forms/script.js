
// тут у нас будут все объявления переменных
const form = document.querySelector('form');
const article = document.querySelector('article')
const buttonSubmit = document.querySelector('[type="submit"]')
const nameInput = document.querySelector('[name="first_name"]')
const colorInput = document.querySelector('[name="color"]')

// Находим все элементы у которых есть аттрибут "name" и он равен "gender"
const genderInput = document.querySelectorAll('[name="gender"]')


// При событии submit мы говорим браузеру предотвратить поведение формы по умолчанию

/** 
 * Вопрос:
 * Каким является поведение формы по умолчанию при нажатии на кнопку submit?
 * напишите ответ ниже.
 * 
 * Ответ: - 
 * */ 
form.onsubmit = function (event){
    event.preventDefault();
}

// Добавляем обработчик события для поля ввода имени
nameInput.addEventListener('blur', function(event) {
    // Создаем несколько тегов для отображения нашей анкеты

    // Параграф, как оболочку для генерируемых данных
    const p = document.createElement('p')
    p.classList.add('list-item')

    // два элемента-оболочки, для удобства стилизации
    const spanforlabel = document.createElement('span')
    const spanforValue = document.createElement('span')

    // записывем данные в элементы
    spanforlabel.textContent = "Имя:"
    spanforValue.textContent = event.target.value

    // добовляем элементы в дерево элементов, начиная с самой большой вложенности
    p.appendChild(spanforlabel)
    p.appendChild(spanforValue)

    // добовляем элеметы к существуюшему узлу в дереве
    article.appendChild(p)
})

// Тут мы используем цикл, так как querySelectorAll находит все
// элементы на странице по заданному критерию

/**
 * Вопрос:
 * Какие ещё виды циклов есть в javascript 
 * 
 * перечислить
 * 
 * Ответ: 
 * 
 */
genderInput.forEach(input => {
    input.addEventListener('click', (event) => {
            console.log(event.target.value)
    })
})

/**
 * Задание
 * 1 - добавить обработчики событий на каждре поле ввода
 * 2 - отобразить результат в правой стороне страницы
 * 
 * 3 - для поля выбора цвета создайте квадратик с заливкой выбраным цветом
 * 4 - для чекбоксов исплользовать аналогичный код как и для радио кнопок
 * 5 - при клике на кнопку Сбросить - очистить тег <article> от всего контента
 */
