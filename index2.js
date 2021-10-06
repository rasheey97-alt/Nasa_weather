function getWeatherData(){
    var cityName= document.getElementById('city_name').value;
axios.get('http://api.weatherapi.com/v1/current.json?key=040c086c6ebd41a18fc160200210510&q='+cityName+ '&aqi=no')

.then((response) =>{
    console.log(response.data);

    let city_name = response.data.location.name;
    let country_name = response.data.location.country;
    let lastUpdatedData = response.data.current.last_updated;
    let currentTemp = response.data.current.temp_c;
    let imageTemp = response.data.current.condition.icon;
    let tempText= response.data.current.condition.text;
    document.getElementById('location').innerText = city_name + " . "+ country_name;
    document.getElementById('last_updt').innerText = lastUpdatedData;
    document.getElementById('current_temp').innerHTML = currentTemp + '<span> 	&nbsp; </span>';
    document.getElementById('icon').innerHTML =  '<img src=$(imageTemp)  >';
    document.getElementById('current_weather').innerText=tempText;
     
})
}




