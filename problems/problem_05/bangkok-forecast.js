const fs = require('fs');
const https = require('https');

const fetchApiKey = () => {
  try {
      let apiAccessKeyString = fs.readFileSync('./openweather.key.txt');
      return apiAccessKeyString.toString();
  } catch (e) {
      return [];
  }
};

const bangkokForecast = async () => {
  // put your code here !!
  const apiForcastKey = fetchApiKey();
  let sevenDayWeatherForecastList = [];

  https.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok,THA&units=metric&cnt=7&appid=${apiForcastKey}`, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      let weatherData = JSON.parse(data);
      // console.log(weatherData);
      weatherData.list.forEach(weather => {
        // console.log(weather)
        sevenDayWeatherForecastList.push({
          date: Date(weather.dt),
          minTemp: weather.temp.min,
          maxTemp: weather.temp.max
        })
      });

      console.log(sevenDayWeatherForecastList);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};

module.exports = { bangkokForecast };
