import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TemplatePage from './components/common/TemplatePage';
import LevelsOfMobility from './components/tugtest/LevelsOfMobility';
import ListOfEquipment from './components/tugtest/ListOfEquipment';
import Instructions from './components/tugtest/Instructions';
import RiskOfFallStatus from './components/tugtest/RiskOfFallStatus';
import ReviewQuestion from './components/tugtest/ReviewQuestion';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TemplatePage /> */}
    {/* <LevelsOfMobility/> */}
    {/* <ListOfEquipment/> */}
    {/* <Instructions/> */}
    {/* <RiskOfFallStatus/> */}
    <ReviewQuestion/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
