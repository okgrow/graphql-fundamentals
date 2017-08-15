const places = [
  {
    // mongo
    id: 'c92g93mthh8zhx6f3f58qhgbom2hy2',
    address: 'Toronto',
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
    address: 'Niagara Falls',
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
];

export default places;
