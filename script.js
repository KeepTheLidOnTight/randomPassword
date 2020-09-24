// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var spec = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Write password to the #password input
function writePassword() {
 
  var passwordLength = prompt("How many characters would you like your password to be?")
  passwordLength = Number(passwordLength)
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Password Invalid!")
    return;
  } 
  var lowerConfirmed = confirm("Lowercase?") 
  var upperConfirmed = confirm("Uppercase?")
  var numeric = confirm("Numeric?")
  var specialCharacters = confirm("Special characters?")
  if (!lowerConfirmed && !upperConfirmed && !numeric && !specialCharacters){
    alert("Password Invalid")
    return;
    }    
  
  
 var password = generatePassword(passwordLength, lowerConfirmed, upperConfirmed, numeric, specialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength, lowerConfirmed, upperConfirmed, numeric, specialCharacters) {
  var userArray = []
  if (lowerConfirmed){
    userArray = userArray.concat(lettersLower)
    
  }
  if (upperConfirmed){
    userArray = userArray.concat(lettersUpper)
  }
  for (var i = 0; i < passwordLength; i++) {
  
    var index = Math.floor(Math.random() * userArray.length) + 1;

    console.log(userArray[index])
    
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
