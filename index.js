const apiKey = '9590c851d367fea971408f0216bedb2d';
const searchBtn = document.getElementById('search-btn');
const temp = document.getElementById('temperature');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const name = document.getElementById('name');
const time = document.getElementById('time');


async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const response = await fetch(url)
    const data = await response.json()
    displayWeatherData(data);
    console.log(data)

    const timeResponse = await fetch(weatherUrl)
    const json = await json.json()
    console.log(json)
}

function displayWeatherData(data) {
  const apiTemp = Math.round(data.main.temp - 273.15);
  const weatherDescription = data.weather[0].description;
  const apiWind = data.wind.deg;
  const apiHumidity = data.main.humidity;
  const apicountry = data.sys.country;
  clouds = data.weather[0].main
//   if (clouds === 'Clouds') { // Assuming 'Clouds' is a possible value in data.weather[0].main
//     alert('hello');
//     sun.style.display = "block"
//     rain.style.display = "none"
// } else {
//   console.log('error')
// }



//   const regionTime = 
console.log(data)
time.textContent = apicountry;
  temp.textContent = `${apiTemp} ˚C`;
  wind.textContent = apiWind;
  humidity.textContent = apiHumidity;
  name.textContent = data.name;
  const sun = document.getElementById('sun')
  const rain = document.getElementById('rain')
  if (data.weather.main =='Clouds') {
     
  }
  else if(data.weather.main == 'Rain'){
      rain.classList.toggle('active')
  }
  console.log(data.weather.main)

  console.log(apiTemp)
}

searchBtn.addEventListener('click', (event) => {
    // event.preventDefault();
  const search = document.getElementById('search-bar');
  const cityName = search.value.trim();
  if (cityName) {
    getWeather(cityName);
  } else {
    alert('Please enter a city name.');
  }
});


var arrayOfCities = ['Lagos', 'Dehli', 'Manchester', 'London', 'Tokyo', 'Moscow', 'Cairo', 'Mumbai', 'Dubai', 'Buenos Aires', 'Paris', 'New York City','Chicago','Prague','Madrid','Budapest','Seoul','Lisbon','Munich','Naples','Brussels','Oslo','Vancouver','Lyon','Liverpool'];

function getRandomCity() {
  var randomCity = arrayOfCities[Math.floor(Math.random() * arrayOfCities.length)];
  return randomCity;
}

async function randomCities(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayRandomWeatherData(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

var randomCity = getRandomCity();
console.log(randomCity);

randomCities(randomCity);

function displayRandomWeatherData(city) {
  const location = document.getElementById('randomLocation');
  const Rwind = document.getElementById('randomWind');
  const Rhumidity = document.getElementById('randomHumidity');
  const Rtemp = document.getElementById('randomTemp');
  const apiTemp = Math.round(city.main.temp - 273.15);
  const weatherDescription = city.weather[0].description;
  const apiWind = city.wind.deg;
  const apiHumidity = city.main.humidity;
console.log(apiHumidity)
  Rtemp.textContent = `${apiTemp} ˚C`;
  Rwind.textContent = apiWind;
  Rhumidity.textContent = apiHumidity;
  location.textContent = city.name;

  console.log(city.weather.main);
}
// alert('hello');

// Call fetchWeatherData function with a city name
// fetchWeatherData('Lagos');



// Replace 'YOUR_API_KEY' with your actual OpenWeather API key


// Fetch weather data from the OpenWeather API
// function fetchWeatherData(city) {


//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       displayWeatherData(data);
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// }

// Display weather data on the page