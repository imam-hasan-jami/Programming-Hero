document.getElementById("btn-cashout").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("invalid-div").innerHTML = "";

    let amount = document.getElementById("cashout-amount").value;
    let convertedAmount = parseFloat(amount);

    if (isNaN(convertedAmount)) {
        let invalidDiv = document.getElementById("invalid-div");
        let invalidMessage = document.createElement("div");
        invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                Please enter a valid amount
            </div>`;
        invalidDiv.appendChild(invalidMessage);
        return;
    }

    if (convertedAmount < 0) {
        let invalidDiv = document.getElementById("invalid-div");
        let invalidMessage = document.createElement("div");
        invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                Please enter a valid amount
            </div>`;
        invalidDiv.appendChild(invalidMessage);
        return
    }

    let mainBalance = document.getElementById("main-balance").innerText;
    let convertedMainBalance = parseFloat(mainBalance);

    let pinNumber = document.getElementById("pin-number").value;
    let convertedPinNumber = parseInt(pinNumber);

    if (convertedPinNumber === 1234) {
        if (convertedAmount > convertedMainBalance) {
            let invalidDiv = document.getElementById("invalid-div");
            let invalidMessage = document.createElement("div");
            invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Insufficient Balance
                </div>`;
            invalidDiv.appendChild(invalidMessage);
        } else {
            let sub = convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sub;
            document.getElementById("cashout-amount").value = "";
        }
    } else {
        let invalidDiv = document.getElementById("invalid-div");
        let invalidMessage = document.createElement("div");
        invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Invalid PIN
                </div>`
        invalidDiv.appendChild(invalidMessage);
    }
})