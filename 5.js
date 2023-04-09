// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

const createNewArr = (arr, a, b) => {
    return arr.filter(item => (item !== a && item !== b));
}

console.log(createNewArr([1, 2, 3, 1, 2], 1, 2))