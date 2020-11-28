var btnlogin = document.querySelector(".btn-login");
var ipemail = document.querySelector("#email");
var ippass = document.querySelector("#pass");
var alrt = document.querySelector(".alrt");
btnlogin.addEventListener("click", check);
alrt.disabled = true;

function check() {
    if (ipemail.value == "" || ippass.value == "") {
        alrt.style.display = "block";
    }
    else {
        alrt.hide;
    }
}