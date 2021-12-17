import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import initialSoundbank from 'data/soundbank-data';
import configureSoundbankStore from 'store/soundbank-store';

configureSoundbankStore(initialSoundbank);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);