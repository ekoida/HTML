/**
 * Задача
 * 
 * Написать функцию, которая будет проверять наличие свойсва в массиве.
 * Если свойство найдено, то необходимо вычислить интекс, под которым находится свойство
 * сохранить его в переменную и вернутю
 * 
 * название функции - checkValueInArray_2
 * 
 * принимает два параметра array(массив в котором будет вестись поиск), entry (искомое значение)
 * 
 * Возвращает при нахождении свойства:
 *   * `Entry ${entry} exists in array on position ${position};`
 * Возвращает если свойство не найдено:
 *   * `Entry ${entry} does not exist in array.`
 * 
 * использовать методы
 *   - includes() @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 *   - indexOf() @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */


// написать функцию тут



// тут проверка
let isExist = checkValueInArray_2([1, 3,4, "something"], 3)

console.log(isExist)

