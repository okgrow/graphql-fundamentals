import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import defaultPlaces from './mocks';
import './styles';

ReactDOM.render(
  <BrowserRouter>
    <App data={{ places: defaultPlaces }} />
  </BrowserRouter>,
  document.getElementById('root')
);
