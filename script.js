// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// need to create array for password characters? 
// find a way to generate random string, length input using user prompt. 
// generate 128 character random string consisting of numbers, upper & lowercase letters, and special characters.

// created object variable with arrays for all possible password characters
var passwordCharacters = {
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowercase:  ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  special: ['!,#,$,%,&,),(,*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,},{,|,~,'],
};

// create generatePassword function calling passwordCharacters object array
// randomize passwordCharacters based on user prompt choices
// add event listener and user prompts

function generatePassword() {
  var randomPassword = Math.floor(Math.random() * passwordCharacters.uppercase.length);
  password = passwordCharacters.uppercase[randomPassword];
  
  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

