import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import footer from './footer';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <footer />
  </React.StrictMode>,
  document.getElementById('footer')
);
// 