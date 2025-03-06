document.getElementById("btn-login").addEventListener("click", function (event) {
    // prevent default behaviour of form
    event.preventDefault();

    // clear any previous error messages
    document.getElementById("invalid-div").innerHTML = "";

    // get the account and pin numbers from the input field
    let accountNumber = document.getElementById("account-number").value;
    let pinNumber = document.getElementById("pin-number").value;

    // conver the pin number from string to number as we will verify the pin number
    let convertedPinNumber = parseInt(pinNumber);

    // conditions of logging in
    if (accountNumber.length === 11) {
        if (convertedPinNumber === 1234) {
            window.location.href = "./main.html";
        } else {
            // alert("Invalid PIN");
            let invalidDiv = document.getElementById("invalid-div");
            let invalidMessage = document.createElement("div");
            invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Invalid PIN
                </div>`
            invalidDiv.appendChild(invalidMessage);
        }
    } else {
        // alert("Invalid Account Number");
        let invalidDiv = document.getElementById("invalid-div");
        let invalidMessage = document.createElement("div");
        invalidMessage.innerHTML = `<div class="font-poppins text-red-500 font-semibold text-center mt-10">
                    Invalid Account Number
                </div>`
        invalidDiv.appendChild(invalidMessage);
    }
})