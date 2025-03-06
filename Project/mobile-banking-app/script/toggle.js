// document.getElementById("add-money").style.display = "none";
document.getElementById("transaction-history").style.display = "none";
document.getElementById("cash-out").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("add-money").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
})

document.getElementById("transaction-history-box").addEventListener("click", function () {
    document.getElementById("transaction-history").style.display = "block";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
})

document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("transaction-history").style.display = "none";
})