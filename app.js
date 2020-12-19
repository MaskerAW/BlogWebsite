
var logo = document.querySelector(".logo");
var btnacc = document.querySelector(".btnaccount");
var btsp = document.querySelector(".btnsp");
var online = false;

logo.addEventListener("click", function () {
    window.location.href = "main.html";
})


var txtpost = document.querySelector(".txtpost");
var btnpost = document.querySelector(".btn.btnpost");

btnpost.addEventListener("click", longcheck);

function longcheck() {
    if (txtpost.value <= 20 || txtpost.value == "") {
        alert("Vui long nhap nhieu hon!");
    }
    
}
