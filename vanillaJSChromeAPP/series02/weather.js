
const API_KEY = "b68c12790f65181e51deb11e895e3bfa";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    console.log(url);
    fetch(url).
    then(res => {
        // console.log(res.json());
        return res.json();
    }).
    then(data => {
        console.log(data);
        const weatherCon = document.getElementById("weather");
        const weather = weatherCon.querySelector("span:first-child");
        const city = weatherCon.querySelector("span:last-child");

        weather.innerText = data.weather[0].main + data.main.temp;
        city.innerText = data.name;
    }).catch(err => {
        console.log(err);
    })

}

function onGeoError(){
    alert("Can't find you. No weather for u");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
