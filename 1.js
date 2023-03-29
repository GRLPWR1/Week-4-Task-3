// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

const createArr = (arrLength) => {
    let newArr = [];
    let str = '';
        for(let i=1; i <= arrLength; i++) {
            str = String(i).repeat(i);
            newArr.push(str);
    };
    return newArr;
}

console.log(createArr(7));