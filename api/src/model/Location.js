import NodeGeocoder from 'node-geocoder';
const { GOOGLE_API_KEY } = process.env;

export default class Location {
  async get(name) {
    if (!name) {
      return;
    }

    try {
      const geocoder = NodeGeocoder({
        provider: 'google',
        apiKey: GOOGLE_API_KEY
      });

      const [location] = await geocoder.geocode(name);

      return location;
    } catch (e) {
      throw new Error(e);
    }
  }
}
