import { storiesOf } from '@storybook/react';
import React from 'react';
import List from './List';
import defaultPlaces from '../lib/mocks';

storiesOf('Bucket/List', module)
  .add('empty list', () => <List />)
  .add('with places', () => <List places={defaultPlaces} />);
