import { storiesOf } from '@storybook/react';
import React from 'react';
import InfoDisk from './InfoDisk';

storiesOf('Home/InfoDisk', module)
  .add('no places', () => <InfoDisk />)
  .add('few places', () => <InfoDisk count={5} />)
  .add('many places', () => <InfoDisk count={1337} />);
