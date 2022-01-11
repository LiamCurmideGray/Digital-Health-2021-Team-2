import "./common/CommonStyle.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "./common/CommonHeader";
import Fab from "@mui/material/Fab";
import HelpIcon from "@mui/icons-material/Help";
import { ArrowBack } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useGripContext } from "./database/GripStrengthDatabase";

const Summary = () => {

  let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
  let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

  let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
  let ActualObjectRightResult = JSON.parse(SessionRightResult);

  const navigate = useNavigate();
  const { AllResults, getPatientDocuments } = useGripContext();

  let lastGripResults = null;
  let lastTUGResults = null;
  let PreviousResult = sessionStorage.getItem("PreviousResult");
  let ActualPreviousResult = JSON.parse(PreviousResult);


  

  async function retrieveLastSession() {
    const lastSession = await getPatientDocuments();
  }

  

  //help poppup function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function validateForm() {
    console.log("Results are to be submitted after the SUBMIT is pressed");
    AllResults();
    navigate("/");
  }

  let finalLeft = null;
  let finalRight = null;
  let actualPreviousLeft = null;
  let actualPreviousRight = null;

  if(ActualPreviousResult != null) {

  }

 
  useEffect(() => {
    retrieveLastSession();
    
    finalLeft = returnGripStrenghtRiskLeft(finalLeft, ActualObjectLeftResult);
    finalRight = returnGripStrenghtRiskLeft(finalRight, ActualObjectRightResult);
    
    renderPage();
    document.getElementById("finalLeft").innerHTML= finalLeft;
    document.getElementById("finalRight").innerHTML= finalRight;
    
    if(ActualPreviousResult != null) {
      actualPreviousLeft = returnGripStrenghtRiskLeft(actualPreviousLeft, ActualPreviousResult.GripStrengthResults.MaxLeftHandResult);
      actualPreviousRight = returnGripStrenghtRiskLeft(actualPreviousRight, ActualPreviousResult.GripStrengthResults.MaxRightHandResult);
      document.getElementById("actualPreviousLeft").innerHTML= actualPreviousLeft;
      document.getElementById("actualPreviousRight").innerHTML= actualPreviousRight;

    }


  },[]);


function returnGripStrenghtRiskLeft(thisHand, ActualObjectHandResult){

  if (ActualObjectHandResult != null) {
    if (
      typeof ActualObjectHandResult.Risk === "object" &&
      !Array.isArray(ActualObjectHandResult.Risk) &&
      ActualObjectHandResult.Risk !== null
    ) {
      for (var k in ActualObjectHandResult.Risk) {
        thisHand = `
          <ul>
            <li>
              ${k} Verdict: ${ActualObjectHandResult.Risk[k]}
            </li>
          </ul>
        `;
      }
    } else {
      thisHand = `
        <ul>
          <li>Verdict: ${ActualObjectHandResult.Risk}</li>
        </ul>
      `;
    }
  } else {
    ActualObjectHandResult = { TestResult: "" };
  }

  return thisHand;
}


