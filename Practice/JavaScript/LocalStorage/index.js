/*
localStorage.setItem("name", "ronaldo");
localStorage.setItem("age", "40");
localStorage.setItem("club", "real madrid");

localStorage.getItem("name");

// localStorage.clear();
localStorage.removeItem("club");
*/

/*
const handleAddToStorage = () => {
    const name = "cr7";
    localStorage.setItem("name", name);
}
*/

/*
const handleAddToStorage = () => {
    const person = {
        name: "rudiger",
        age: 32,
        friends: ["asencio", "ramos"]
    }

    // localStorage.setItem("person", person);
    // localStorage.setItem("person", JSON.stringify(person));
    const convertedToString = JSON.stringify(person);
    localStorage.setItem("person", convertedToString);
    console.log(convertedToString);

    const backToObject = JSON.parse(convertedToString);
    console.log(backToObject);
}
*/