function updateText() {
            var Country = document.getElementById("Country");
            var result = document.getElementById("result");
            if (Country.value === "China") {
				 result.innerHTML = "<li>Spring Festival</li>"+"<li>Dragon Boat Festival</li>"+"<li>Mid-Autumn Festival</li>"+"<li>Double-ninth Day</li>";
            } else if (Country.value === "France") {
				result.innerHTML = "<li>Epiphany</li>"+"<li>Ascension Day</li>"+"<li>Fête de l’Assomption</li>"+"<li>Armistice Day</li>";
            } else if (Country.value === "Russia") {
				result.innerHTML = "<li>New Year's Day</li>"+"<li>Defenders Day</li>"+"<li>Victory Day</li>"+"<li>Russia Day</li>";
            } else if (Country.value === "UK") {
				result.innerHTML = "<li>St. Patrick's Day</li>"+"<li>Easter</li>"+"<li>Hallowmas</li>"+"<li>Christmas</li>";
            } else if (Country.value === "USA") {
				 result.innerHTML = "<li>Birthday of Martin Luther King</li>"+"<li>Independence Day</li>"+"<li>Veterans Day</li>"+"<li>Thanksgiving Day</li>";
            }
        }




function fn1() {
    var city = document.getElementById("City").value;
    const weatherapiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5eb20914f993f76ee41d0eabe52ab75`;
    fetch(weatherapiurl)
        .then((data)=>data.json())
        .then((weather)=>generateHTML(weather))

    const generateHTML = (data) =>{
        const html=`
            <div class="weather">Current Weather: ${data.weather[0].description}</div>
            <div class="temperature">Current Temperature ${Math.round((data.main.temp-273.15)*100)/100}</div><br>
        `
        const weatherdiv=document.querySelector(".weather")
        weatherdiv.innerHTML=html

        const holidayapiurl = `https://calendarific.com/api/v2/holidays?&api_key=64931719ef8200ea2c7013311cbf0a7717f422ab&country=${data.sys.country}&year=2021`;
        fetch(holidayapiurl)
            .then((data2)=>data2.json())
            .then((holiday)=>generateHTML2(holiday))    
    }

}
