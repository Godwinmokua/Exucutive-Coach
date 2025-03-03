// LOGIN PAGE
function openloginpage(){
     document.getElementById("login-container").style.display = "flex";
     setTimeout(() => {
          document.getElementById("login-container").classList.add("active");
     }, 10);
     document.getElementById("register-container").style.display = "none";
     document.body.classList.add("no-scroll");
}
function closeloginpage(){
     document.getElementById("login-container").style.display = "none";
     setTimeout(() => {
          document.getElementById("login-container").style.display = "none";
        }, 300);
     document.body.classList.remove("no-scroll");
}

// REGISTER PAGE
function openregister() {
     document.getElementById("register-container").style.display = "flex";
     document.body.classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";
   }
   function closeregister() {
     document.getElementById("register-container").style.display = "none";
     document.body.classList.remove("no-scroll");
}

   
// FORGOT PASSWORD 
function openforgotpass() {
     document.getElementById("forgot-container").style.display = "flex";
     document.body.classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";

}
function closeforgotpass() {
     document.getElementById("forgot-container").style.display = "none";
     document.body.remove("no-scroll");
}
   
