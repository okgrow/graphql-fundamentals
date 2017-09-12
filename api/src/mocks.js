import faker from 'faker';
import { MockList } from 'graphql-tools';

const placeGenerator = () => ({
  id: faker.random.uuid(),
  name: faker.address.city(),
  visited: faker.random.boolean(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
});

const mocks = {
  Place: () => placeGenerator(),
  Query: () => ({
    places: () => new MockList([1, 5]),
  }),
};

export default mocks;
