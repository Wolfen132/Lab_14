
function showUser(id) {
    for (let i = 0; i < id.length; i++) {
        if (id[i].id < 0) {
            throw new Error("Number < 0");
            console.log(id[i].id);
        } else {
            console.log(id[i]);
        }
    }
}

function showUsers(ids) {

    for (let i = 0; i < ids.length; i++) {
        if (typeof (ids[i].id) !== 'number') {
            throw new Error("Valid date");
        }
    }
    showUser(ids);
}

let array = [
    { id: 1 },
    { id: "kkfgkfg" },
    { id: -3 },
    { id: 4 },
    { id: 5 }
];

try {
    console.log(showUsers(array));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// showUser(array);