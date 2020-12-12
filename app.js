var ipemail = document.querySelector(".info.email");
var ippass = document.querySelector(".info.password");
var alrt = document.querySelector(".alrt");
var btnpg = document.querySelector(".btn.pg");
var btnlg = document.querySelector(".btn.lg");
var logo = document.querySelector("#logo");
var btnacc = document.querySelector(".btnaccount");


logo.addEventListener("click", function () {
    window.location.href = "main.html";
})

btnlg.addEventListener("click", check);

btnpg.addEventListener("click", function () {
    window.location.href = "post.html";
})

function check() {
    if (ipemail.value == null && ippass.value == null) {
        alrt.style.display = "block";
    }
    else {
        alrt.style.display = "none";
        if (ipemail.value == "admin" && ippass.value == "abc") {
            window.location.href = "post.html";
        }
    }
}