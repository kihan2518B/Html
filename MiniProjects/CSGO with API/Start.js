// Page Start Screen

const button = document.createElement("button");
const div1 = document.createElement("div");

div1.style.display = "flex";
div1.style.justifyContent = "Center";
div1.style.width = "100%";
div1.style.height = "100vh";
div1.style.alignItems = "center";

button.innerHTML = "Start"

button.style.backgroundColor = "rgb(195, 232, 183)";
button.style.padding = "15px 100px";
button.style.cursor = "pointer";

document.body.style.backgroundColor = "pink"

div1.appendChild(button)

button.addEventListener("click", function () {
    window.location.href = "TeamSelection.html"
})

document.body.appendChild(div1)

