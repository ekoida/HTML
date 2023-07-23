/**
 * Задача
 * 
 * Написать функцию, которая будет проверять если 
 * значение присутсвует в массиве и его индекс равен 0 (то есть значение первое по списку).
 *  - Если значение найдено на позиции 0 - тo вернуть значение с позиции 0 
 *  - Если значение не найдено на позиции 0 - то:
 *  1 - вырезать страрое значение с позиции 0
 *  2 - вставить новое значение в самое начало (на позицию 0) 
 *  3 - вернуть первое значение из массива (позиция 0)
 * 
 * 
 * 1 - название функции - getOrPutName
 * 2 - параметр, который функция принимает - name
 * 
 * для работы с массивом использовать следующие методы:
 * 1 - includes() // ищет значение в массиве, возвращает true\false @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * 2 - indexOf() // возвращает индекс значения, если найдео или -1 если не найдено @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * 3 - shift() // вырезает первый элемент из массива и возвращает его @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * 4 - unshifht() // вставляет новый элемент в начало массива и возвращает новую длинну массива @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */

const userProperties = ["Jhon", "Doe", 24, 1987]

function getOrPutName(name) {
    if (/*проверить что значение присутствует в массиве */ && /* проверить что значение присутсвует в начале масива, то есть его индекс равет 0*/) {
        return userProperties[0]
    }
    // вырезать старое значение
    // вставить новое значение в начало

    return userProperties[0]
}

// начальный массив
console.log(userProperties)

const nameOrLength = getOrPutName("Jerrard")


//новое имя
console.log(nameOrLength)

// обновленный массив
console.log(userProperties)
