// Assignment code here
//when button click to generate password, presented with window.prompts for criteria
// 1. length of password. number input between 8 or 128
// 2. lowercase
// 3. uppercase
// 4. numbers
// 5. special characters
//atleast one of above should be in the password
//when all prompts answered, then display on page. 
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "`", "~"]

console.log(letters);
console.log(numbers);
console.log(specialCharacters);
console.log(capLetters);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 if (window.confirm("Do you want to write a new password?")) { prompts();
  function prompts() { var passWordLength = window.prompt("Input a password length between 8 and 128.");

   {
    if (passWordLength < 8) {
      window.alert("Password cannot be less than 8 characters.");
      prompts();
    } else if (passWordLength > 128) {
      window.alert("Password cannot be longer than 128 characters.");
      prompts();
    } else { lowercase();
      function lowercase() {
      if (window.confirm("Do you want lowercase characters in your password?")) {
        console.log("i want lwoercase stuff")
        var pass1 = letters;
        console.log(pass1);
        uppercase();
      } else {
        uppercase();
      }
      function uppercase() {
        if (window.confirm("Do you want uppercase characters in your password?")) {

          console.log("i want uppercase")
          var pass2 = capLetters;
          console.log(pass2);
          getNumbers();
        } else {
          getNumbers();
        }
      }
      function getNumbers() {
        if (window.confirm("Do you want numbers in your password?")) {
          var pass3 = numbers;
          console.log(pass3);
          console.log("i want numbers")
          iWantSpecialCharacters();
        } else {
          iWantSpecialCharacters();
        }
      }
      function iWantSpecialCharacters() {
        if (window.confirm("Do you want special characters in your password?")) {
          var pass4 = specialCharacters;
          console.log(pass4);
          console.log("i want special characters")
          generatePasswordAll();
        } else {
          return
        }
      }
      function generatePasswordAll() {
        var newPassword = letters.concat(numbers, specialCharacters, capLetters, numbers, specialCharacters, capLetters, letters);
        console.log(newPassword);
        var shuffledPassword = newPassword.sort((a, b) => 0.5 - Math.random());
        console.log(shuffledPassword);
        var spliceValue = shuffledPassword.length - passWordLength
        var finalPassword = shuffledPassword.splice(spliceValue);
        console.log(finalPassword);

      }
      }
    }

  }
 }
 }  else { return
 }



 function randomLetter(letters) {
  var max = letters.length;
  var index = Math.floor(Math.random() * max);
  return letters[index];
 }
 function randomCaps(capLetters) {
  var max = capLetters.length;
  var index = Math.floor(Math.random() * max);
  return capLetters[index];
 }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* for (i = 0; i < passWordLength; i++) {
  passwordArray.push(randomLetter(letters));
}
console.log(passwordArray); 

          for (i = 0; i < passWordLength; i++) {
            passwordArray.push(randomCaps(capLetters));
          }
          console.log(passwordArray);*/
