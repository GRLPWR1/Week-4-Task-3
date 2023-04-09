// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const clearMyArr = (arr) => {
    newArr = arr.filter(item => (Boolean(item) == true));
    return newArr;
};

console.log(clearMyArr([0, 1, false, 2, undefined, '', 3, null, '']));

// КАК Я ДЕЛАЛА РЕФАКТОРИНГ
// сначала решала через цикл и splice:
// const clearMyArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (Boolean(arr[i]) === false) {
//             arr.splice(i, 1)
//         }
//     }    
//     return arr;
// };

// В итоге пустая строка не удалялась, если шла после другого falsy значения. Удалялась, только если ей предшествовало truthy значение. Решила отобрать только truthy элементы и возвращать их. Для этого мне нужен был метод, который не переписывает исходный массив, а возвращает новый. Взяла метод filter, поняла, что могу обойтись без цикла.