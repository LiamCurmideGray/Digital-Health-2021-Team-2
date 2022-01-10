import './common/CommonStyle.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonHeader from './common/CommonHeader';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useGripContext } from './database/GripStrengthDatabase';
import ProtectedRoute from './security/ProtectedRoute';

const Summary = () => {


  console.log(sessionStorage.getItem("question1"));
  console.log(sessionStorage.getItem("question2"));
  console.log(sessionStorage.getItem("question3"));
  console.log(sessionStorage.getItem("question4"));
  console.log(sessionStorage.getItem("question5"));

  let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
  let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

  let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
  let ActualObjectRightResult = JSON.parse(SessionRightResult);

  console.log(ActualObjectLeftResult);
  console.log(ActualObjectRightResult, "\n");

  console.log(sessionStorage.getItem("TUGQuestion1"));
  console.log(sessionStorage.getItem("TUGQuestion2"));
  console.log(sessionStorage.getItem("TUGTimer"));
  console.log(sessionStorage.getItem("TUGStatus"));
  console.log(sessionStorage.getItem("TUGTestCarriedOut"));

  const navigate = useNavigate();
  const { AllResults, getPatientDocuments } = useGripContext();
  
  async function retrieveLastSession(){
    const lastSession = await getPatientDocuments();
    console.log("Last Session: ", lastSession);
    return lastSession;
}


let lastGripResults = null;
let lastTUGResults = null;
  useEffect(() => {

     const lastSession = retrieveLastSession();
     if(lastSession != null) {
      lastGripResults = lastSession.GripStrengthResults;
      lastTUGResults = lastSession.TUGTestResults;
   
     console.log("Last Grip Results: ", lastGripResults);
     console.log("Last TUG Results: ", lastTUGResults);
   } 
     
   });

  //help poppup function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function validateForm() {
    console.log("Results are to be submitted after the SUBMIT is pressed");
    AllResults();
    navigate("/");
  }

  let finalLeft = [];
  let finalRight = [];
  let keys = [];

  if (ActualObjectLeftResult != null) {
    if (typeof ActualObjectLeftResult.Risk === 'object' &&
      !Array.isArray(ActualObjectLeftResult.Risk) &&
      ActualObjectLeftResult.Risk !== null) {

      for (var k in ActualObjectLeftResult.Risk) {
        finalLeft.push(<ul><li>{k} Verdict: {ActualObjectLeftResult.Risk[k]}</li></ul>)
      }
    } else {
      finalLeft.push(<ul><li>Verdict: {ActualObjectLeftResult.Risk}</li></ul>)
    }
  }
  else {
    ActualObjectLeftResult = { TestResult: "" };
  }

  if (ActualObjectRightResult != null) {
    if (typeof ActualObjectRightResult.Risk === 'object' &&
      !Array.isArray(ActualObjectRightResult.Risk) &&
      ActualObjectRightResult.Risk !== null) {

      for (var k in ActualObjectRightResult.Risk) {
        finalRight.push(<ul><li>{k} Verdict: {ActualObjectRightResult.Risk[k]}</li></ul>)
      }
    } else {
      finalRight.push(<ul><li>Verdict: {ActualObjectRightResult.Risk}</li></ul>)
    }
  }
  else {
    ActualObjectRightResult = { TestResult: "" };
  }

  const goBack = () => {
    navigate("/GripStrength4");
  };

  if (sessionStorage.getItem("question4") === '' || sessionStorage.getItem("question5") === '' ) {
    console.log("ASDFGASGSDFZ");
    return ProtectedRoute();
  }
  return (
    <div className="screen">
      {CommonHeader()}

      <div className="buttons-section space-between">
        <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
          <ArrowBack fontSize="large" />
        </Fab>
        <label className="title">Grip Strength Test</label>
        <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" >
          <HelpIcon fontSize="large">
          </HelpIcon>
        </Fab>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >

          <Typography sx={{ p: 5, fontSize: '1.5em' }}>This is a summary of the patient's level of mobility and the test results for the Timed Up and Go and Grip Strength tests.</Typography>
        </Popover>
      </div>
      <div className="main-section">
        <label className="subtitle">Levels of Mobility</label>
        <ul>
          <li>{sessionStorage.getItem("TUGQuestion1")}</li>
          <li>{sessionStorage.getItem("TUGQuestion2")}</li>
        </ul>
        <label className="subtitle">Timed Up and Go Test</label>
        <ul>
          <li>Time Taken: {sessionStorage.getItem("TUGTimer")} seconds</li>
          <li>Status: {sessionStorage.getItem("TUGStatus")}</li>
        </ul>
        <label className="subtitle">Grip Strength test</label>
        <ul>
          <li>{ActualObjectLeftResult.TestResult}</li>
          {finalLeft}
          <ul> <li>Reason: {sessionStorage.getItem("question4")}</li> </ul>
          <br />
          <li>{ActualObjectRightResult.TestResult}</li>
          {finalRight}
          <ul> <li>Reason: {sessionStorage.getItem("question5")}</li> </ul>
        </ul>

      </div>
      <button className="next-button" onClick={validateForm}>Submit</button>
    </div>
  );
};

export default Summary;