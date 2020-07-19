//Task 1
let x = 1;
let y = 2;

res1 = String(x) + 2;
res2 = true + String(y);
res3 = Boolean(x);
res4 = parseInt (x / 0);

//Task 2
let number = prompt ('Enter a number');
if (number % 7 === 0) {
    console.log('Number is aliquot to 7')
} else if (number > 0 && number % 2 === 0) {
    console.log( 'Number is even')
}

//Task 3
let arr = [];
arr.push(1);
arr.push('2');
arr.push(true);
arr.push(null);
console.log(arr.length)
let userData = prompt('Please enter data');
arr.push(userData);
console.log(arr[4]);
arr.shift();
console.log(arr);

//Task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities.join('*')

//Task 5
let isAdult = prompt('How old are you?');
if (isAdult >= 18) {
    console.log('You are an adult.')
} else {
    console.log('You are too young');
}

//Task 6
let a = prompt('Please enter the first side');
let b = prompt('Please enter the second side');
let c = prompt('Please enter the third side');

if (a <= 0 || b <= 0 || c <= 0) {
    console.log('The data is invalid')
} else {
    let p = (Number(a) + Number(b) + Number(c)) / 2;
    let square = (p*(p - Number(a)) * (p - Number(b)) * (p - Number(c))) ** (1/2);
    console.log(p)
    console.log(square.toFixed(3));
}
if ((c ** 2 === a ** 2 + b ** 2) || (b ** 2 === a ** 2 + c ** 2) || (a ** 2 === c ** 2 + b ** 2)) {
    console.log ('The triangle is right')
} else {
    console.log ('The triangle is not right')
}

//Task 7
let now = new Date;
let hours = now.getHours();

if (hours >= 23 && hours < 5) {
    console.log('Good night!')
} else if (hours >= 5 && hours < 11) {
    console.log('Good morning!')
} else if (hours >= 11 && hours < 17) {
    console.log('Good afternoon')
} else if (hours >= 17 && hours < 23) {
   console.log ('Good evening')
}

switch (hours) {
    case  (hours >= 23 &&  hours < 5):
    console.log('Good night!');
    break;
    case (hours >= 5 && hours < 11):
    console.log('Good morning!');
    break;
    case (hours >= 11 && hours < 17):
    console.log('Good afternoon');
    break;
    case (hours >= 17 && hours < 23):
    console.log('Good evening');
    break;
}