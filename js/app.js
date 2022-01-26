const trialClaim = document.querySelector(".form-claim");
const errorFirst = document.querySelector(".error-firstname");
const lastName = document.querySelector(".name-last");
const errorLast = document.querySelector(".error-lastname");
const firstName = document.querySelector(".name-first");
const email = document.querySelector(".input-email");
const errorMail = document.querySelector(".error-email");
const password = document.querySelector(".input-password");
const errorPass = document.querySelector(".error-pass");
const errorFirstMsg = document.querySelector(".error-first-msg");
const errorLastMsg = document.querySelector(".error-last-msg");
const errorEmailMsg = document.querySelector(".error-email-msg");
const errorPassMsg = document.querySelector(".error-pass-msg");

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

trialClaim.addEventListener('click', function() {
    if (firstName.value === "") {
        if (errorFirst.classList[1] == "hide") {
            errorFirst.classList.toggle("hide");
            errorFirst.classList.toggle("show");
            errorFirstMsg.classList.toggle("hide");
            errorFirstMsg.classList.toggle("show");
        }
    } else {
        errorFirst.classList.add("hide");
        errorFirst.classList.remove("show");
        errorFirstMsg.classList.add("hide");
        errorFirstMsg.classList.remove("show");
    }
    if (lastName.value === "") {
        if (errorLast.classList[1] == "hide") {
            errorLast.classList.toggle("hide");
            errorLast.classList.toggle("show");
            errorLastMsg.classList.toggle("hide");
            errorLastMsg.classList.toggle("show");
        }
    } else {
        errorLast.classList.add("hide");
        errorLast.classList.remove("show");
        errorLastMsg.classList.add("hide");
        errorLastMsg.classList.remove("show");
    }
    if (!validateEmail(email)) {
        if (errorMail.classList[1] == "hide") {
            errorMail.classList.toggle("hide");
            errorMail.classList.toggle("show");
            errorEmailMsg.classList.toggle("hide");
            errorEmailMsg.classList.toggle("show");
        }
    } else {
        alert("Valid!");
        errorMail.classList.add("hide");
        errorMail.classList.remove("show");
        errorEmailMsg.classList.add("hide");
        errorEmailMsg.classList.remove("show");
    }
    if (password.value === "") {
        if (errorPass.classList[1] == "hide") {
            errorPass.classList.toggle("hide");
            errorPass.classList.toggle("show");
            errorPassMsg.classList.toggle("hide");
            errorPassMsg.classList.toggle("show");
        }
    } else {
        errorPass.classList.add("hide");
        errorPass.classList.remove("show");
        errorPassMsg.classList.add("hide");
        errorPassMsg.classList.remove("show");
    }
});