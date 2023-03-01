// complete the given function

function palindrome(str){
	str = str.toLowerCase()
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let str2 = reverseArray.join("");
	str2 = str2.toLowerCase()
	let message = false;
	if(str == str2){
		message = true;
	}
	return message;
}
module.exports = palindrome
