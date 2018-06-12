const fs = require('fs');
const https = require('https');

const fetchApiKey = () => {
  try {
      let apiString = fs.readFileSync('./openweather.key.txt');
      return apiString.toString();
  } catch (e) {
      return [];
  }
};

const bangkokForecast = async () => {
  // put your code here !!
  const apiForcastKey = fetchApiKey();

  https.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok,THA&cnt=7&appid=${apiForcastKey}`, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      let weatherData = JSON.parse(data);
      console.log(weatherData);
      // weatherData.list.forEach(weather => {
      //   console.log(weather)
      // })
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};

module.exports = { bangkokForecast };
