const speciesBoard = document.querySelector("#species-board");

const species = [{
    speciesName:"Gryphon",
    size:"Large",
    niche:"pegasus hunters",
    imageURL:"images/gryphon.webp"
},{
    speciesName:"Dilophosaurus",
    size:"Huge",
    niche:"Megapredator",
    imageURL:"images/dilophosaurus.webp"
},{
    speciesName:"Tapehara",
    size:"Small",
    niche:"flying frugivore",
    imageURL:"images/tapehara.webp"
},{
    speciesName:"Kalydon",
    size:"Medium-Gigantic",
    niche:"Opportunistic omnivore",
    imageURL:"images/boar.webp"
},{
    speciesName:"Jackalope",
    size:"Tiny",
    niche:"small grazer",
    imageURL:"images/jackalope.webp"
},{
    speciesName:"ibirania",
    size:"Huge",
    niche:"high browser",
    imageURL:"images/ibirania.webp"
},{
    speciesName:"Chunkingosaurus",
    size:"Large",
    niche:"Cycad browser",
    imageURL:"images/chunkingosaurus.webp"
},{
    speciesName:"Velociraptor",
    size:"Medium",
    niche:"mescarnivore",
    imageURL:"images/velociraptor.webp"
},{
    speciesName:"Pegasus",
    size:"Large",
    niche:"Flying grazer",
    imageURL:"images/pegasus.webp"
},{
    speciesName:"Prairie chicken",
    size:"Tiny",
    niche:"insectivore",
    imageURL:"images/prairie_chicken.webp"
},{
    speciesName:"Bison",
    size:"Large",
    niche:"Large grazer",
    imageURL:"images/bison.webp"
},{
    speciesName:"Coyote",
    size:"Medium",
    niche:"scavengers",
    imageURL:"images/coyote.webp"
}];


species.forEach(display);
  
function display(species){
	let card = document.createElement("div");
	card.classList.add("species-card");

	let title = document.createElement("h2");
	title.innerHTML = species.speciesName
	let size = document.createElement("p");
	size.innerHTML = species.size
	let niche = document.createElement("p");
	niche.innerHTML = species.niche
	let image = document.createElement("img");
	image.src = species.imageURL
	image.lazyloading = true

    card.appendChild(image);
	card.appendChild(title);
	card.appendChild(size);
	card.appendChild(niche);

	speciesBoard.appendChild(card);
  };