const trialClaim = document.querySelector(".form-claim");
const errorFirst = document.querySelector(".error-firstname");
const lastName = document.querySelector(".name-last");
const errorLast = document.querySelector(".error-lastname");
const firstName = document.querySelector(".name-first");
const email = document.querySelector(".input-email");
const errorMail = document.querySelector(".error-email");
const password = document.querySelector(".input-password");
const errorPass = document.querySelector(".error-pass");

trialClaim.addEventListener('click', function() {
    if (firstName.value === "") {
        if (errorFirst.classList[1] == "hide") {
            errorFirst.classList.toggle("hide");
            errorFirst.classList.toggle("show");
        }
    }
    if (lastName.value === "") {
        if (errorLast.classList[1] == "hide") {
            errorLast.classList.toggle("hide");
            errorLast.classList.toggle("show");
        }
    }
    if (email.value === "") {
        if (errorMail.classList[1] == "hide") {
            errorMail.classList.toggle("hide");
            errorMail.classList.toggle("show");
        }
    }
    if (password.value === "") {
        if (errorPass.classList[1] == "hide") {
            errorPass.classList.toggle("hide");
            errorPass.classList.toggle("show");
        }
    }
});