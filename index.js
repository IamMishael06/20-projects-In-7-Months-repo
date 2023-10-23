const apiKey = '9590c851d367fea971408f0216bedb2d';
const searchBtn = document.getElementById('search-btn');
const temp = document.getElementById('temperature');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const name = document.getElementById('name');
const time = document.getElementById('time');
const sun = document.querySelector('.sun')
const cloudy = document.querySelector('.cloudy')
const rain = document.querySelector('.rain')
const Randomsun = document.querySelector('.random-sun')
const Randomcloudy = document.querySelector('.random-cloudy')
const Randomrain = document.querySelector('.random-rain')


async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const response = await fetch(url)
    const data = await response.json()
    displayWeatherData(data);

    // const timeResponse = await fetch(weatherUrl)
    // const json = await json.json()
    // console.log(json)
}

function displayWeatherData(data) {
  const apiTemp = Math.round(data.main.temp - 273.15);
  const weatherDescription = data.weather[0].description;
  const apiWind = data.wind.deg;
  const apiHumidity = data.main.humidity;
  const apicountry = data.sys.country;
console.log(apicountry)

//   const regionTime = 
console.log(data)
var clouds = data.weather[0].main
var showCloud = document.getElementById('cloud')
showCloud.textContent = clouds

if (showCloud.textContent.toLowerCase() == 'clear') {
  sun.style.display = 'block'
  rain.style.display = 'none'
  cloudy.style.display = 'none'
}else if (showCloud.textContent.toLowerCase() == 'clouds') {
  sun.style.display = 'none'
  rain.style.display = 'none'
  cloudy.style.display = 'block'
} else if (showCloud.textContent.toLowerCase() == 'rain') {
  sun.style.display = 'none'
  rain.style.display = 'block'
  cloudy.style.display = 'none'
}



// }else{
//   sun.style.display = 'block'
//   rain.style.display = 'none'
//   cloudy.style.display = 'none'
// }

time.textContent = apicountry;
  temp.textContent = `${apiTemp} ˚C`;
  wind.textContent = apiWind;
  humidity.textContent = apiHumidity;
  name.textContent = data.name;
  document.querySelector('.country-name').textContent = data.name

  if (data.weather.main =='Clouds') {
     
  }
  else if(data.weather.main == 'Rain'){
      rain.classList.toggle('active')
  }
  console.log(data.weather.main)

  console.log(apiTemp)
}

searchBtn.addEventListener('click', (event) => {

  const search = document.getElementById('search-bar');
  const cityName = search.value.trim();
  if (cityName) {
    getWeather(cityName);
  } else {
    alert('Please enter a city name.');
  }
  // event.preventDefault();
});


var arrayOfCities = ['Lagos', 'Dehli', 'Manchester', 'London', 'Tokyo', 'Moscow', 'Cairo', 'Mumbai', 'Dubai', 'Buenos Aires', 'Paris', 'New York City','Chicago','Prague','Madrid','Budapest','Seoul','Lisbon','Munich','Naples','Brussels','Oslo','Vancouver','Lyon','Liverpool','Turkey', 'Abuja', 'Berlin', 'Glasgow'];

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
  const randomClouds = city.weather[0].main


  console.log(randomClouds.toLowerCase())

  if (randomClouds.toLowerCase() == 'clear') {
    Randomsun.style.display = 'block'
    Randomrain.style.display = 'none'
    Randomcloudy.style.display = 'none'
  }else if (randomClouds.toLowerCase() == 'clouds' || randomClouds.toLowerCase() == 'mist' ) {
    Randomsun.style.display = 'none'
    Randomrain.style.display = 'none'
    Randomcloudy.style.display = 'block'
  } else if (randomClouds.toLowerCase() == 'rain') {
    Randomsun.style.display = 'none'
    Randomrain.style.display = 'block'
    Randomcloudy.style.display = 'none'
  }
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