import { storiesOf } from '@storybook/react';
import React from 'react';
import Bucket from './index';
import defaultPlaces from '../lib/mocks';

storiesOf('Bucket/index', module).add('default', () =>
  <Bucket places={defaultPlaces} />
);
