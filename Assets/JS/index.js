window.addEventListener("DOMContentLoaded", () => {
  const inputEmail = document.getElementById("email");
  const signUp = document.getElementById("send");
  const errorMessage = document.getElementById("error");
  const displayEmail = document.getElementById("reveal");

  
  signUp.addEventListener("click", () => {
    if(inputEmail.value.trim() !== "") {
        window.location.assign("./Success/index.html");
    
        

        
    
    } else{
      inputEmail.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
      inputEmail.style.border = "2px solid rgb(255, 98, 87)";
      errorMessage.style.display = "inline";
      
      
      
      inputEmail.addEventListener("mouseout", () => {
        inputEmail.style.backgroundColor = "";
        inputEmail.style.border = "";
        errorMessage.style.display = "none";
      });
    
    }
  });
});
