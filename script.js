// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////




function generatePassword() {
  // Arrays of characters to be used in password
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spec = ['~','!','@','#','$','%','&','-','+','=','_'];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// empty containers to hold user choices and generated password
var userArray = [];
var genPassword = "";

//*** grab the password length */

passwordLength = prompt("How many characters would you like your password to be?");

  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Password Invalid (must be between 8 and 128 characters!");
    return;
  } else {userArray.push(passwordLength)}

//** */

  var lowerConfirmed = confirm("Lowercase?");
  var upperConfirmed = confirm("Uppercase?");
  var numeric = confirm("Numeric?");
  var specialCharacters = confirm("Special characters?");

  if (!lowerConfirmed && !upperConfirmed && !numeric && !specialCharacters){
    alert("Password Invalid");
    return;
    } else {userArray.push(lettersLower, lettersUpper, spec, lettersUpper)} 


    for (var i = 0; i < passwordLength; i++) {

      var index =[Math.floor(Math.random() * passwordLength.length)];
      genPassword += userArray[index];
      console.log(password);
    }
    return genPassword;


}

