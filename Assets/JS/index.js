window.addEventListener("DOMContentLoaded", () => {
  //Calling all the elements
  const inputEmail = document.getElementById("email");
  const signUp = document.getElementById("send");
  const errorMessage = document.getElementById("error");
  const displayEmail = document.getElementById("reveal");

  // Calling the button function
  signUp.addEventListener("click", (e) => {
    e.preventDefault();

    //Conditional statements  
    if( inputEmail.validity.valid){
        window.location.assign("./Success/index.html");
    } else{
      inputEmail.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
      inputEmail.style.border = "2px solid rgb(255, 98, 87)";
      errorMessage.style.display = "inline";
    }
  });
  
  // mouse over effect on iput field
  inputEmail.addEventListener("mouseout", () => {
    inputEmail.style.backgroundColor = "transparent";
    inputEmail.style.border = "";
    errorMessage.style.display = "none";
  });
});
