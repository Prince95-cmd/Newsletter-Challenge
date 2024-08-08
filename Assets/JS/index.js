window.addEventListener("DOMContentLoaded", () => {
  // Calling all the elements
  const inputEmail = document.getElementById("email");
  const signUp = document.getElementById("send");
  const errorMessage = document.getElementById("error");

  // Calling the button function
  signUp.addEventListener("click", (e) => {
      e.preventDefault();

      // Conditional statements  
      if (inputEmail.validity.valid) {
          localStorage.setItem("subscribedEmail", inputEmail.value); // Store the email
          window.location.assign("./Success/index.html");
      } else {
          inputEmail.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
          inputEmail.style.border = "2px solid rgb(255, 98, 87)";
          errorMessage.style.display = "inline";
      }
  });

  // Mouse out effect on input field
  inputEmail.addEventListener("mouseout", () => {
      inputEmail.style.backgroundColor = "transparent";
      inputEmail.style.border = "";
      errorMessage.style.display = "none";
  });
});