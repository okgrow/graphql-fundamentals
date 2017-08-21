import { storiesOf } from '@storybook/react';
import React from 'react';
import List from './List';
import defaultPlaces from '../lib/mocks';
import { withPlacesData } from '../withBusinessLogic';

const ListWithData = withPlacesData(List);

storiesOf('Bucket/List', module)
  .add('empty list', () => <List />)
  .add('with places (ui mock)', () => <List places={defaultPlaces} />)
  .add('with places (graphql mock)', () => <ListWithData />);
