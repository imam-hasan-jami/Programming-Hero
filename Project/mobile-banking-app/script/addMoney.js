document.getElementById("btn-addmoney").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("invalid-div").innerHTML = "";

    let amount = document.getElementById("addmoney-amount").value;
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

        let sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
        document.getElementById("addmoney-amount").value = "";

    } else {
        let invalidDiv = document.getElementById("invalid-div");
        let invalidMessage = document.createElement("div");
        invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Invalid PIN
                </div>`
        invalidDiv.appendChild(invalidMessage);
    }

    // show the transaction history
    let bankSelected = document.getElementById("allbank").value;
    let accountNumber = document.getElementById("account-number").value;
    let transactionType = "Credited";
    let transactionAmount = convertedAmount;
    let transactionDate = new Date().toLocaleString();

    let transactionHistory = document.getElementById("transaction-history");
    let transaction = document.createElement("div");
    transaction.innerHTML =
        `<div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>Transaction Type</th>
                        <th>Bank</th>
                        <th>Transaction Amount</th>
                        <th>Account Number</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${transactionType}</td>
                        <td>${bankSelected}</td>
                        <td>${transactionAmount}</td>
                        <td>${accountNumber}</td>
                        <td>${transactionDate}</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    transactionHistory.appendChild(transaction);
})