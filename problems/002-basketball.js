/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
// function getWinner(points) {
//     return undefined;
// }

// function getWinner(points) {
//     const array = points;
//     const firstTeamCount = array.map((item) => item.slice(0, 2));
//     const secondTeamCount = array.map((item) => item.slice(3, 5));

//     let firstSum = 0;
//     firstTeamCount.forEach((item) => {
//         firstSum += +item;
//     });

//     let secondSum = 0;
//     secondTeamCount.forEach((item) => {
//         secondSum += +item;
//     });
//     console.log(firstSum, secondSum);

//     if (firstSum == secondSum) {
//         return undefined;
//     }
//     return firstSum > secondSum ? 1 : 2;
// }

function getWinner(points) {
    let sumA = 0;
    let sumB = 0;

    points.forEach((result) => {
        const [resultA, resultB] = result.split("-");
        sumA += Number.parseInt(resultA);
        sumB += Number.parseInt(resultB);
    });

    if (sumA === sumB) return undefined;
    return sumA > sumB ? 1 : 2;
}

module.exports = getWinner;
