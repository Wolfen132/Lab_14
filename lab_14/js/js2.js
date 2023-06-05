
function checkAge() {
    let userAge = prompt("Enter your age", "");

    if (userAge <= 0) {
        alert("Enter valid date");
    }
    else if (typeof(userAge) === 'string') {
        alert("Enter valid date");
    }   
    else if (userAge < 14) {
        alert("You can`t see this film");
    }
}

checkAge();