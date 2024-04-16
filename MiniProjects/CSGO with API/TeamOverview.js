const params = new URLSearchParams(window.location.search);

const gun_categary = params.get("categary");
const teamSelected = params.get("selected");
const InputValue = params.get("YourName");
const AgentID = params.get("AgentID");
console.log(teamSelected, InputValue, AgentID);
const AlreadySelectedWeapons = params.get("selectedWeapons");
console.log("WeaponsImages", JSON.parse(AlreadySelectedWeapons))
const TeamName = params.get("TeamName");

const WeaponsImages = []

const selectedGuns = JSON.parse(AlreadySelectedWeapons);
console.log(selectedGuns)
for (let i in selectedGuns) {
  const weapon = selectedGuns[i]
  // console.log(weapon[0][2])
  WeaponsImages.push(weapon[0][2])
}

// console.log("WeaponsImages,JSON.parse(WeaponsImages)")
const div1 = document.createElement("div"); //main div
const div2 = document.createElement("div"); //team name div
const div3 = document.createElement("div"); //team div

const div4 = document.createElement("div"); // first member
const member1 = document.createElement("div");
const image1 = document.createElement("img"); // image of first member
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const divWeapon1 = document.createElement("div");
const divWeapon2 = document.createElement("div");
const divWeapon3 = document.createElement("div");
const divWeapon4 = document.createElement("div");
const divWeapon5 = document.createElement("div");
const divWeapon6 = document.createElement("div");

const weapon1 = document.createElement("img");
const weapon2 = document.createElement("img");
const weapon3 = document.createElement("img");
const weapon4 = document.createElement("img");
const weapon5 = document.createElement("img");
const weapon6 = document.createElement("img");

const div7 = document.createElement("div");
const member1Name = document.createElement("p");

const team_name = document.createElement("p");

team_name.innerHTML = `Team : ${TeamName}`;
team_name.style.fontSize = "50px";

div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.width = "100%";
div1.style.height = "100vh";

div2.style.height = "7vh";
div2.style.width = "100%";
div2.style.display = "flex";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";

div3.style.height = "93vh";
div3.style.width = "100%";
div3.style.display = "flex";
div3.style.justifyContent = "space-evenly";
div3.style.alignItems = "space-evenly";
div3.style.flexWrap = "wrap";

// member div
div4.style.height = "45vh";
div4.style.width = "40%";
div4.style.display = "flex";
div4.style.flexDirection = "column";

member1.style.height = "40vh";
member1.style.width = "100%";
member1.style.display = "flex";

// image of member div
div5.style.height = "40vh";
div5.style.width = "50%";

// first member image
image1.style.height = "40vh";
image1.style.width = "100%";
image1.style.objectFit = "contain";
const agents = fetch("https://bymykel.github.io/CSGO-API/api/en/agents.json")
  .then(async (data) => {
    const res = await data.json()
    // console.log("1", res);
    const agent = res.filter((data) => data.id === AgentID)

    image1.src = agent[0].image;
    member1Name.innerHTML = agent[0].name.split("|")[0];

  })

// weapons of member 1
div6.style.height = "40vh";
div6.style.width = "50%";
div6.style.display = "flex";
div6.style.justifyContent = "space-evenly";
div6.style.alignItems = "space-evenly";
div6.style.flexWrap = "wrap";

divWeapon1.style.height = "12vh";
divWeapon1.style.width = "40%";
divWeapon1.style.display = "flex";
divWeapon1.style.justifyContent = "center";
divWeapon1.style.alignItems = "center";
divWeapon1.style.border = "1px solid black";

weapon1.style.height = "12vh";
weapon1.style.width = "40%";
weapon1.style.objectFit = "contain";
weapon1.src = WeaponsImages[0];

divWeapon2.style.height = "12vh";
divWeapon2.style.width = "40%";
divWeapon2.style.display = "flex";
divWeapon2.style.justifyContent = "center";
divWeapon2.style.alignItems = "center";
divWeapon2.style.border = "1px solid black";

weapon2.style.height = "12vh";
weapon2.style.width = "40%";
weapon2.style.objectFit = "contain";
weapon2.src = WeaponsImages[1];

divWeapon3.style.height = "12vh";
divWeapon3.style.width = "40%";
divWeapon3.style.display = "flex";
divWeapon3.style.justifyContent = "center";
divWeapon3.style.alignItems = "center";
divWeapon3.style.border = "1px solid black";

