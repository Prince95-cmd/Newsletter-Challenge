window.addEventListener("DOMContentLoaded", () => {
    const displayEmail = document.getElementById("reveal");
    const subscribedEmail = localStorage.getItem("subscribedEmail");

    if (subscribedEmail) {
        displayEmail.textContent = subscribedEmail;
    }
});