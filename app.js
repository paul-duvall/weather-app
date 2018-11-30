// Initialise the storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialise the weather object
const weather = new Weather(weatherLocation);

// Initialise UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close model
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

