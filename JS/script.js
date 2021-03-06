var x = 0;

const LOCAL_STORAGE_KEY_TODO = "app.todo";

function addToList() {
    var item = new Item(document.getElementById("input").value, document.getElementById("red").checked);
    if (item.text === "" || item.important) {} else {
        document.getElementById("listNormal").insertAdjacentHTML("beforeend", `<li id="${x}" class="item" onclick="clearSelected(${x})">${item.text}</li><div class="smol" id="smol${x}">`);
        x++;
        document.getElementById("input").value = "";
    }
    if (item.text === "" || !item.important) {} else {
        document.getElementById("listImportant").insertAdjacentHTML("beforeend", `<li id="${x}" class="itemRed" onclick="clearSelected(${x})">${item.text}</li><div class="smol" id="smol${x}">`);
        x++;
        document.getElementById("input").value = "";
    }
    store();
}

async function clearSelected(i) {
    animatedRemoval(`${i}`)
}

function clearAll() {
    if (confirm("Are you sure you wish to remove all items?")) {
        for (i = 0; i < x; i++) {
            animatedRemoval(`${i}`)
        }
        x = 0;
        store();
    }
}

function animatedRemoval(input) {
    if(document.getElementById(input))
    {
        document.getElementById(input).style.animation = "fade 500ms";
        if(document.getElementById('animation').checked)
        {
            document.getElementById(input).style.animation += "shrink 500ms 500ms";
            document.getElementById("smol"+input).style.animation = "shrink 500ms 500ms";
            delayedRemoval(499, input);
            delayedRemoval(999, 'smol'+input);
        } else 
        {
            delayedRemoval(0000, input);
            delayedRemoval(0000, 'smol'+input);
        }
    }
}

function timedRemoval(time, input) {
    return new Promise(resolve => {
      setTimeout(() => {
          document.getElementById(input).remove();
          store();
          resolve('resolved');
      }, time);
    });
  }
  
async function delayedRemoval(time, input) {
    await timedRemoval(time, input);
}

class Item {
    constructor(text, important) {
        this.text = text;
        this.important = important;
    }
}

function fetch() {
    var list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODO));
    for (let index = 0; index < list.length; index++) {
        var test = list[index];
        var cha = test.charAt(test.length-5);
        if (test.endsWith('.item')) {
            document.getElementById("listNormal").insertAdjacentHTML("beforeend", `<li id="${x}" class="item" onclick="clearSelected(${x})">${test.slice(0, test.length - 5)}</li><div class="smol" id="smol${x}">`);
            x++;
            document.getElementById("input").value = "";
        } else 
        {
            document.getElementById("listImportant").insertAdjacentHTML("beforeend", `<li id="${x}" class="itemRed" onclick="clearSelected(${x})">${test.slice(0, test.length - 8)}</li><div class="smol" id="smol${x}">`);
            x++;
            document.getElementById("input").value = "";
        }
    }
}

function store() {
    var list = [];
    for(var i = 0; i < x; i++)
    {
        if(document.getElementById(i)) list.push(document.getElementById(i).innerText + '.' + document.getElementById(i).className);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY_TODO, JSON.stringify(list));
}

function mode() {
    var e = document.getElementById("parent").innerHTML;
    console.log(e);
    if(e.includes('<ol')) 
    {
        e = e.replaceAll('<ol', '<ul');
        e = e.replaceAll('</ol', '</ul');
    } else
    {
        e = e.replaceAll('<ul', '<ol');
        e = e.replaceAll('</ul', '</ol');
    }
    console.log(e);
    document.getElementById("parent").innerHTML = e;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = document.getElementById('back').value;
}

function changeForegroundColor() {
    document.body.style.color = document.getElementById('fore').value;
}