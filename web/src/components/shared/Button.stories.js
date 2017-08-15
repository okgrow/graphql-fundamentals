import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from './Button';

const goToBucket = { path: 'bucket' };
const goToMap = { path: 'map', id: 'xyz' };

storiesOf('shared/Button', module)
  .add('go to bucket from home', () =>
    <Button goTo={goToBucket} label="Explore" />
  )
  .add('go to bucket from map', () =>
    <Button goTo={goToBucket} label="Back to list" />
  )
  .add('go to map with {id: xyz} (small)', () =>
    <Button goTo={goToMap} label="View on Map" small />
  );
