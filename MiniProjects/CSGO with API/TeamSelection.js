const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

const div1 = document.createElement("div");

div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.width = "100%";
div1.style.height = "100vh";
div1.style.alignItems = "center";

button1.innerHTML = "Terrorist";
button1.style.backgroundColor = "rgb(216, 217, 206)";
button1.style.height = "50px";
button1.style.width = "250px";
button1.style.margin = "150px 0 50px 0";
button1.style.borderRadius = "10px";
button1.style.cursor = "pointer";

button2.innerHTML = "Counter Terrorist";
button2.style.backgroundColor = "rgb(216, 217, 206)";
button2.style.height = "50px";
button2.style.width = "250px";
button2.style.margin = "50px 0 50px 0";
button2.style.borderRadius = "10px";
button2.style.cursor = "pointer";


button3.innerHTML = "Auto Select";
button3.style.backgroundColor = "rgb(216, 217, 206)";
button3.style.height = "50px";
button3.style.width = "250px";
button3.style.margin = "50px 0 100px 0";
button3.style.borderRadius = "10px";
button3.style.cursor = "pointer";


document.body.style.backgroundColor = "pink";

div1.appendChild(button1);
div1.appendChild(button2);
div1.appendChild(button3);

button1.addEventListener("click", function () {
    window.location.href = "CharSelection.html?selected=Terrorist";

});

button2.addEventListener("click", function () {
    window.location.href = "CharSelection.html?selected=Counter-Terrorist";
});

button3.addEventListener("click", function () {
    let selection = ["Terrorist", "Counter-Terrorist"]
    const randomOption = selection[Math.floor(Math.random() * selection.length)]
    window.location.href = `CharSelection.html?selected=${randomOption}`;
});

document.body.appendChild(div1);