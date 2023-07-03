var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "`", "~"]

var generateBtn = document.querySelector("#generate");

var wantLowercase = false;
var wantUppercase = false;
var wantNumbers = false;
var wantSpecialChars = false;

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
        wantLowercase = true;
        uppercase();
        return wantLowercase;
      } else {
        wantLowercase = false;
        uppercase();
        return wantLowercase;
      }
      function uppercase() {
        if (window.confirm("Do you want uppercase characters in your password?")) {
          wantUppercase = true;
          getNumbers();
          return wantUppercase;
        } else {
          wantUppercase = false;
          getNumbers();
          return wantUppercase;
        }
      }
      function getNumbers() {
        if (window.confirm("Do you want numbers in your password?")) {
          wantNumbers = true;
          iWantSpecialCharacters();
          return wantNumbers;
        } else {
          wantNumbers = false;
          iWantSpecialCharacters();
          return wantNumbers;
        }
      }
      function iWantSpecialCharacters() {
        if (window.confirm("Do you want special characters in your password?")) {
          wantSpecialChars = true;
          generatePasswordAll();
          return wantSpecialChars
        } else {
          wantSpecialChars = false;
          generatePasswordAll();
          return wantSpecialChars;
        }
      }
      function generatePasswordAll() {
        var newPassword = "";
        if (wantLowercase === false && wantUppercase === false && wantNumbers === false && wantSpecialChars === false) {
          newPassword = "";
        } else if (wantLowercase === false && wantUppercase && wantNumbers && wantSpecialChars) {
          newPassword = capLetters.concat(numbers, specialCharacters, capLetters, numbers, specialCharacters, numbers, capLetters);
        } else if (wantLowercase && wantUppercase === false && wantNumbers && wantSpecialChars) {
          newPassword = letters.concat(numbers, specialCharacters, letters, numbers, specialCharacters, numbers, letters);
        } else if (wantLowercase && wantUppercase && wantNumbers === false && wantSpecialChars) {
          newPassword = letters.concat(specialCharacters, specialCharacters, capLetters, letters, specialCharacters, letters, capLetters);
        } else if (wantLowercase && wantUppercase && wantNumbers && wantSpecialChars === false) {
          newPassword = letters.concat(numbers, numbers, capLetters, numbers, letters, numbers, capLetters);
        } else if (wantLowercase === false && wantUppercase == false && wantNumbers && wantSpecialChars) {
          newPassword = numbers.concat(numbers, specialCharacters, specialCharacters, numbers, specialCharacters, numbers, specialCharacters);
        } else if (wantLowercase === false && wantUppercase && wantNumbers === false && wantSpecialChars) {
          newPassword = capLetters.concat(capLetters, specialCharacters, capLetters, capLetters, specialCharacters, capLetters, specialCharacters);
        } else if (wantLowercase === false && wantUppercase && wantNumbers && wantSpecialChars === false) {
          newPassword = capLetters.concat(numbers, numbers, numbers, numbers, capLetters, numbers, capLetters);
        } else if (wantLowercase && wantUppercase === false && wantNumbers === false && wantSpecialChars) {
          newPassword = letters.concat(specialCharacters, specialCharacters, letters, letters, specialCharacters, letters, letters);
        } else if (wantLowercase && wantUppercase === false && wantNumbers && wantSpecialChars === false) {
          newPassword = letters.concat(numbers, numbers, numbers, numbers, numbers, letters, letters);
        } else if (wantLowercase && wantUppercase && wantNumbers === false && wantSpecialChars === false) {
          newPassword = letters.concat(capLetters, capLetters, letters, letters, capLetters, letters, letters);
        } else if (wantLowercase === false && wantUppercase === false && wantNumbers === false && wantSpecialChars) {
          newPassword = specialCharacters.concat(specialCharacters, specialCharacters, specialCharacters, specialCharacters, specialCharacters, specialCharacters, specialCharacters);
        } else if (wantLowercase === false && wantUppercase === false && wantNumbers && wantSpecialChars === false) {
          newPassword = numbers.concat(numbers, numbers, numbers, numbers, numbers, numbers, numbers);
        } else if (wantLowercase === false && wantUppercase && wantNumbers === false && wantSpecialChars === false) {
          newPassword = capLetters.concat(capLetters, capLetters, capLetters, capLetters, capLetters);
        } else if (wantLowercase && wantUppercase === false && wantNumbers === false && wantSpecialChars === false) {
          newPassword = letters.concat(letters, letters, letters, letters, letters);
        } else {
          newPassword = letters.concat(capLetters, letters, specialCharacters, numbers, capLetters, numbers, specialCharacters, numbers, numbers, specialCharacters, letters);
        }
        makePassFromLogic(newPassword);
      }

function makePassFromLogic(newPassword) {
  var shuffledPassword = newPassword.sort(() => 0.5 - Math.random());
  var spliceValue = shuffledPassword.length - passWordLength
  var finalPassword = shuffledPassword.splice(spliceValue);
  var stringPass = finalPassword.toString();
  var splitComma = stringPass.replaceAll(",", "");
  displayPassword(splitComma);
}

      function displayPassword(examplePass) {
        var textArea = document.body.querySelector("#password");
        textArea.value = examplePass;
      }
      }
    }

  }
 }
 }  else { return
 }
}

generateBtn.addEventListener("click", writePassword);
