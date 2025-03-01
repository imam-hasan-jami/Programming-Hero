//method-2
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

function makePink() {
    document.body.style.backgroundColor = "pink";
}

//method-3
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

//method-4
document.getElementById("btn-make-green").addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "red";
})

//update demo text
document.getElementById("btn-update-demo-text").addEventListener("click", function () {
    const demoText = document.getElementById("demo-text");
    demoText.innerText = "Updated Demo Text.";
})

//update user after login
document.getElementById("btn-login").addEventListener("click", function () {
    const userTitle = document.getElementById("user-title");
    userTitle.innerText = "User logged in successfully.";
})

//update the text accoridng to the input
document.getElementById("btn-update").addEventListener("click", function () {
    //get the text from the input field
    const nameInput = document.getElementById("input-name");
    const name = nameInput.value;
    //set the name on paragraph tag
    const paraName = document.getElementById("para-name");
    paraName.innerText = name;
})


//comment box

//step-1: set an event handler to the button
document.getElementById("btn-post-comment").addEventListener("click", function () {

    //step-2: get the text written in the comment text area
    const commentBox = document.getElementById("comment-box");
    const comment = commentBox.value;

    //step-3: get the parent node where to publish the comment
    const commentContainer = document.getElementById("comment-container");

    //step-4: create a comment p and set the innerText
    const newComment = document.createElement("p");
    newComment.classList.add("comments");
    newComment.innerText = comment;

    //step-5: append the new p tag to the parent node
    commentContainer.appendChild(newComment);

    //step-6: make the comment box empty after clicking the button
    commentBox.value = "";
})


//github style delete
document.getElementById("input-delete").addEventListener("keyup", function (event) {
    const text = event.target.value;
    const btnDelete = document.getElementById("btn-delete");

    if (text === "delete" || text === "Delete") {
        btnDelete.removeAttribute("disabled");
    } else {
        btnDelete.setAttribute("disabled", true);
    }
})