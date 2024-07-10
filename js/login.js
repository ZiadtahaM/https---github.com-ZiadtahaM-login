//!variables
var logemail = document.getElementById("logemail");
var logpass = document.getElementById("logpass");
var logInButton = document.getElementById("logInButton");
var checkInput = document.getElementById("checkInput");
var emailAlert = document.getElementById("emailAlert");
var passAlert = document.getElementById("passAlert");
var dataArr = [];
var currentIndex = 0;
//!events

if (JSON.parse(localStorage.getItem("parsonalData") != null)) {
  dataArr = JSON.parse(localStorage.getItem("parsonalData"));
}
logInButton.addEventListener("click", chickValidData);
logemail.addEventListener("keyup", validationEmail);
logpass.addEventListener("keyup", validationPass);

//!function

function chickValidData() {
  var cond = false;
  for (var i = 0; i < dataArr.length; i++) {
    if (
      logemail.value == dataArr[i].email &&
      logpass.value == dataArr[i].pass
    ) {
      cond = true;
      break;
    }
  }
  if (cond == true) {
    massageName();
    moveToNextPage();
  } else {
    invalideInput();
  }
}
function moveToNextPage() {
  localStorage.setItem("indexArr",currentIndex)
  logInButton.href = "home.html";

}
function invalideInput() {
  checkInput.classList.remove("d-none");
}

function massageName() {
  var cond = false;
  for (var i = 0; i < dataArr.length; i++) {
    if (
      dataArr[i].email == logemail.value &&
      dataArr[i].pass == logpass.value
    ) {
      cond = true;
      currentIndex = i;
      break;
    }
  }

}

// !validation email input

$(document).ready(function() {
  $("#logemail").keyup(function() {
    const email = $(this).val();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
      $("#logInButton").prop("disabled", true);
      $("#logemail").addClass("is-invalid");
      $("#logemail").removeClass("is-valid");
      $("#emailAlert").removeClass("d-none");
    } else {
      $("#logInButton").prop("disabled", false);
      $("#logemail").removeClass("is-invalid");
      $("#logemail").addClass("is-valid");
      $("#emailAlert").addClass("d-none");
    }
  });
});

// !validation password input

$(document).ready(function() {
  $("#logpass").keyup(function() {
    const password = $(this).val();
    const passRegex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;

    if (!passRegex.test(password)) {
      $("#logInButton").prop("disabled", true);
      $("#logpass").addClass("is-invalid");
      $("#passAlert").removeClass("d-none");
    } else {
      $("#logInButton").prop("disabled", false);
      $("#logpass").removeClass("is-invalid");
      $("#logpass").addClass("is-valid");
      $("#passAlert").addClass("d-none");
    }
  });
});

