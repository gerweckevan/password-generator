var generate = document.querySelector("#generate");

//get and add an event listener
generate.addEventListener("click", function () {
   ps = generatePassword();
   document.getElementById("password").placeholder = ps;
});
//starting a function to generate the password
//set up a verify and set it to false
//set up a do while function and set variable
function generatePassword() {
   let verify = false;
   while (!verify) {
      let passLength = parseInt(prompt("Choose a password number between 8 and 128"));
      //make statment for making sure there is a value
      if (!passLength) {
         alert("You need a value");
         continue;
      } else if (passLength < 8 || passLength > 128) {
         passLength = parseInt(prompt("Password length must be between 8 and 128 characters long."));
         //this will happen once user puts in a correct number
      } else {
         confirmNumber = confirm("Do you want your password to contain numbers?");
         confirmCharacter = confirm("Do you want your password to contain special characters?");
         confirmUppercase = confirm("Do you want your password to contain Uppercase letters?");
         confirmLowercase = confirm("Do you want your password to contain Lowercase letters?");
      };
        //confirm that something will happen or error
      if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
         alert('At least one character type must be selected.');
         continue;
      }
        //verify its true to set pass
      verify = true;
      let newPass = '';
      let charset = '';
        //start if for statment for the password length
        //set combinations in else if statments
        //set charset for each else if statment
        //create for for loop for (var i = 0; i < passLength; ++i)
        //newPass += charset.charAt(Math.floor(Math.random() * charset.length));
if(!confirmNumber && !confirmUppercase && ! confirmLowercase){
   charset = "!@#$%^&*"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
} else if (!confirmCharacter && !confirmUppercase && !confirmLowercase){
   charset = "0123456789"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
} else if (!confirmCharacter && !confirmNumber && !confirmLowercase){
   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
} else if (!confirmCharacter && !confirmUppercase && !confirmNumber){
   charset = "abcdefghijklmnopqrstuvwxyz"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
}else if (!confirmCharacter && !confirmNumber){
   charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
}else if (!confirmUppercase && !confirmLowercase){
   charset = "0123456789!@#$%^&*"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
}else if (!confirmUppercase && !confirmNumber){
   charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
}else if (!confirmLowercase && !confirmNumber){
   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
} else {
   charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*" 
   for (var i = 0; i < passLength; ++i) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
   }
}
      document.getElementById("password").textContent = newPass;
   }
}
//    