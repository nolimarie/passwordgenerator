// Assignment Code
var generateBtn = document.querySelector("#generate");


//create generatePassword function
function generatePassword() {
//prompt user for length
let passwordLength = prompt("How long do you want the password to be?");
// console.log("passwordLength = ", passwordLength);

//error handling - did they enter a valid number
if(isNaN(passwordLength)){
    console.log(passwordLength + " is not a number");
    return "That is not a valid number, so a password will not generate."
    }
// //WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters//
//prompt user to confirm all character selections// 
if (passwordLength <8 || passwordLength >128){
    console.log("Password length must be between 8 - 128 characters.");
    return "Password has a bad value, password will not generate, please try again. Password length requirements 8-128 characters.";
    }
    let lowerCase = confirm ("Do you want to include lower case characters in password? Click ok to include and cancel to exclude.");

    let upperCase = confirm ("Do you want to include upper case characters in password? Click ok to include and cancel to exclude.");

    let specialCharacter = confirm ("Do you want to include special characters in password? Click ok to include and cancel to exclude.");

    let number = confirm ("Do you want to include numbers in password? Click ok to include and cancel to exclude.");

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if (lowerCase === false && 
    upperCase === false &&
    specialCharacter === false &&
    number === false){
    alert("At least one character should be selected, please try again.");
    return (" At least one character should be selected, password not generated.");
    }
    
    let possiblePasswordCharacters = "";
    
    
    let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    if (lowerCase === true){
    possiblePasswordCharacters += lowerCaseCharacters;
    }
    let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (upperCase === true){
    possiblePasswordCharacters += upperCaseCharacters;
    }
    let specialCharacters = "!@#$%^&*()_-=+";
    if (specialCharacter === true){
    possiblePasswordCharacters += specialCharacters;
    }
    let numbers = "0123456789";
    if (number === true){
    possiblePasswordCharacters += numbers;
    }
    let password = "";
    //create for loop to choose password characters
    for (let i = 0; i <passwordLength; i++) {
        password +=possiblePasswordCharacters.charAt[Math.floor(Math.random () * possiblePasswordCharacters.passwordLength)];
        //return "my generated password";
    }
    
return password;
}

    // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

    //Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

//error handling - did the user select at least one option

//use inputs to generate password
//return the password from the generatePassword function//

