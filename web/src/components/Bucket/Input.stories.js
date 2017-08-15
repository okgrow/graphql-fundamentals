import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Input from './Input';
import defaultPlaces from '../lib/mocks';

const editInput = event => {
  action('edit input with a value')(event.target.value);
};
const addPlace = event => {
  event.preventDefault();
  action('add place')(event);
};

storiesOf('Bucket/Input', module)
  .add('default', () =>
    <Input
      suggestions={defaultPlaces}
      editInput={editInput}
      addPlace={addPlace}
    />
  )
  .add('with a value', () =>
    <Input
      inputValue="Niagara Falls"
      suggestions={defaultPlaces}
      editInput={editInput}
      addPlace={addPlace}
    />
  );
