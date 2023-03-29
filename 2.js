// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.

const findNumberOfElem = (arr) => {
    let sum = 0;
    let result = 0;
    for (let i=0; i < arr.length; i++){
        sum += arr[i];
        result = i;
        if (sum > 10) break;
    }
    return result+1;
};

console.log(findNumberOfElem([1, 4, 0.9, 7, 0]));