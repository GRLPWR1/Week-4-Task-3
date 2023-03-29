// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const clearNewArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof(arr[i]));
        console.log(Boolean(arr[i]));
        if (Boolean(arr[i]) === false) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

console.log(clearNewArr([0, 1, false, 2, undefined, '', 3, null]));