// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const clearNewArr = (arr) => {
    newArr = arr.filter(item => (Boolean(item) == true));
    return newArr;
};

console.log(clearNewArr([0, 1, false, 2, undefined, '', 3, null, '']));