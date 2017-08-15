import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Place from './Place';
import defaultPlaces from '../lib/mocks';

const [visitedPlace, notVisitedPlace] = defaultPlaces;

storiesOf('Bucket/Place', module)
  .add('visited', () =>
    <Place {...visitedPlace} toggleVisited={action('mark as not visited')} />
  )
  .add('not visited', () =>
    <Place {...notVisitedPlace} toggleVisited={action('mark as visited')} />
  );
