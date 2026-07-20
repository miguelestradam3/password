const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const specialCheckbox = document.getElementById("special");
const numbersCheckbox = document.getElementById("numbers");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");

const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyPassword);

function generatePassword() {

    const letters =
        "abcdefghijklmnopqrstuvwxyz";

    const capital_letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers =
        "0123456789";

    const specials =
        "!@#$%^&*()_-+=[]{}<>?/";

    let characters = '';

    if (specialCheckbox.checked) {
        characters += specials;
    }

    if (numbersCheckbox.checked) {
        characters +=  numbers;
    }

    if (lowercaseCheckbox.checked) {
        characters += letters;
    }

    if (uppercaseCheckbox.checked) {
        characters += capital_letters;
    }

    if (characters.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Select at least one option",
            text: "Please check at least one character type.",
            timer: 1800,
            showConfirmButton: false
        });

        return;
    }

    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    passwordField.value = password;

    Swal.fire({
        icon: "success",
        title: "Password generated",
        text: "Save your password",
        timer: 1200,
        showConfirmButton: false
    });

}

function copyPassword(){

    if(passwordField.value === "") return;

    navigator.clipboard.writeText(passwordField.value);

    copyBtn.textContent = "Copied!";

    setTimeout(()=>{
        copyBtn.textContent="Copy";
    },2500);

}