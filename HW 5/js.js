//Task 1
function propsCount(currentObject) {
	let result = 0;
	for (key in currentObject) {
        if (currentObject.hasOwnProperty(key))
		result++
	}
	return result;
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor);  

//Task 2
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    form: "online",
    groupSize: 10
};
function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}
showProps(mentor);

//Task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name + ' ' + this.surname)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        this.middleName = middleName;
        console.log(this.name + ' ' + this.surname + ' ' + this.middleName)
    }
    showCourse() {
        let now = new Date;
        let currentYear = now.getFullYear();
        return currentYear - this.year;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

//Task 4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        console.log(this.dayRate * this.workingDays)
    }

    _experience = 1.2;

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }

    showSalaryWithExperience() {
        console.log(this.dayRate * this.workingDays * this._experience)
    }    
}

//Task 5
class GeometricFigure {
	getArea() {
	    return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(side, triangleHeight) {
        super();
        this.side = side;
        this.triangleHeight = triangleHeight;
    }
    getArea() {
        return (1/2 * (this.side * this.triangleHeight))
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return 3.14 * (this.radius * this.radius)
    }
}
function handleFigures(figures) {
    result = '';
    totalArea = 0;
    for(let i=0; i < figures.length; i++) {
        if (figures[i] instanceof Object) {
            result += 'Geometric figure: ' + figures[i].toString() + ' - area: ' + figures[i].getArea() + '\n';
            totalArea += figures[i].getArea();
        } else {
            console.log('The data is not valid')
        }
    }
    result += totalArea;
    return result;
}

let figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
