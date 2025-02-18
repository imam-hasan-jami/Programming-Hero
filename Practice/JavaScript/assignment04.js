//problem-1
function cashOut(money) {
    if (typeof (money) === "string" || money < 0) {
        return "Invalid";
    } else {
        return money * 1.75 / 100;
    }
}

//problem-2
function validEmail(email) {
    if (typeof (email) !== "string") {
        return "Invalid";
    }

    let firstIndex = email.charAt(0);
    if (firstIndex === "." || firstIndex === "-" || firstIndex === "_" || firstIndex === "+" || firstIndex === "@") {
        return false;
    }

    if (email.indexOf(" ") !== -1) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    let check = email.indexOf("@");
    if (check <= 0 || check >= email.length - 1) {
        return false;
    }

    return true;
}

//problem-3
function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoCounter = 0;
    let bananaCounter = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "mango") {
            mangoCounter++;
        } else if (votes[i] === "banana") {
            bananaCounter++;
        }
    }

    if (mangoCounter > bananaCounter) {
        return "Mango";
    } else if (mangoCounter < bananaCounter) {
        return "Banana";
    } else {
        return "Draw";
    }
}

//problem-4
function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }

    if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true;
    }

    return false;
}

//problem-5
function calculateWatchTime(times) {
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        totalSeconds += times[i];
    }

    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = (totalSeconds % 60) % 60;

    return {
        hour: hour,
        minute: minute,
        second: second
    };
}