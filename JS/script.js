var x = 0;

function addToList() {
    var input = document.getElementById("input").value;
    document.getElementById("mainList").insertAdjacentHTML("afterbegin", `<label id="${x}"><input id="button${x}" type="checkbox">${input}`);
    console.log(input);
    x++;
}

function clearSelected() {
    var y = 0;
    console.log(document.getElementById(`button${y}`).value);
}