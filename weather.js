class Weather {
  constructor(city) {
    this.apiKey = '006de60dc784bc1fc5540dc5ef64d52d';
    this.city = city;
  }

  // http://api.openweathermap.org/data/2.5/weather?q=${this.city},uk&units=metric&APPID=${this.apiKey}

  // Fetch weather from API 
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},uk&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}