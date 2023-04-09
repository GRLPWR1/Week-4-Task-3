// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const removeDuplicates = (arr) => {
    return arr.filter((el, i) => (arr.indexOf(el) === i))
}

console.log(removeDuplicates([1, 2, 3, 1, 2]));
console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 4, 8, 3, 2]));

// ПЕРВОНАЧАЛЬНОЕ РЕШЕНИЕ:
// const removeDuplicates = (arr) => {
//     arr.sort((a, b) => (a - b));
//     console.log(arr)
//     for (let i = 0; i< arr.length; i++){
//         if (arr[i] === arr[i+1]) {
//             arr.splice((i+1), 1) // не работает с массивами, где значения повторяются больше 1 раза.
//         }
//     }
//     return arr;
// }

// console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 4, 8, 3, 2]));