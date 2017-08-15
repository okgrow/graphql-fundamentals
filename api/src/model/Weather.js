import fetch from 'node-fetch';
const { DARKSKY_API_KEY } = process.env;

const baseUrl = 'https://api.darksky.net/forecast/';
const urlParams = '?units=us&exclude=minutely,hourly,daily,flags';

export default class Weather {
  async get({ latitude, longitude }) {
    try {
      const response = await fetch(
        `${baseUrl}${DARKSKY_API_KEY}/${latitude},${longitude}${urlParams}`
      );

      const data = await response.json();

      // guard result against no data (usually quota exceeded)
      return {
        icon: data.currently ? iconMap[data.currently.icon] : '🔥', // the icon value is more "parseable"
        temperature: data.currently ? data.currently.temperature : -403
      };
    } catch (error) {
      // mostly likely our API key is invalid or disabled
      return {
        icon: '🔥',
        temperature: 403
      };
    }
  }
}

const iconMap = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  rain: '🌧',
  snow: '❄️',
  sleet: '🌨',
  wind: '🌬',
  fog: '☁️',
  cloudy: '☁️',
  'partly-cloudy-day': '🌥',
  'partly-cloudy-night': '☁️',
  hail: '⛈',
  thunderstorm: '⛈',
  tornado: '🌪'
};
