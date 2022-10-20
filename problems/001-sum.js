/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */

// function sum(param) {
//     if (param > 0) {
//         let sum = 0;
//         for (i = 1; i <= param; i++) {
//             sum += i;
//         }
//         return sum;
//     }
//     return 1;
// }

function sum(param) {
    if (param < 1) return 1;
    let sum = 0;
    for (let i = 1; i <= param; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sum;
