// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


function writePassword() {
  var passwordText = generatePassword();
  var passwordEl = document.querySelector("#password");

  passwordEl.value = passwordText;

}

function generatePassword() {
  var possibleCharacters = [];
  var finalCharacters = [];
  var passwordLength = prompt("Enter the length of your password");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose a number between 8 and 128.");
    generatePassword();
  };
 
  passwordLength = parseInt(passwordLength, 10);
  

  var hasNumbers = confirm("Include Numbers?");
  

  var hasUpperCase = confirm("Include uppercase letters?")
  

  var hasLowerCase = confirm("Include lowercase letters?");
  

  var hasSpecialCharacters = confirm("Include special characters?");
  
  

    if (hasNumbers) {
     
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      console.log(finalCharacters);
    
     
    };

    if (hasUpperCase) {
      
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      

      
    };

    if (hasLowerCase) {
     
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      

    };

    if (hasSpecialCharacters) {
      
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      

    };
  
  console.log(possibleCharacters);
  

  for (i = 0; i < passwordLength; i++) {
    var char = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    finalCharacters.push(char);
    
   
  }
  return finalCharacters.join('');
  }
  
   
generateBtn.addEventListener("click", writePassword);

