var x = 0;

function addToList() {
    var input = document.getElementById("input").value;
    if (input === "" || document.getElementById("red").checked) {} else {
        document.getElementById("listNormal").insertAdjacentHTML("beforeend", `<label id="${x}" class="lable"><input id="button${x}" type="checkbox">${input}</label><div class="smol">`);
        console.log(input);
        x++;
        console.log("X is now: " + x) + ". Clearing input";
        document.getElementById("input").value = "";
    }
    if (input === "" || !document.getElementById("red").checked) {} else {
        document.getElementById("listRed").insertAdjacentHTML("beforeend", `<label id="${x}" class="lableRed"><input id="button${x}" type="checkbox">${input}</label><div class="smol">`);
        console.log(input);
        x++;
        console.log("X is now: " + x) + ". Clearing input";
        document.getElementById("input").value = "";
    }
}

function clearSelected() {
    let a = 0;
    console.log("Removing selected elements");
    for (let i = 0; i < x; i++) {
        console.log("Checking " + i + "(" + document.getElementById(`button${i}`) + ")");
        if (document.getElementById(`button${i}`).checked) {
            console.log("Removing " + i + "(" + document.getElementById(`button${i}`) + ")");
            document.getElementById(`${i}`).remove();
            a++;
        }
    }
    reasignID();
    x -= a;
    console.log("Amount of removed items: " + a + ". X is now: " + x);
}

function clearAll() {
    if (confirm("Are you sure you wish to remove all items?")) {
        for (i = 0; i < x; i++) {
            console.log("Removing " + i + "(" + document.getElementById(`button${i}`) + ")");
            document.getElementById(`${i}`).remove();
        }
        console.log("Removed all elements, resetting x to 0")
        x = 0;
    }
}

function reasignID() {
    console.log("Reasigning ids");
    for (let i = 0; i < x; i++) {
        console.log("Assigning to " + i);
        for (let j = i; j < x; j++) {
            console.log("Checking " + j + "(" + document.getElementById(`button${j}`) + ")");
            if (document.getElementById(`${j}`)) {
                console.log(j + "(" + document.getElementById(`button${j}`) + ")" + "is being assigned to" + i);
                document.getElementById(`${j}`).id = `${i}`;
                document.getElementById(`button${j}`).id = `button${i}`;
                break;
            }
        }
    }
    console.log("Reasigning complete. Reminder x = " + x);
}