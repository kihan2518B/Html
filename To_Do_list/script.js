const textfield = document.getElementById("textfield");
const textcontainer = document.getElementById("task-container");

function addtask() {
    if (textfield.value === '') {
        alert("Task must not be empty");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = textfield.value;
        textcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textfield.value = "";
    SaveData();
}

textcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); //add class name = checked to li if clicked 
        SaveData();                          //and it can also remove class name if it is already there
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();        //remove items if clicked span
        SaveData();
    }
}, false)

//save data from textcontainer to data
function SaveData() {
    localStorage.setItem("data", textcontainer.innerHTML)
}
//show data from "data" into textcontainer
function ShowData() {
    textcontainer.innerHTML = localStorage.getItem("data")
}

ShowData();
// localStorage.removeItem("data")