//Task 1
function testThrow(exception) {
    try {
        throw exception;
    } catch (error) {
        console.log('Cought: ' + error)
    }
}
testThrow('Test');

//Task 2
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error ('Please enter valid data')
    } else {
        return 1/2 * (width * height)
    }
}
calcRectangleArea('2', 3)

//Task 3
function checkAge() {
    let age = prompt ('Please enter your age');
    let workingAge = +age;
    if (age === '') {
        throw new Error ('The field is empty! Please enter your age')
    } else if (typeof workingAge !== 'number' || isNaN(workingAge)) {
    
        throw new Error ('The data is not a number')
    } else if (workingAge < 15) {
        throw new Error ('Your age is under 14 years')
    } 
    return 'The film has been accessed';
}
try {
    let result = checkAge();
    console.log(result);
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

//Task 4
function MonthException(message) {
    console.log ('MonthException');
};
function showMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let theResultMonth = new Date();
    theResultMonth.setMonth(month);
    let finalMonth = monthNames[theResultMonth.getMonth()-1];
    console.log (finalMonth);
    if (+month !== 'number') {
        throw new Error ('Incorrect month number');
    }
    return finalMonth
}
try {
    let result = showMonthName(month);
    console.log(result);
} catch (exception) {
    MonthException();
    console.log (exception.message)
}

//Task 4
function MonthException() {
    this.name = 'MonthException';
};

function showMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let theResultMonth = new Date();

    theResultMonth.setMonth(month);

    let finalMonth = monthNames[theResultMonth.getMonth() - 1];

    if (month > 12) {
        throw new Error ('Incorrect month number');
    } else {
        return finalMonth
    }
}
try {
    let result = showMonthName(month);
    console.log(result);
    } catch (exception) {
    let newMessage = new MonthException();
    console.log (newMessage.name + ' ' + exception.message)
}

//Task 5
let resultArr = [];

function Id(idNumber) {
    this.id = idNumber;
}

function showUser(id) {
    if (id < 0) {
        throw new Error ('ID must not be negative: ' + id);
    }
    return new Id(id);
}
function showUsers(ids) {
    for (let i = 0; i < ids.length; i++) {
        try {
            let result = showUser(ids[i]);
            resultArr.push(showUser(ids[i]))
        } catch (exception) {
            console.log(exception.message)
        }
    }
    console.log(resultArr);
}
showUsers([7, -12, 44, 22])