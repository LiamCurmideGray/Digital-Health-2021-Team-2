import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TemplatePage from './components/common/TemplatePage';
import LevelsOfMobility from './components/LevelsOfMobility';
import ListOfEquipment from './components/ListOfEquipment';
import Instructions from './components/Instructions';
import RiskOfFallStatus from './components/RiskOfFallStatus';
import ReviewQuestion from './components/ReviewQuestion';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
