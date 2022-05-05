let usernames = document.querySelector("#username");
let emails = document.querySelector("#email");
let passwords = document.querySelector("#password1");
let rePasswords = document.querySelector("#password2");
let errorMessage1 = document.querySelector(".error-message1");
let errorMessage2 = document.querySelector(".error-message2");
let errorMessage3 = document.querySelector(".error-message3");
let errorMessage4 = document.querySelector(".error-message4");
let lastAns = document.querySelector(".go");

usernames.addEventListener("input", function () {
  let invalid = false;
  let username = usernames.value;
  let userCheck = /^(?=.{6,12}$)[a-z][a-z]+\d*$|^(?=.{6,12}$)[a-z]\d\d+$/gi;
  let result = userCheck.test(username);

  if (!result) {
    invalid = true;
  }
  if (invalid) {
    errorMessage1.style.display = "block";
  } else {
    errorMessage1.style.display = "none";
  }
});
emails.addEventListener("input", function () {
  let invalid = false;
  let mail = emails.value;
  let userCheck =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
  let result = userCheck.test(mail);
  if (!result) {
    invalid = true;
  }
  if (invalid) {
    errorMessage2.style.display = "block";
  } else {
    errorMessage2.style.display = "none";
  }
});

passwords.addEventListener("input", function () {
  let invalid = false;
  let pass = passwords.value;
  let userCheck = /^(?=.{6,12}$)[a-z][a-z]+\d*$|^(?=.{6,12}$)[a-z]\d\d+$/gi;
  let result = userCheck.test(pass);
  if (!result) {
    invalid = true;
  }
  if (invalid) {
    console.log(invalid);
    errorMessage3.style.display = "block";
  } else {
    console.log(invalid);
    errorMessage3.style.display = "none";
  }
});
rePasswords.addEventListener("input", function () {
  let pass1Value = passwords.value;
  let pass2value = rePasswords.value;
  if (pass1Value != pass2value) {
    errorMessage4.style.display = "block";
  } else {
    errorMessage4.style.display = "none";
  }
});

lastAns.addEventListener("click", function (e) {
  if (usernames.value === "") {
    errorMessage1.style.display = "block";
  }
  if (emails.value === "") {
    errorMessage2.style.display = "block";
  }
  if (passwords.value === "") {
    errorMessage3.style.display = "block";
  }
  if (rePasswords.value === "") {
    errorMessage4.style.display = "block";
  }
  if (
    errorMessage1.style.display === "block" ||
    errorMessage2.style.display === "block" ||
    errorMessage3.style.display === "block" ||
    errorMessage4.style.display === "block" ||
    document.querySelector("input").value === ""
  ) {
    e.preventDefault();
  } else {
    alert("Complete the application form, you can verify by email.");
  }
});
