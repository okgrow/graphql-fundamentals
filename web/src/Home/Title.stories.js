import { storiesOf } from '@storybook/react';
import React from 'react';
import Title from './Title';

storiesOf('Home/Title', module).add('default', () =>
  <Title>The Bucket List</Title>
);
