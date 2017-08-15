const places = [
  {
    // mongo
    id: 'c92g93mthh8zhx6f3f58qhgbom2hy2',
    name: 'Toronto',
    visited: true,
    // google maps
    location: {
      latitude: 43.653908,
      longitude: -79.384293,
    },
    // darksky
    weather: {
      summary: 'Clear',
      temperature: 59.83,
    },
  },
  {
    id: 'z7akz06dau5iw95ykqqptidi3ccnqr',
    name: 'Niagara Falls',
    visited: false,
    location: {
      latitude: 43.092461,
      longitude: -79.04715,
    },
    weather: {
      summary: 'Rainy',
      temperature: 80,
    },
  },
  {
    id: 'm3e8xlm1kox4jsjat87reqgj1jrn0x',
    name: 'Grand Canyon',
    visited: false,
    location: {
      latitude: 36.105976,
      longitude: -112.094794,
    },
    weather: {
      summary: 'Partly cloudy',
      temperature: 100,
    },
  },
];

export default places;
