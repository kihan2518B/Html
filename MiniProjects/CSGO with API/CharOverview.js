const params = new URLSearchParams(window.location.search);

const gun_categary = params.get("categary");
const teamSelected = params.get("selected");
const InputValue = params.get("YourName");
const AgentID = params.get("AgentID");
console.log(teamSelected, InputValue, AgentID);
const AlreadySelectedWeapons = params.get("selectedWeapons");


const WeaponsImages = []

const selectedGuns = JSON.parse(AlreadySelectedWeapons);
console.log(selectedGuns)
for (let i in selectedGuns) {
    const weapon = selectedGuns[i]
    // console.log(weapon[0][2])
    WeaponsImages.push(weapon[0][2])
}

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const AgentImage = document.createElement("img");
const Name = document.createElement('h3');
const TeamNameInp = document.createElement('input');
const Label = document.createElement('p');
const button1 = document.createElement('button');


document.body.style.display = "flex"

//contains weapons on left
div1.style.width = "33.33%";
div1.style.height = "100vh";
div1.style.display = "flex";
div1.style.flexWrap = "wrap";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";
for (let i = 0; i < WeaponsImages.length / 2; i++) {
    // console.log(i)
    const weaponImg = document.createElement("img");
    weaponImg.style.height = "90px";
    weaponImg.style.width = "150px";
    weaponImg.style.backgroundColor = "White";
    weaponImg.src = WeaponsImages[i];
    div1.appendChild(weaponImg)
}

let AgentimageSRC = ''
const agents = fetch("https://bymykel.github.io/CSGO-API/api/en/agents.json")
    .then(async (data) => {
        const res = await data.json()
        // console.log("1", res);
        const agent = res.filter((data) => data.id === AgentID)
        // console.log(agent[0])
        AgentimageSRC = agent[0].image
        AgentImage.src = AgentimageSRC;
    })
//Character
div2.style.width = "33.33%";
div2.style.height = "100vh";
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";
Name.innerHTML = InputValue;
AgentImage.style.height = "250px";
AgentImage.style.width = "200px";
div2.appendChild(Name)
div2.appendChild(AgentImage)

//contains weapons on left
div3.style.width = "33.33%";
div3.style.height = "100vh";
div3.style.display = "flex";
div3.style.flexWrap = "wrap";
div3.style.justifyContent = "center";
div3.style.alignItems = "center";
for (let i = Math.round(WeaponsImages.length / 2); i < WeaponsImages.length; i++) {
    // console.log(i)
    const weaponImg = document.createElement("img");
    weaponImg.style.height = "90px";
    weaponImg.style.width = "150px";
    weaponImg.style.backgroundColor = "White";
    weaponImg.src = WeaponsImages[i];
    div3.appendChild(weaponImg)
}

//team name
div4.style.width = "33.33%";
div4.style.height = "100vh";
div4.style.display = "flex";
div4.style.flexWrap = "wrap";
div4.style.justifyContent = "center";
div4.style.alignItems = "center";
div4.style.borderLeft = "2px solid black";
Label.innerHTML = "Team Name";
TeamNameInp.style.width = "100px";
TeamNameInp.style.height = "20px";
button1.innerHTML = "Create Team";
button1.style.padding = "5px";
function getInputValue() {
    const inputValue = TeamNameInp.value;
    if (inputValue == 0) {
        alert("Team Name must not be empty")
    } else {
        console.log(inputValue)
        return inputValue
    }
}
button1.addEventListener("click", function () {
    const TeamName = getInputValue();
    window.location.href = `TeamOverview.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&selectedWeapons=${JSON.stringify(selectedGuns)}&TeamName=${TeamName}`

})
div4.appendChild(Label);
div4.appendChild(TeamNameInp);
div4.appendChild(button1);

document.body.style.backgroundColor = "pink";
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);