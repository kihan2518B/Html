const params = new URLSearchParams(window.location.search);
// console.log(selected)
const gun_categary = params.get("categary");
const WeaponType = params.get("weaponType");
const teamSelected = params.get("selected");
const InputValue = params.get("YourName");
const AgentID = params.get("AgentID");
console.log(teamSelected, InputValue, AgentID);
const AlreadySelectedWeapons = params.get("selectedWeapons");
let balance = 9000;
let remainingBalance = params.get("Balance");
console.log("remainingBalance", remainingBalance) //Retrieving remaining balance after selection


let selectedGuns = {}; //contains selected weapons with details
if (AlreadySelectedWeapons != null) {
  console.log("AlreadySelectedWeapons", JSON.parse(AlreadySelectedWeapons))
  selectedGuns = JSON.parse(AlreadySelectedWeapons);
  if (Object.keys(selectedGuns).length == 6) {
    window.location.href = `CharOverview.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Pistols&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
  }
  console.log("selectedGuns", selectedGuns);
}
const priceList = {
  "Pistols": [200, 700],
  "SMGs": [1000, 1500],
  "Rifles": [1500, 3500],
  "Heavy": [2500, 4500],
  "Knives": [100, 500],
  "Gloves": [100, 500]
}

// Function to get random prices
function getRandomPrice(minPrice, maxPrice) {
  const range = (maxPrice - minPrice) / 50 + 1; // Calculate the range of prices
  // console.log(Math.floor(Math.random() * range));
  return Math.floor(Math.random() * range) * 50 + minPrice; // Generate a random price within the range
}

const div1 = document.createElement("div");

const div2 = document.createElement("div"); // first part of page
const div3 = document.createElement("div"); // first text div
const div4 = document.createElement("div"); // second text div
const div5 = document.createElement("div"); // second part of page
const div6 = document.createElement("div"); // button div
const div7 = document.createElement("div"); // gun section
const div8 = document.createElement("div"); // gun types buttons
const div9 = document.createElement("div"); // gun section

const text1 = document.createElement("p");
const text2 = document.createElement("p");

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");

div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.width = "100%";
div1.style.height = "100vh";
// div1.style.alignItems = "center";

div2.style.width = "100%";
div2.style.height = "10vh";
div2.style.display = "flex";
div2.style.justifyContent = "space-around";

div3.style.height = "10vh";
div3.style.width = "70vw";
div3.style.display = "flex";
div3.style.alignItems = "center";

text1.innerHTML = "Choose Weapons and Gears - Counter Terorrist";
text1.style.fontSize = "35px";

div4.style.height = "10vh";
div4.style.width = "fit-content";
div4.style.display = "flex";
div4.style.alignItems = "center";


div5.style.height = "90vh";
div5.style.width = "100%";
div5.style.display = "flex";

div6.style.height = "90vh";
div6.style.width = "25vw";
div6.style.display = "flex";
div6.style.flexDirection = "column";
div6.style.alignItems = "center";
div6.style.justifyContent = "space-evenly";

button1.innerHTML = "Pistols";
button1.style.backgroundColor = "rgb(216, 217, 206)";
button1.style.height = "50px";
button1.style.width = "250px";
button1.style.borderRadius = "10px";
button1.addEventListener("click", function () {

  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Pistols&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

button2.innerHTML = "heavy";
button2.style.backgroundColor = "rgb(216, 217, 206)";
button2.style.height = "50px";
button2.style.width = "250px";
button2.style.borderRadius = "10px";
button2.addEventListener("click", function () {
  // const paramsBefore = new URLSearchParams(window.location.search);
  // paramsBefore.set("selectedWeapons", JSON.stringify(selectedGuns));
  // console.log("paramsBefore.toString", paramsBefore);
  // window.location.href = `WeaponSelection.html?${paramsBefore.toString()}`;
  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Heavy&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

button3.innerHTML = "SMGs";
button3.style.backgroundColor = "rgb(216, 217, 206)";
button3.style.height = "50px";
button3.style.width = "250px";
button3.style.borderRadius = "10px";
button3.addEventListener("click", function () {
  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=SMGs&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

button4.innerHTML = "Rifles";
button4.style.backgroundColor = "rgb(216, 217, 206)";
button4.style.height = "50px";
button4.style.width = "250px";
button4.style.borderRadius = "10px";
button4.addEventListener("click", function () {
  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Rifles&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

button5.innerHTML = "knives";
button5.style.backgroundColor = "rgb(216, 217, 206)";
button5.style.height = "50px";
button5.style.width = "250px";
button5.style.borderRadius = "10px";
button5.addEventListener("click", function () {
  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Knives&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

button6.innerHTML = "gloves";
button6.style.backgroundColor = "rgb(216, 217, 206)";
button6.style.height = "50px";
button6.style.width = "250px";
button6.style.borderRadius = "10px";
button6.addEventListener("click", function () {
  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=Gloves&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
});

div7.style.height = "90vh";
div7.style.width = "75vw";
div7.style.display = "flex";
div7.style.flexDirection = "column";

div8.style.height = "15vh";
div8.style.width = "73vw";
div8.style.display = "flex";
div8.style.margin = "0 auto 0 auto";
div8.style.alignItems = "center";
div8.style.gap = "10px";
div8.style.overflow = "scroll";

div9.style.height = "75vh";
div9.style.width = "75vw";
div9.style.display = "flex";
div9.style.gap = "20px";
div9.style.flexWrap = "wrap";
div9.style.overflow = "scroll";

const gun_type = [];

const test = fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json").then(
  async (data) => {
    const res = await data.json();
    for (let cart of res) {
      if (cart.category.name == gun_categary) {

        // console.log(cart.category.name);
        const button7 = document.createElement("button");

        const all_gun = cart.name.split("|")[0];
        if (!gun_type.includes(all_gun)) {
          gun_type.push(all_gun);
          // if (all_gun) {
          // console.log(gun_type);
          button7.innerHTML = all_gun;
          button7.style.backgroundColor = "rgb(216, 217, 206)";
          button7.style.height = "50px";
          button7.style.width = "150px";
          button7.style.borderRadius = "10px";
          button7.addEventListener("click", function () {
            window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=${gun_categary}&weaponType=${all_gun}&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${remainingBalance}`;
          });
          div8.appendChild(button7);
          // }
        }

        const div10 = document.createElement("div"); // gun cart with img and name
        div10.style.height = "30vh";
        div10.style.width = "10vw";
        div10.style.display = "flex";
        div10.style.flexDirection = "column";
        div10.style.margin = "0 auto 0 auto";
        div10.style.backgroundColor = "";
        // styles
        // console.log("WeaponType", WeaponType);
        const Weapons_name = cart.name.split("|")[0];
        // console.log(Weapons_name, WeaponType);
        if (WeaponType != null) {

          if (Weapons_name.trim().toLowerCase() === WeaponType.trim().toLowerCase()) {

            const div11 = document.createElement("div");
            const image = document.createElement("img");
            const text3 = document.createElement("p");

            image.style.height = "20vh";
            image.style.width = "10vw";
            image.style.objectFit = "contain";
            image.src = cart.image;

            div11.style.height = "10vh";
            div11.style.width = "10vw";
            div11.style.display = "flex";
            div11.style.alignItems = "center";
            div11.style.justifyContent = "center";
            div11.style.border = "2px solid black";
            div11.style.borderRadius = "10px";

            const gun_name = cart.name.split("|")[1];
            text3.innerHTML = gun_name;
            text3.style.fontSize = "20px";
            // console.log(gun_categary)
            // console.log(priceList[gun_categary])
            const ItemPrice = getRandomPrice(priceList[gun_categary][0], priceList[gun_categary][1])
            div11.appendChild(text3);
            div10.appendChild(image);
            div10.appendChild(div11);
            div9.appendChild(div10);
            div10.addEventListener("click", function () {
              console.log(ItemPrice);

              if (balance <= 0) {
                alert("You are out of money");
              } else {
                balance -= ItemPrice //Reducing Balance
                remainingBalance = balance;
                console.log("balance", balance);
                console.log("remainingBalance242", remainingBalance)

                text2.innerHTML = `Balance: $${remainingBalance}`;
                // console.log(balance)
                // console.log(gun_categary, [ItemPrice, cart.name.split("|")[1]])
                const selectedGun = [ItemPrice, cart.name.split("|")[1], cart.image]
                if (!selectedGuns[gun_categary]) {
                  selectedGuns[gun_categary] = []
                  selectedGuns[gun_categary].push(selectedGun);
                  window.location.href = `WeaponSelection.html?selected=${teamSelected}&YourName=${InputValue}&AgentID=${AgentID}&categary=${gun_categary}&weaponType=${all_gun}&selectedWeapons=${JSON.stringify(selectedGuns)}&Balance=${balance}`;
                }
                else {
                  alert("You can not add weapons with same catagory")
                }
              }
            })

          }
        }
      }
    }
  }
);

document.body.style.backgroundColor = "pink";

div1.appendChild(div2);
div1.appendChild(div5);

div2.appendChild(div3);
div2.appendChild(div4);

div3.appendChild(text1);

div5.appendChild(div6);
div5.appendChild(div7);

div7.appendChild(div8);
div7.appendChild(div9);

div6.appendChild(button1);
div6.appendChild(button2);
div6.appendChild(button3);
div6.appendChild(button4);
div6.appendChild(button5);
div6.appendChild(button6);


if (remainingBalance != null) {
  console.log("remainingBalance297", remainingBalance)
  text2.innerHTML = `Balance: $${remainingBalance}`;
} else {
  console.log("remainingBalance300", remainingBalance)

  text2.innerHTML = `Balance: $${balance}`;

}
// console.log(balance)
text2.style.fontSize = "35px";
text2.style.fontWeight = "bold";
div4.appendChild(text2);

document.body.appendChild(div1);
