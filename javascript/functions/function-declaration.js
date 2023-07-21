/**
 * Задача 
 * Написать функцию, которая будет высчитывать площадь
 * 
 * Имя функции calcSquare
 * 
 * она принимает два параметра
 *  1 - width
 *  2 - height
 * 
 * и возвращает строку: `Square is: ${<тут должна быть переменная, в которую записан результат вычисления площади>}`
 */

// писать функцию тут
function calcSquare(width, height){
   const calcSquare = width * height;

    // тут вычисления
 retrun `Square is: ${calcSquare}`
}
//


const resultForCalcSquare = calcSquare(45/*width*/, 34/*height*/)
console.log(resultForCalcSquare)


/**
 * Задача
 * Написать функцию, которая будет рассчитывать скорость 
 * в зависимости от пройденого расстояния и времени
 * 
 * Имя функции speed
 * 
 * Она принимает два параметра:
 *  1 - distance
 *  2 - time
 * 
 * В теле фунции устрановить допустимые пределы для минимальной и максимальной скорости
 *  1 - переменная для минимальной скорости пусть называется: minAllowedKilomitersPerHour, и равняется 45
 *  2 - переменная для максимальной скорости пусть называется: maxAllowedKilometersPerHour, и равняется 140
 * 
 * Надо проверить ели скорость не превышает разрешенную, и если превышает вернуть строку `Вы двигаетесь слишком быстро, ваша скорость: ${вычесленаая скорость}`
 * Если скорость слишком низкая - вернуть строку `Вы двигаетесь слишком медленно, ваша скорость: ${вычесленная скорость}`
 * Если же скорость не превышена - вернуть строку `Вы двигаетесь нормально, ваша скорость: ${вычесленная скорость}`
 */

// писать функцию тут
 function speed (distance, time){
   const minAllowedKilomitersPerHour = 45;
   const maxAllowedKilometersPerHour = 140;

   const currentSpeed = distance/ time;
   if (currentSpeed >= maxAllowedKilometersPerHour){
      return `Вы двигаетесь слишком быстро, ваша скорость: ${currentSpeed}`
   } else if (currentSpeed<=minAllowedKilomitersPerHour){
      return `Вы двигаетесь слишком медленно, ваша скорость: ${currentSpeed}`
   }else (currentSpeed >= minAllowedKilomitersPerHour && <= maxAllowedKilometersPerHour)
    return `Вы двигаетесь нормально, ваша скорость: ${currentSpeed}`
 }
//
/**
 * тут вызов функции, входные параметры можно менять как угодно
 */
const calculatedSpeed = speed(450/*distance*/, 34/*hours*/)
console.log(calculatedSpeed)


/**
 * Задача
 * Написать серию функций, которые будут расчитывать скидку исходя из общей цены и процена скидки
 * 
 * Первая функция - calculateDiscountAmmount
 * принимает два параметра
 *  1- totalPrice
 *  2 - discount
 * 
 * И возвращает число - totalPrice умноженный на процент скидки
 * 
 * Вторая функция - caluclateDiscountedPrise
 * принимает два парометра
 *  1 - totalPrice
 *  2 - результат вычислений calculateDiscountAmmount
 * 
 * Возвращает общую цену после применения скидки
 */

// -> тут написать calculateDiscountAmmount функцию
function calculateDiscountAmmount (totalPrice, discount) {
   const calculateDiscount = totalPrice * discount;
   return calculateDiscount;
}


// -> тут написать caluclateDiscountedPrise функцию
function caluclateDiscountedPrise (totalPrice, calculateDiscount) {
 const discoutnedPrice = totalPrice - calculateDiscount;
 return discoutnedPrice;
}



function calculateDiscount (totalPrice, discount) {
   const discountAmmount = calculateDiscountAmmount(totalPrice, discount)
   const discoutnedPrice = caluclateDiscountedPrise(totalPrice, discountAmmount)
   
   return discoutnedPrice
}
