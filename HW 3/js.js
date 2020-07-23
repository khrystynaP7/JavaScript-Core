//Task 1
let arr = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
    result *= arr[i]; 
}
console.log(result);

let arr = [2, 3, 4, 5];
let result = 1;
let i = 0;
while (i < arr.length) {
    result *= arr[i];
    i++;
}
console.log(result);

//Task 2
for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
}

//Task 3
let arr = [];
function randArray (k) {
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500))
    }
    return arr;
}
randArray(4)

//Task 4
function raiseToDegree(a = prompt('Please enter value a'), b = prompt('Please enter value b')) {
    let aInteger = +a;
    let bInteger = +b;
    if (Number.isInteger(aInteger) && Number.isInteger(bInteger)) {
        return a ** b;
    } else {
        alert ('The numbers are not integers')
    }
}
raiseToDegree()

//Task 5
function findMin() {
    let result = arguments[0]
    for(let i = 1; i < arguments.length; i++) {
        if (arguments[i] < result) {
            result = arguments[i];
        }
    }
    return result;
}
findMin(12, 14, 4, -4, 0.2); // => -4

//Task 6
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else if (arr[i] === arr[j]) {
                return false;
            } else {
                continue;
            }
        }
    }
    return true;
}
findUnique([1, 2, 3, 5, 3]);  // => false

//Task 7
function lastElem (arr, num) {
    let newArr = [];
    if (num >= arr.length) {
        return arr;
    } else if (num > 1) {
        for (let i = 0; i < num; i++) {
            newArr.push(arr.pop());
        }
    } else {
        let result = arr.pop();
        return result;
    }
    return newArr;
}
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

//Task 8
function turnToUpperCase (str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] === ' ') {   
            result += str[i];
            result += str[i+1].toUpperCase();
            i++;
        } else {
            result += str[i]
        }
    }
    return result;
}
turnToUpperCase('i love java script')
