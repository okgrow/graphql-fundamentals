import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import defaultPlaces from './lib/mocks';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App defaultPlaces={defaultPlaces} />
  </BrowserRouter>,
  document.getElementById('root')
);
