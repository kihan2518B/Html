// Character Selection Screen

const button = document.createElement("button");
const div1 = document.createElement("div");
const h3 = document.createElement("h3");
const inputName = document.createElement("input");
const div2 = document.createElement("div");
const p1 = document.createElement("p");
const div3 = document.createElement("div");
const params = new URLSearchParams(window.location.search);
// console.log(selected)
const teamSelected = params.get('selected'); //Terrorist,Counter-Terrorist


// First Div
div1.style.display = "flex";
div1.style.justifyContent = "start";
div1.style.alignItems = "start";
div1.style.margin = "10px";
div1.style.width = "100vw";
div1.style.height = "50px";
h3.innerHTML = `Choose an agent - ${teamSelected}`;
div1.appendChild(h3)


// Center Div
div2.style.display = "flex";
div2.style.flexWrap = "wrap";
div2.style.justifyContent = "start";
div2.style.alignItems = "start";
div2.style.height = "325px";
div2.style.width = "700px";
div2.style.backgroundColor = "white";
div2.style.marginLeft = "150px";
div2.style.overflow = "scroll";


const agents = fetch("https://bymykel.github.io/CSGO-API/api/en/agents.json")
    .then(async (data) => {
        const res = await data.json()
        // console.log("1", res);

        for (let agent of res) {
            if (agent.team.name === teamSelected) {
                console.log(agent.team.name)

                const imageDetails = document.createElement("p");
                const imageElement = document.createElement("img");
                const imagediv = document.createElement("div");
                // styles
                imagediv.style.width = "150px";
                imagediv.style.paddingTop = "15px";
                imagediv.style.height = "150px";
                imagediv.style.display = "flex";
                imagediv.style.flexDirection = "column";
                imagediv.style.alignItems = "center";
                imagediv.style.backgroundColor = "transparent";
                imageElement.style.width = "100px";
                imageElement.style.height = "100px";
                imageDetails.style.fontSize = "14px";
                imageDetails.style.width = "100px";
                const AgentName = agent.name.split("|")[0]
                imageElement.src = agent.image;
                imageDetails.innerHTML = AgentName;

                imagediv.addEventListener("click", function () {
                    window.location.href = "CharSelection.html"
                })

                imagediv.appendChild(imageElement)
                imagediv.appendChild(imageDetails)
                div2.appendChild(imagediv)
            }
        }
        // return res
    })

p1.innerHTML = "Choose your name";
div3.style.display = "flex";
div3.style.justifyContent = "start";
div3.style.alignItems = "center";

div3.appendChild(p1)
div3.appendChild(inputName)

button.style.backgroundColor = "rgb(216, 217, 206)";
button.style.padding = "15px 100px";

document.body.style.backgroundColor = "pink"

document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(div3)

