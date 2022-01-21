//this links to the hmtl element button
var generateBtn = document.querySelector("#generate");
//this is an array of special characters that are going to be used to generate the password
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
//this is an array of numbers that are going to be used to generate the password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//this is an array of lower-cased letters that are going to be used to generate the password
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
//this is an array of upper-cased letters that are going to be used to generate the password
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

//this calls the generate password function which gets all the characters
function writePassword() {
  var passwordText = generatePassword();
  //this links to the text are that the password is going to be displayed in
  var passwordEl = document.querySelector("#password");
  //this diplays the password on the page
  passwordEl.value = passwordText;

}
//the function that is going to generate the password
function generatePassword() {
  //based on the criteria selected by the user, the possible characters are put into this array
  var possibleCharacters = [];
  //after the password is generated it will be placed in this array
  var finalCharacters = [];
  //asking the user how long they would like their password to be
  var passwordLength = prompt("Enter the length of your password");
  //if the user picks a number outside the parameter then they are alerted and have to try again
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose a number between 8 and 128.");
    generatePassword();
  };
  //converting the string from the user into a number
  passwordLength = parseInt(passwordLength, 10);
  
  //lines 115-122 are the criteria in which the user decides if they would like certain aspects or not
  var hasNumbers = confirm("Include Numbers?");
  
  var hasUpperCase = confirm("Include uppercase letters?")
  
  var hasLowerCase = confirm("Include lowercase letters?");

  var hasSpecialCharacters = confirm("Include special characters?");
  
  //Lines 125-139 puts the characters that are desired by the user into an array
    if (hasNumbers) {
     possibleCharacters = possibleCharacters.concat(numericCharacters);
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
  
  //this is where the password is generate based on the criteria accepted/inputted by the user
  for (i = 0; i < passwordLength; i++) {
    var char = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    finalCharacters.push(char);
    
   
  }
  //this is the generated password.
  return finalCharacters.join('');
  }
  //an event listener begins the writePassword function once the user clicks the generate password button  
generateBtn.addEventListener("click", writePassword);
