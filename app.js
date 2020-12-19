var ipemail = document.querySelector(".info.email");
var ippass = document.querySelector(".info.password");
var alrt = document.querySelector(".alrt");
var btnlg = document.querySelector(".btn.lg");
var logo = document.querySelector(".logo");
var btnacc = document.querySelector(".btnaccount");
var btsp = document.querySelector(".btnsp");
var online = false;

logo.addEventListener("click", function () {
    window.location.href = "main.html";
})

btnlg.addEventListener("click", check);

checkinglg();

function checkinglg() {
    if (online == true) {
        btnsp.style.display = "none";
    }
    else {
        btnsp.style.display = "block";
    }
}

function check() {
    if (ipemail.value == "" && ippass.value == "") {
        alrt.style.display = "block";
    }
    else {
        alrt.style.display = "none";
        if (ipemail.value == "admin" && ippass.value == "abc") {
            online = true;
            window.location.href = "post.html";
        }
    }
}