weapon3.style.height = "12vh";
weapon3.style.width = "40%";
weapon3.style.objectFit = "contain";
weapon3.src = WeaponsImages[2];

divWeapon4.style.height = "12vh";
divWeapon4.style.width = "40%";
divWeapon4.style.display = "flex";
divWeapon4.style.justifyContent = "center";
divWeapon4.style.alignItems = "center";
divWeapon4.style.border = "1px solid black";

weapon4.style.height = "12vh";
weapon4.style.width = "40%";
weapon4.style.objectFit = "contain";
weapon4.src = WeaponsImages[3];

divWeapon5.style.height = "12vh";
divWeapon5.style.width = "40%";
divWeapon5.style.display = "flex";
divWeapon5.style.justifyContent = "center";
divWeapon5.style.alignItems = "center";
divWeapon5.style.border = "1px solid black";

weapon5.style.height = "12vh";
weapon5.style.width = "40%";
weapon5.style.objectFit = "contain";
weapon5.src = WeaponsImages[4]

divWeapon6.style.height = "12vh";
divWeapon6.style.width = "40%";
divWeapon6.style.display = "flex";
divWeapon6.style.justifyContent = "center";
divWeapon6.style.alignItems = "center";
divWeapon6.style.border = "1px solid black";

weapon6.style.height = "12vh";
weapon6.style.width = "40%";
weapon6.style.objectFit = "contain";
weapon6.src = WeaponsImages[5];

div7.style.height = "5vh";
div7.style.width = "100%";
div7.style.display = "flex";
div7.style.justifyContent = "center";
div7.style.alignItems = "center";

member1Name.style.fontSize = "30px";

document.body.style.backgroundColor = "pink";