let pageRender = "";
function renderPage(){
let count = null;

if(ActualPreviousResult == null) {
  pageRender = `
  <div>
  <label class="subtitle"><center>Current Session </center></label>
  </br>
  <label class="subtitle">Levels of Mobility</label>
  <ul>
    <li>${sessionStorage.getItem("TUGQuestion1")}</li>
    <li>${sessionStorage.getItem("TUGQuestion2")}</li>
  </ul>
  <label class="subtitle">Timed Up and Go Test</label>
  <ul>
    <li>Time Taken: ${sessionStorage.getItem("TUGTimer")} seconds</li>
    <li>Status: ${sessionStorage.getItem("TUGStatus")}</li>
  </ul>
  <label class="subtitle">Grip Strength test</label>
  <ul>
    <li>${ActualObjectLeftResult.TestResult}</li>
    <div id="finalLeft"></div>

    <ul>
      ${" "}
      <li>Reason: ${sessionStorage.getItem("question4")}</li>${" "}
    </ul>
    <br />
    <li>${ActualObjectRightResult.TestResult}</li>
    <div id="finalRight"></div>
    <ul>
      ${" "}
      <li>Reason: ${sessionStorage.getItem("question5")}</li>${" "}
    </ul>
  </ul>
  </div>`;

} else {

  pageRender = `
  <div>
  <table>
  <tbody>
  <tr>
    <th><label class="subtitle">Previous Session</label></th>
    <th><label class="subtitle">Current Session</label></th>
  </tr>
  <tr>
    <td>
    <label class="subtitle">Levels of Mobility</label>
<ul>
  <li>${ActualPreviousResult.TUGTestResults.LevelsOfMobility.PreviousLevelofMobility}</li>
  <li>${ActualPreviousResult.TUGTestResults.LevelsOfMobility.CurrentLevelofMobility}</li>
</ul>
<label class="subtitle">Timed Up and Go Test</label>
<ul>
  <li>Time Taken: ${ActualPreviousResult.TUGTestResults.RiskOfFallStatus.TimeTakenInSeconds} seconds</li>
  <li>Status: ${ActualPreviousResult.TUGTestResults.RiskOfFallStatus.Status}</li>
</ul>
<label class="subtitle">Grip Strength test</label>
<ul>
  <li>${ActualPreviousResult.GripStrengthResults.MaxLeftHandResult.TestResult}</li>
  <div id="actualPreviousLeft"></div>
  <ul>
  ${" "}
    <li>Reason: ${ActualPreviousResult.GripStrengthResults.Question4}</li>${" "}
  </ul>
  <br />
  <li>${ActualPreviousResult.GripStrengthResults.MaxRightHandResult.TestResult}</li>
  <div id="actualPreviousRight"></div>
   <ul>
   ${" "}
    <li>Reason: ${ActualPreviousResult.GripStrengthResults.Question5}</li>${" "}
  </ul>
</ul>
    </td>
    <td>
    </br>
    <label class="subtitle">Levels of Mobility</label>
<ul>
  <li>${sessionStorage.getItem("TUGQuestion1")}</li>
  <li>${sessionStorage.getItem("TUGQuestion2")}</li>
</ul>
<label class="subtitle">Timed Up and Go Test</label>
<ul>
  <li>Time Taken: ${sessionStorage.getItem("TUGTimer")} seconds</li>
  <li>Status: ${sessionStorage.getItem("TUGStatus")}</li>
</ul>
<label class="subtitle">Grip Strength test</label>
<ul>
  <li>${ActualObjectLeftResult.TestResult}</li>
  <div id="finalLeft"></div>

  <ul>
  ${" "}
    <li>Reason: ${sessionStorage.getItem("question4")}</li>${" "}
  </ul>
  <br />
  <li>${ActualObjectRightResult.TestResult}</li>
  <div id="finalRight"></div>
  <ul>
  ${" "}
    <li>Reason: ${sessionStorage.getItem("question5")}</li>${" "}
  </ul>
</ul>
    </td>
  </tr>
  </tbody>
</table>
</div>
  
  `;

}

document.getElementById("pageRender").innerHTML = pageRender;
}

  
  const goBack = () => {
    navigate("/GripStrength4");
  };

  return (
    <div className="screen">
      {CommonHeader()}

      <div className="buttons-section space-between">
        <Fab
          variant="contained"
          className="mui-icons"
          onClick={goBack}
          aria-label="add"
        >
          <ArrowBack fontSize="large" />
        </Fab>
        <label className="title">Grip Strength Test</label>
        <Fab
          className="mui-icons"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          aria-label="add"
        >
          <HelpIcon fontSize="large"></HelpIcon>
        </Fab>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 5, fontSize: "1.5em" }}>
            This is a summary of the patient's level of mobility and the test
            results for the Timed Up and Go and Grip Strength tests.
          </Typography>
        </Popover>
      </div>
      <div className="main-section">
        <div id="pageRender">

        </div>
      </div>
      <button className="next-button" onClick={validateForm}>
        Submit
      </button>
    </div>
  );
};

export default Summary;
