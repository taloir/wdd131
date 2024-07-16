const templesdiv = document.querySelector('.temples');
const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Denver Colorado",
	  location: "Denver, Colorado",
	  dedicated: "1986, October, 28",
	  area: 29117,
	  imageUrl:
	  "https://www.churchofjesuschrist.org/imgs/367efe302ab1d79a8b3b2ca34c080a2db5e22baa/full/1600%2C/0/default"
	},
	{
	  templeName: "Kirtland Ohio",
	  location: "Kirtland, Ohio",
	  dedicated: "1883, March, 27",
	  area: 15000,
	  imageUrl:
	  "https://www.churchofjesuschrist.org/imgs/702a311674a9949283bf2ea756bf5f065455a316/full/1600%2C/0/default"
	},
	{
	  templeName: "Kona Hawaii",
	  location: "Kona, Hawaii",
	  dedicated: "2000, January, 24",
	  area: 10700,
	  imageUrl:
	  "https://www.churchofjesuschrist.org/imgs/c242078ac8317d9f5b9effc15e3ef032c18ed061/full/1920%2C/0/default"
	}
	// Add more temple objects here...
  ];

const alltemples = document.querySelector("#all-temples");
  alltemples.addEventListener("click", () => {
	  templesdiv.innerHTML = "";
	  temples.forEach(display);
  });

const oldtemples = document.querySelector("#old-temples");
oldtemples.addEventListener("click", () => {
	templesdiv.innerHTML = "";
	let filteredTemples = temples.filter(temple => { return parseInt(temple.dedicated.split(",")[0]) <= 1900});
	filteredTemples.forEach(display);
});

const newtemples = document.querySelector("#new-temples");
newtemples.addEventListener("click", () => {
	templesdiv.innerHTML = "";
	let filteredTemples = temples.filter(temple => {return parseInt(temple.dedicated.split(",")[0]) >= 2000});
	filteredTemples.forEach(display);
});

const largetemples = document.querySelector("#large-temples");
largetemples.addEventListener("click", () => {
	templesdiv.innerHTML = "";
	let filteredTemples = temples.filter(temple => {return temple.area >= 90000});
	filteredTemples.forEach(display);
});

const smalltemples = document.querySelector("#small-temples");
smalltemples.addEventListener("click", () => {
	templesdiv.innerHTML = "";
	let filteredTemples = temples.filter(temple => {return temple.area <= 10000});
	filteredTemples.forEach(display);
});

temples.forEach(display);
  
function display(temple){
	let card = document.createElement("div");
	card.classList.add("temple-card");

	let title = document.createElement("h2");
	title.innerHTML = temple.templeName
	let location = document.createElement("p");
	location.innerHTML = temple.location
	let dedication = document.createElement("p");
	dedication.innerHTML = temple.dedicated
	let size = document.createElement("p");
	size.innerHTML = temple.area

	let image = document.createElement("img");
	image.src = temple.imageUrl
	image.lazyloading = true

	card.appendChild(title);
	card.appendChild(location);
	card.appendChild(dedication);
	card.appendChild(size);
	card.appendChild(image);

	templesdiv.appendChild(card);
  };