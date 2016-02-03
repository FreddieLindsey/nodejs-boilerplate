// Global stylesheet
require('./index.css');

// Import React(DOM) for rendering
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './javascripts/App.jsx';

var app = document.createElement("app");
document.body.appendChild(app);

if (process.env.NODE_ENV == 'development') {
  const RedBox = require('redbox-react');
  try {
    ReactDOM.render(<App />, app);
  } catch (e) {
    ReactDOM.render(<RedBox error={e} />, app);
  }
} else {
  ReactDOM.render(<App />, app)
}
