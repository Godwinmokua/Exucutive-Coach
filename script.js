

setInterval(()=>{
     locatiom.reload();
},300000);

// LOGIN PAGE
function openloginpage(){
     document.getElementById("login-container").style.display = "block";
     document.getElementById("register-container").style.display = "none";
     document.getElementById("homepage").classList.add("no-scroll");
}
function closeloginpage(){
     document.getElementById("login-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
}

// REGISTER PAGE
function openregister() {
     document.getElementById("register-container").style.display = "block";
     document.getElementById("homepage").classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";
}
function closeregister() {
     document.getElementById("register-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
}
   
// FORGOT PASSWORD 
function openforgotpass() {
     document.getElementById("forgot-container").style.display = "block";
     document.getElementById("homepage").classList.add("no-scroll");
     document.getElementById("login-container").style.display = "none";

}
function closeforgotpass() {
     document.getElementById("forgot-container").style.display = "none";
     document.getElementById("login-container").style.display = "none";
     document.getElementById("homepage").classList.remove("no-scroll");
     location.reload(); // Reload the page after closing the popup
}
   
   