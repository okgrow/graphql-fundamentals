import faker from 'faker';

const placeGenerator = () => ({
  id: faker.random.uuid(),
  name: faker.address.city(),
  visited: faker.random.boolean(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
});
