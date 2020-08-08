//Task 1
function upperCase(text) {
	regExp = /^[A-Z]/;
	if (regExp.test(text)) {
		console.log("String's starts with uppercase character");
	} else {
		console.log("String's not starts with uppercase character");
	}
}
upperCase("regExp");
upperCase("RegExp");

//Task 2
function checkEmail (str) {
    let regExp = /[@.]/   
    if (regExp.test(str)) {
        return true;
    } else {
        return false;
    }
};
checkEmail("Qmail2@gmail.com")

