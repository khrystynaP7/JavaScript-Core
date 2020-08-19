exports.myDateTime = function () {
	let os = require('os');
    let username = os.userInfo().username;

	let date = new Date();
	let day = date.getDate();
	let year = date.getFullYear();
	let month = date.getMonth();
	let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let offset = date.getTimezoneOffset()/60;

    if (offset < 0) {
        offset *= -1
    }

	let finalDate = new Date(Date.UTC(year, month, day, hours-offset, minutes, seconds))

	let string = `Date of request: ${finalDate} </br>`;

	if (hours >= 23 && hours < 5) {
	    string += `Good night, ${username}`;
	} else if (hours >= 5 && hours < 11) {
	    string += `Good morning, ${username}`;
	} else if (hours >= 11 && hours < 17) {
	    string += ` Good afternoon, ${username}`;
	} else if (hours >= 17 && hours < 23) {
	    string += `Good evening, ${username}`;
	}
	return string;
};