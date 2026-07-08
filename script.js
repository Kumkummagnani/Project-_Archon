const overlay = document.querySelector(".overlay");
const authContainer = document.querySelector(".auth-container");
// Target the password input specifically by its id from register.html
const passInput = document.querySelector("#password");
const passGroup = passInput ? passInput.closest('.form-group') : null;
let errorMessage = null;


if (overlay) {
    overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    window.location.href = "index.html";
});
}



if (authContainer) {
    authContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});
}


//add an event listener that listens to the input that the user types in the password field and checks if the password is strong or not, and generate an error message if the password is weak.

if (passInput) {
    passInput.addEventListener("input", () => {
        const password = passInput.value;
        const isWeak = password.length < 8 || !/[!@#$%^&*]/.test(password) || !/[A-Z]/.test(password);

        if (!errorMessage && passGroup) {
            errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.style.color = "red";
            errorMessage.style.marginTop = "8px";
            passGroup.appendChild(errorMessage);
        }

        if (isWeak && errorMessage) {
            errorMessage.textContent = "This password is weak, please input a strong password.";
            errorMessage.style.display = "block";
        } else if (errorMessage) {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
        }
    });
}