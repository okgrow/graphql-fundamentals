import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from './Header';

storiesOf('shared/Header', module)
  .add('default', () => <Header />)
  .add('with a title', () => <Header title="My places" />);
