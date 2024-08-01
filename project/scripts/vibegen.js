let nounButton = document.querySelector("#noun-button");
let nounBox = document.querySelector("#noun-box");

let nouns = [
"Bronze",
"Eagle",
"Revolver",
"Gold",
"Scripture",
"Cards",
"Spirit",
"Fur",
"Sail",
"Horse",
"Philosophy",
"Smoke",
"Nature",
"Bounty",
"Lightning",
"Star",
"Mask",
"Prayer",
"Coyote",
"Snake",
"Feather",
"Blood",
"Ruin",
"Caravan",
"Oracle",
"Brother",
"Leather",
"Storm",
"Ma/pa",
"Temple",
"Spear",
"Shield",
"Vulture",
"Ghost",
"Cattle",
"Map",
"Journey",
"Mountain",
"Saloon",
"Creature",
"Circus",
"Mine",
"Pillar",
"Marathon",
"Bear",
"Stage",
"Needle",
"Blanket",
"Glass",
"House",
"Pearl",
"Hammer",
"Bone",
"Letter",
"Moon",
"Armor",
"Horseshoe",
"Scroll",
"Bell",
"Stream",
"Cave",
"Hound",
"Heart",
"Sun",
"Star",
"Shrine",
"Snow",
"Statue",
"Ring",
"Armor",
"Wagon",
"Train",
"Forge",
"Fire",
"Gold",
"Olive",
"Pine",
"Feather",
"Stranger",
"Hat",
"Bottle",
"Sea",
"Wolf",
"Sheep",
"Boar",
"Rifle",
"Sword",
"Spear",
"Cloak",
"Dove",
"Miracle",
"Prophet",
"Bounty",
"Paint",
"Monster",
"Lion",
"Dinosaur",
"Crow",
"Bull",
"Witch",
"Curse",
"Field",
"Devil",
"Claw",
"Chains",
"Badge",
"Deer",
"Island",
"Coloseum",
"Village",
"Law",
"Hare",
"Fox",
"City",
"Alien",
"Mine",
"Winds",
"Dynamite",
"Gravy",
"Machine",
"Bridge",
"Clay",
"Cliff",
"Cloud",
"Diamond",
"Frame",
"Garden",
"Glove",
"Iron",
"Key",
"Lantern",
"Mirror",
"Path",
"Root",
"Rust",
"Silk",
"Tea",
"Thorn",
"Weed"
]

nounButton.addEventListener('click', () => {
	display(nounBox,nouns)
});

function display(box,array){
    let string = "";
    for(let i=0;i<3;i++){
        let noun = array[Math.floor(Math.random() * array.length)];
        if(i==0){
            string = `${noun}`;
        }
        else{
            string = `${string}, ${noun}`;
        }
    }
	box.textContent = string;
  };