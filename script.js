const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", click => {
    let message = document.querySelector(".error-message");
    message.innerHTML = "YOU'VE BEEN HACKED BOI"
})