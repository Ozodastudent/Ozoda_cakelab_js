function myfun() {
  var a = document.getElementById("nom").value;
  var b = document.getElementById("yosh").value;
  var c = document.getElementById("telefon").value;
  var d = document.getElementById("password1").value;
  var e = document.getElementById("password2").value;

  if (a == "") {
    document.getElementById("nomjon").innerHTML = "**Please enter your name";
    return false;
  }
  if (b <= 18) {
    document.getElementById("pochtajon").innerHTML =
      "**Your age should be at least 18";
    return false;
  }
  if (b == "") {
    document.getElementById("pochtajon").innerHTML = "**Please enter your age";
    return false;
  }
  if (c == "") {
    document.getElementById("teljon").innerHTML =
      "**Please enter your phone number";
    return false;
  }
  if (d == "") {
    document.getElementById("message").innerHTML = "**Please Fill Password";
    return false;
  }
  if (d.length < 6) {
    document.getElementById("message").innerHTML =
      "**Password must be greater than 6 characters";
    return false;
  }
  if (d.length > 15) {
    document.getElementById("message").innerHTML =
      "**Password must smaller than 15 characters";
    return false;
  }
  if (d != e) {
    document.getElementById("message").innerHTML = "**Password is not matching";
    return false;
  } else {
    document.getElementById("messagess").innerHTML = "**Success";
    return false;
  }
}
// function myfun() {
//   let a = document.getElementById("password1").value;
//   let b = document.getElementById("password2").value;
//   if (a.length == 0 || b.length == 0) {
//     alert("Fill All Gaps");
//   } else if (a.length < 6 && b.length < 6) {
//     alert("Short Password");
//   } else if (a.length != b.length) {
//     alert("Password dismatch");
//   } else {
//     alert("Success");
//   }
// }
