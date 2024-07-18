const productList = document.querySelector("#product");


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avg_rating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


products.forEach(display);
  
function display(product){
	let option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
	
	productList.appendChild(option);
  };