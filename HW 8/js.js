//Task 1
// function upperCase(text) {
// 	regExp = /^[A-Z]/;
// 	if (regExp.test(text)) {
// 		console.log("String's starts with uppercase character");
// 	} else {
// 		console.log("String's not starts with uppercase character");
// 	}
// }
// upperCase("regExp");
// upperCase("RegExp");

//Task 2
// function checkEmail (str) {
//     let regExp = /\w+@\w+\.\w+/   
//     if (regExp.test(str)) {
//         return true;
//     } else {
//         return false;
//     }
// };
// checkEmail("Qmail2@gmail.com")

//Task 3
// let regExp = /d{1}b+d{1}/ig;
// let result = 'cdbBdbsbz'.match(regExp);
// let resultFinal;
// resultFinal = result[0].match(/b+|d{1}$/ig);
// resultFinal.unshift(result[0]);

//Task 4
// let firstWord = /^\w+/ig;
// let lastWord = /\w+$/ig;
// let string = "Java Script";
// let firstWordFound = string.match(firstWord);
// let lastWordFound = string.match(lastWord);
// let result = '';
// result += lastWordFound + ', ' + firstWordFound;

//Task 5
// function cardNumber (num) {
//     stringifiedNum = num.toString();
//     alert(stringifiedNum);
// 	regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
// 	if (regExp.test(num)) {
// 		console.log('The card number is correct')
// 	} else {
// 		console.log('The card number is incorrect')
// 	}
// }
// cardNumber("9999-9999-9999-9999")

//Task 6
// function checkEmail (str) {
//     let regExp = /^\w+_\w+@\w+\.\w+?/   
//     if (regExp.test(str)) {
//         return 'Email is correct!'
//     } else {
//         return 'Email is not correct!'
//     }
// }
// checkEmail('my_mail@gmail.com');

//Task 7
function checkLogin(login) {
    let regExp = /^[A-Za-z]{1}\w\d\.\d\w?/  
    if (regExp.test(login)) {
        return true;

    } else {
        return false;
    }
}