const test = fetch(
  "https://bymykel.github.io/CSGO-API/api/en/agents.json"
).then(async (data) => {
  const res = await data.json();
  // console.log(res);
  // Filter out elements with team.name equal to "Counter-Terrorist"
  const counterTerroristAgents = res.filter(
    (agent) => agent.team.name === "Counter-Terrorist"
  );
  const mximumImageIndex = Math.min(counterTerroristAgents.length, res.length);
  // console.log("counterTerroristAgents", counterTerroristAgents);

  // Iterate over the filtered agents and generate random images
  // for (let agent of counterTerroristAgents) {
  for (let i = 0; i < 3; i++) {
    // const cart = res[i];
    const div24 = document.createElement("div"); // first member
    const member21 = document.createElement("div");
    const image21 = document.createElement("img"); // image of first member
    const div25 = document.createElement("div");
    const div26 = document.createElement("div");
    const divWeapon21 = document.createElement("div");
    const divWeapon22 = document.createElement("div");
    const divWeapon23 = document.createElement("div");
    const divWeapon24 = document.createElement("div");
    const divWeapon25 = document.createElement("div");
    const divWeapon26 = document.createElement("div");

    const weapon21 = document.createElement("img");
    const weapon22 = document.createElement("img");
    const weapon23 = document.createElement("img");
    const weapon24 = document.createElement("img");
    const weapon25 = document.createElement("img");
    const weapon26 = document.createElement("img");

    const div27 = document.createElement("div");
    const member21Name = document.createElement("p");

    div24.style.height = "45vh";
    div24.style.width = "40%";
    div24.style.display = "flex";
    div24.style.flexDirection = "column";

    member21.style.height = "40vh";
    member21.style.width = "100%";
    member21.style.display = "flex";

    // image of member div
    div25.style.height = "40vh";
    div25.style.width = "50%";

    // pick random images for team members
    image21.style.height = "40vh";
    image21.style.width = "100%";
    image21.style.objectFit = "contain";
    const randomIndexNo = Math.floor(Math.random() * mximumImageIndex);
    if (counterTerroristAgents[randomIndexNo]?.image) {
      // console.log("res.team.name", counterTerroristAgents);
      image21.src = counterTerroristAgents[randomIndexNo].image; // Set the src attribute to a random image URL
      member21Name.innerHTML =
        counterTerroristAgents[randomIndexNo].name.split("|")[0];
    }

    // weapons of member 1
    div26.style.height = "40vh";
    div26.style.width = "50%";
    div26.style.display = "flex";
    div26.style.justifyContent = "space-evenly";
    div26.style.alignItems = "space-evenly";
    div26.style.flexWrap = "wrap";

    divWeapon21.style.height = "12vh";
    divWeapon21.style.width = "40%";
    divWeapon21.style.display = "flex";
    divWeapon21.style.justifyContent = "center";
    divWeapon21.style.alignItems = "center";
    divWeapon21.style.border = "1px solid black";

    weapon21.style.height = "12vh";
    weapon21.style.width = "40%";
    weapon21.style.objectFit = "contain";
    weapon21.src = WeaponsImages[0];

    divWeapon22.style.height = "12vh";
    divWeapon22.style.width = "40%";
    divWeapon22.style.display = "flex";
    divWeapon22.style.justifyContent = "center";
    divWeapon22.style.alignItems = "center";
    divWeapon22.style.border = "1px solid black";

    weapon22.style.height = "12vh";
    weapon22.style.width = "40%";
    weapon22.style.objectFit = "contain";
    weapon22.src = WeaponsImages[1]

    divWeapon23.style.height = "12vh";
    divWeapon23.style.width = "40%";
    divWeapon23.style.display = "flex";
    divWeapon23.style.justifyContent = "center";
    divWeapon23.style.alignItems = "center";
    divWeapon23.style.border = "1px solid black";

    weapon23.style.height = "12vh";
    weapon23.style.width = "40%";
    weapon23.style.objectFit = "contain";
    weapon23.src = WeaponsImages[2]

    divWeapon24.style.height = "12vh";
    divWeapon24.style.width = "40%";
    divWeapon24.style.display = "flex";
    divWeapon24.style.justifyContent = "center";
    divWeapon24.style.alignItems = "center";
    divWeapon24.style.border = "1px solid black";

    weapon24.style.height = "12vh";
    weapon24.style.width = "40%";
    weapon24.style.objectFit = "contain";
    weapon24.src = WeaponsImages[3]

    divWeapon25.style.height = "12vh";
    divWeapon25.style.width = "40%";
    divWeapon25.style.display = "flex";
    divWeapon25.style.justifyContent = "center";
    divWeapon25.style.alignItems = "center";
    divWeapon25.style.border = "1px solid black";

    weapon25.style.height = "12vh";
    weapon25.style.width = "40%";
    weapon25.style.objectFit = "contain";
    weapon25.src = WeaponsImages[4]

    divWeapon26.style.height = "12vh";
    divWeapon26.style.width = "40%";
    divWeapon26.style.display = "flex";
    divWeapon26.style.justifyContent = "center";
    divWeapon26.style.alignItems = "center";
    divWeapon26.style.border = "1px solid black";

    weapon26.style.height = "12vh";
    weapon26.style.width = "40%";
    weapon26.style.objectFit = "contain";
    weapon26.src = WeaponsImages[5]

    div27.style.height = "5vh";
    div27.style.width = "100%";
    div27.style.display = "flex";
    div27.style.justifyContent = "center";
    div27.style.alignItems = "center";

    member21Name.style.fontSize = "30px";

    div3.appendChild(div24);
    div24.appendChild(member21);
    member21.appendChild(div25);
    div25.appendChild(image21);

    member21.appendChild(div26);
    div26.appendChild(divWeapon21);
    div26.appendChild(divWeapon22);
    div26.appendChild(divWeapon23);
    div26.appendChild(divWeapon24);
    div26.appendChild(divWeapon25);
    div26.appendChild(divWeapon26);

    divWeapon21.appendChild(weapon21);
    divWeapon22.appendChild(weapon22);
    divWeapon23.appendChild(weapon23);
    divWeapon24.appendChild(weapon24);
    divWeapon25.appendChild(weapon25);
    divWeapon26.appendChild(weapon26);

    div27.appendChild(member21Name);
    div24.appendChild(div27);
  }
});

document.body.appendChild(div1);

div1.appendChild(div2);
div2.appendChild(team_name);

div1.appendChild(div3);
div3.appendChild(div4);

div4.appendChild(member1);
member1.appendChild(div5);
div5.appendChild(image1);

member1.appendChild(div6);
div6.appendChild(divWeapon1);
div6.appendChild(divWeapon2);
div6.appendChild(divWeapon3);
div6.appendChild(divWeapon4);
div6.appendChild(divWeapon5);
div6.appendChild(divWeapon6);

divWeapon1.appendChild(weapon1);
divWeapon2.appendChild(weapon2);
divWeapon3.appendChild(weapon3);
divWeapon4.appendChild(weapon4);
divWeapon5.appendChild(weapon5);
divWeapon6.appendChild(weapon6);

div7.appendChild(member1Name);
div4.appendChild(div7);
