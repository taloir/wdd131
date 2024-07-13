const windchill = document.querySelector("#windchill");
const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windspeed");

let chill = 10;

windchill.innerHTML = `Windchill: ${chill}`;

function calculateWindchill(temperature, windSpeed, scale=false){
    const chill = 0;
    if(scale == false){
        chill = temperature+windSpeed;
    }
    else{
        chill = temperature+windSpeed;
    }
    return chill;
}