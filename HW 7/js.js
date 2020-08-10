//Task 1
/*
let openTab = window.open("about:blank", "w3schools", "width=300,height=300");

let resized = function () {
	openTab.resizeTo(500, 500);
};
setTimeout(resized, 2000);

let positioned = function () {
	openTab.moveTo(200, 200)
}
setTimeout(positioned, 4000);

let closed = function () {
	openTab.close();
}
setTimeout(closed, 6000);
*/

//Task 2
/*
function changeCSS() {
	let paragraph = document.getElementById('text');
	paragraph.style.color = 'orange';
	paragraph.style.fontSize = '20px';
	paragraph.style.fontFamily = 'Comic Sans MS';
}

let button = document.querySelector('button');

button.addEventListener("click", changeCSS);
*/

//Task 3
/*
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let link = document.getElementById('link');
let body = document.querySelector('body');

let changeToBlue = function () {
	body.style.backgroundColor = 'blue';
}
button1.addEventListener('click', changeToBlue);

let changeToPink = function () {
	body.style.backgroundColor = 'pink';
}
button2.addEventListener('dblclick', changeToPink);

let changeToBrown = function () {
	body.style.backgroundColor = 'brown';
}
let changeToWhite = function () {
	body.style.backgroundColor = 'white';
}
button3.addEventListener('mousedown', changeToBrown);
button3.addEventListener('mouseup', changeToWhite);

let changeToYellow = function () {
	body.style.backgroundColor = 'yellow';
}
link.addEventListener('mouseover', changeToYellow);
link.addEventListener('mouseout', changeToWhite);
*/

//Task 4

// let button = document.getElementById('button');

// let deleteName = function () {
// 	let option = document.querySelector('option');
// 	let select = document.querySelector('select');
// 	select.remove(select.selectedIndex);
// }

// button.addEventListener('focus', deleteName);


//Task 5
/*
let button = document.getElementById('button');
let body = document.querySelector('body')

let pressed = function () {
	body.insertAdjacentHTML('beforeend', '<p>I was pressed!</p>')
}
button.addEventListener('click', pressed);

let hovered = function () {
	body.insertAdjacentHTML('beforeend', '<p>Mouse on me!</p>')
}
button.addEventListener('mouseover', hovered);

let unHovered = function () {
	body.insertAdjacentHTML('beforeend', '<p>Mouse is not on me!</p>')
}
button.addEventListener('mouseout', unHovered);
*/

//Task 6
/*
let startingWindowWidth = window.innerWidth;
let startingWindowHeight = window.innerHeight;
let body = document.querySelector('body');

document.body.innerHTML = `<span>Width: <span> ${startingWindowWidth} <span>, Height: </span> ${startingWindowHeight}`;

let resized = function () {
	if (window.innerHeight !== startingWindowHeight || window.innerWidth !== startingWindowWidth) {
		console.log('Width: ' + window.innerWidth + ', Height: ' + window.innerHeight);
	}
}

window.addEventListener('resize', resized);
*/

//Task 7
let cityArr = {
	'ger': ['Berlin', 'Dresden', 'Munich', 'Stutgard'],
	'usa': ['New York', 'Washington', 'Chikago', 'Boston'],
	'ukr': ['Lviv', 'Kyiv', 'Ternopil', 'Odesa']
}

let countries = document.getElementById('country');
countries.addEventListener('change', citiesCreate);
countries.addEventListener('change', createParagraph);

let cities = document.getElementById('cities');
cities.addEventListener('change', createParagraph);

function citiesCreate() {
	cities.innerHTML = '';
	let selectedCountry = countries.value;
	for (let i = 0; i < cityArr[selectedCountry].length; i++) {
		let citiesOption = document.createElement('option');
		citiesOption.innerHTML = cityArr[selectedCountry][i];
		cities.appendChild(citiesOption);
	}
}

let parag = document.querySelector('p');
function createParagraph() {
	parag.innerHTML = '';
	parag.innerHTML = countries.options[countries.selectedIndex].text + ', '
	+ cities.options[cities.selectedIndex].text;
}
