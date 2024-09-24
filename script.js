const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%^&*()_+-={}><?=^/?#[]";

const allChars = upperCase + lowerCase + number + symbol;
function createPassword(){
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    password += number.charAt(Math.floor(Math.random() * number.length));
    password += symbol.charAt(Math.floor(Math.random() * symbol.length));

    while (length > password.length) { 
        password += allChars.charAt(Math.floor(Math.random() * symbol.length));
    }
    passwordBox.value = password;
}