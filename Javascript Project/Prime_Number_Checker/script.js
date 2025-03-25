



document.addEventListener("DOMContentLoaded",function(){

const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const resultMsg = document.getElementById("resultMsg");


checkButton.addEventListener("click",function(){

    const number = parseInt(numberInput.value);

    if(isNaN(number)){
        resultMsg.textContent = "Please enter a Valid number";
        resultMsg.style.color = "red";
        return;
    }

    if(isPrime(number)){
        resultMsg.textContent = `${number} is a prime Number`;
        resultMsg.style.color = "green";
    } else{
        resultMsg.textContent = `${number} is not a Prime Number`;
        resultMsg.style.color = "red";
    }

});

    function isPrime(num){
        if (num <= 1) return false;
        if (num <= 3) return true;

        if(num % 2 === 0 || num % 3 === 0) return false;
        return true;
    }





})