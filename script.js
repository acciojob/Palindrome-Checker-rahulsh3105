// complete the given function

function palindrome(s){
	s = ''.join(filter(str.isalnum, s.lower()))
    
    # Check if the string is equal to its reverse
    return s == s[::-1]
}
module.exports = palindrome
