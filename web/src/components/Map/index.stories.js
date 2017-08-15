import { storiesOf } from '@storybook/react';
import React from 'react';
import Map from './index';
import defaultPlaces from '../lib/mocks';

const [currentPlace] = defaultPlaces;

storiesOf('Map', module).add('default', () =>
  <Map places={defaultPlaces} currentPlace={currentPlace} />
);
