import { storiesOf } from '@storybook/react';
import React from 'react';
import Home from './index';
import defaultPlaces from '../lib/mocks';

storiesOf('Home/index', module).add('default', () =>
  <Home places={defaultPlaces} />
);
