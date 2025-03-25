// document.getElementById("eyeicon");
const eyeIcon = document.querySelector("i")
const password = document.getElementById("password");


eyeIcon.onclick = function(){

    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.remove("fa-solid fa-eye-slash");
        eyeIcon.classList.add("fa-solid fa-eye");
    }else{
        password.type = "password";
        eyeIcon.classList.remove("fa-solid fa-eye");
        eyeIcon.classList.add("fa-solid fa-eye-slash");
    }

};





































