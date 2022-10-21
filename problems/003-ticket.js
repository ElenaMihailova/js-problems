/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */

// const param = "005212";
// const arrayTicket = Array.from(param).map((i) => Number(i));
// const firstPart = arrayTicket
//     .slice(0, 3)
//     .map((i) => (s += i), (s = 0))
//     .reverse();
// const secondtPart = arrayTicket
//     .slice(3)
//     .map((i) => (s += i), (s = 0))
//     .reverse();

// function test() {
//     if (!firstPart[0] == secondtPart[0]) {
//         return false;
//     }
//     return true;
// }
// test();

function checkTicket(number) {
    const arrayTicket = Array.from(number).map((i) => Number(i));
    const firstPart = arrayTicket
        .slice(0, 3)
        .map((i) => (s += i), (s = 0))
        .reverse();
    const secondtPart = arrayTicket
        .slice(3)
        .map((i) => (s += i), (s = 0))
        .reverse();

    if (firstPart[0] == secondtPart[0]) {
        return true;
    }
    return false;
}

module.exports = checkTicket;
