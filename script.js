

setInterval(()=>{
     locatiom.reload();
},300000);

// LOGIN PAGE
function openLoginPage(){
     document.getElementById("login-container").style.display = "block";
     document.getElementById("register-container").style.display = "none";
     document.getElementById("homepage").classList.add("no-scroll");
     document.getElementById("forgot-container").style.display = "none";
}
function closeLoginPage(){
     document.getElementById("login-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
}

// REGISTER PAGE
function openRegister() {
     document.getElementById("register-container").style.display = "block";
     document.getElementById("homepage").classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";
}
function closeRegister() {
     document.getElementById("register-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
}
   
// FORGOT PASSWORD 
function openForgotPass() {
     document.getElementById("forgot-container").style.display = "block";
     document.getElementById("homepage").classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";

}
function closeForgotPass() {
     document.getElementById("forgot-container").style.display = "none";
     document.getElementById("login-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
     location.reload(); // Reload the page after closing the popup
}
   
   