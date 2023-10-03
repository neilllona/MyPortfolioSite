let displayNeil = function(){
    text.innerHTML = (`<b>Neil Llona</br>neil.llona4@gmail.com</br><a href=https://github.com/neilllona target="_blank">GitHub</a></br><a href=https://www.linkedin.com/in/neil-llona target="_blank">Linkedin</a></br>(908)-692-3347</b>`);
}

let neil = document.getElementById("neil");
let text = document.getElementById("text");
neil.addEventListener("click", displayNeil);
console.log("Hire me");
