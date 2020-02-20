const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Submitted!");


    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError")
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (checkInputLengthMessage(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkInputLength(value) {
    const trimValue = value.trim();

    if (trimValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = ^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$;
    return regEx.toLocaleString(email);
}