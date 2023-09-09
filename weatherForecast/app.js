const axios = require('axios');
const moment = require('moment');

const apiKey = '34927a99f800468af44d52cbf9969db9';
const city = 'Jakarta';
const country = 'ID';
const cnt = 4 * 8; // 5 days * 8 (3-hour intervals per day)

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric&cnt=${cnt}`;

axios
  .get(apiUrl)
  .then((response) => {
    const forecastData = response.data.list;
    let currentDate = null;
    
    forecastData.forEach((item) => {
      const itemDate = moment.unix(item.dt).format('YYYY-MM-DD');
      
      if (currentDate !== itemDate) {
        const date = moment.unix(item.dt).format('ddd, D MMM YYYY');
        const temperature = `${item.main.temp} °C`;
        console.log(`${date}: ${temperature}`);
        currentDate = itemDate;
      }
    });
  })
  .catch((error) => {
    console.error('API Error:', error);
  });
