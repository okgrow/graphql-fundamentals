/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import apolloStorybookDecorator from 'apollo-storybook-decorator';

import typeDefs from '../../api/src/typeDefs';
import mocks from '../../api/src/mocks';

import '../src/index.css';

const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(story =>
  <MemoryRouter initialEntries={['/']}>
    {story()}
  </MemoryRouter>
);

addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  })
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
