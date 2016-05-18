function checkPassword () {
  var password = "4029";
  var userInput = document.getElementById("pswd").value;
  if (password.localeCompare(userInput) == 0) {
    // password was correct
    alert("password correct");
    }
  else {
    // Incorrect password.
    alert("password incorrect");
  }
}
