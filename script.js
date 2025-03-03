// LOGIN PAGE
function openloginpage(){
     document.getElementById("login-container").style.display = "block";
     document.getElementById("register-container").style.display = "none";
     document.body.classList.add("no-scroll");
     document.getElementById("forgot-container").style.display = "none";
}
function closeloginpage(){
     document.getElementById("login-container").style.display = "none";
     document.body.classList.remove("no-scroll");
}

// REGISTER PAGE
function openregister() {
     document.getElementById("register-container").style.display = "block";
     document.body.classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";
   }
   function closeregister() {
     document.getElementById("register-container").style.display = "none";
     document.body.classList.remove("no-scroll");
}

   
// FORGOT PASSWORD 
function openforgotpass() {
     document.getElementById("forgot-container").style.display = "block";
     document.body.classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";

}
function closeforgotpass() {
     setTimeout(() => {
          document.getElementById("forgot-container").style.display = "none";
          document.body.classList.remove("no-scroll");
          location.reload(); // Reload the page after closing the popup
        }, 300);
     // document.body.remove("no-scroll");
}
   
   