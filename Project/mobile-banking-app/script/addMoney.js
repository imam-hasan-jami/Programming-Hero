document.getElementById("btn-addmoney").addEventListener("click", function (event) {
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    let convertedAmount = parseFloat(amount);

    let mainBalance = document.getElementById("main-balance").innerText;
    let convertedMainBalance = parseFloat(mainBalance);

    let pinNumber = document.getElementById("pin-number").value;
    let convertedPinNumber = parseInt(pinNumber);

    if (convertedPinNumber === 1234) {

        let inputAmount = document.getElementById("amount").value;

        if (!isNaN(inputAmount)) {
            let sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
            document.getElementById("amount").value = "";
        } else {
            let invalidDiv = document.getElementById("invalid-div");
            let invalidMessage = document.createElement("div");
            invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Invalid Amount
                </div>`
            invalidDiv.appendChild(invalidMessage);
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