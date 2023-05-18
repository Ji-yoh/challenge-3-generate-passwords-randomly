// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// need to create array for password characters? find a way to generate random string, length input in user prompt. generate 128 character random string consisting of numbers, upper & lowercase letters, and special characters.

// declared variables for length and character types

// created variable with array for all possible password characters
var passwordText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&)(*+,-./:;<=>?@[\]^_`}{|~ '.split(
  ''
);

// create generatePassword function calling passwordText array
function generatePassword() {
  var password = '';
  for (var i = 0; i < passwordText.length; i++) {
    password = passwordText[Math.floor(Math.random() * passwordText.length)]
  };
  
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

