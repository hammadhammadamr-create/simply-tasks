let inputCity = document.getElementById("inputCity");
let searchBtn = document.getElementById("searchBtn");

let temperature = document.getElementById("temperature");

condition.textContent = "";
icon.textContent = "";

searchBtn.addEventListener("click",getWeather);

async function getWeather (){
   
    let input = inputCity.value.trim();
    if(!input){
        alert("Enter Calabar");
        return
    }

    showmessage("Loading...");

    try{

        let responseData = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=1`);
        let dataGeo = await responseData.json();
        if(!dataGeo){
            showmessage("city not found");
            return
        }
        
        let location=dataGeo.results[0];
        let latitude=location.latitude;
        let longitude=location.longitude;

        let response_weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        let weatherdata = await response_weather.json();
        temperature.textContent = weatherdata.current.temperature_2m;;
        if(temperature.textContent){
            showmessage("");
        }
    }
    catch(error){
        console.log(error)
        showmessage("something went wrong");
    }

    let condition = document.getElementById("condition");
    let icon = document.getElementById("icon");

    if(temperature.textContent <= 31){
        condition.textContent = "weather is cloudy";
        icon.textContent = "☁️";
    }else{
        condition.textContent = "weather is sunny";
        icon.textContent = "☀️";
    }
}


let message = document.getElementById("message");
function showmessage(text){
    message.textContent = text;
}

