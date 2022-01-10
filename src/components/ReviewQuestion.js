import './common/TemplatePage.css';

import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import CommonHeader from './common/CommonHeader';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ReviewQuestion() {

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



    const [question1, setAnswerQuestion1] = useState("");
    const navigate = useNavigate();


    console.log(question1);

    function validateForm() {
        if (question1 == "") {
            document.getElementById("question1-other-alert").innerHTML = "";
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question1 == "other" || question1 == "TUG Test Carried out: No, Reason: ") {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }

        if (question1 != "" && question1 != "other" && question1 != "TUG Test Carried out: No, Reason: ") {
            sessionStorage.setItem("TUGTestCarriedOut", question1);
            navigate("/GripStrength");
        }
    }
    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/RiskOfFallStatus" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <Fab className='help-button' aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" >
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

        <Typography sx={{ p: 5, fontSize:'1.5em' }}>This page consists of a question regarding how the test was carried out by the patient</Typography>
      </Popover> 
            </div>

            <div className="main-section">
                <label className="subtitle">TUG Test Carried out</label>
                <h3 className="alert" id="question1-alert"></h3>
                <form id="question1Form">
                    <div>
                        <input type="radio" id="radio-button-yes" name="group1" value="TUG Test Carried out: Yes" onChange={(e) => setAnswerQuestion1(e.target.value)}
                            onClick={function () {
                                document.getElementById("TUGTestCarriedOut").disabled = true;
                                document.getElementById("radio-button-att").checked = false;
                                document.getElementById("radio-button-unsafe").checked = false;
                                document.getElementById("radio-button-unable").checked = false;
                                document.getElementById("radio-button-refused").checked = false;
                                document.getElementById("radio-button-prev-other").checked = false;
                            }} />
                        <label className="radio-button-label" htmlFor="radio-button-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-no" name="group1" value="no" onChange={(e) => setAnswerQuestion1("")}
                            onClick={function () {
                                document.getElementById("TUGTestCarriedOut").disabled = false;
                            }} />

                        <label className="radio-button-label" htmlFor="radio-button-no">No</label>
                    </div>
                    <fieldset id="TUGTestCarriedOut" className="indented-radio-buttons" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-att" name="group1-1" value="TUG Test Carried out: No, Reason: attempted-but-unable" 
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-att">Attempted, but unable</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unsafe" name="group1-1" value="TUG Test Carried out: No, Reason: unsafe" 
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-unsafe">Unsafe</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unable" name="group1-1" value="TUG Test Carried out: No, Reason: unable" 
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-unable">Unable to understand command</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-refused" name="group1-1" value="TUG Test Carried out: No, Reason: refused" 
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-refused">Refused</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other"  onClick={function () {
                                document.getElementById("text-box").disabled = false;
                            }} onChange={(e) => setAnswerQuestion1(e.target.value)}  />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other">Other: </label>
                            <input type="text" id="text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("TUG Test Carried out: No, Reason: " + e.target.value)} />
                            <h3 className="alert" id="question1-other-alert"></h3>

                        </div>
                    </fieldset>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Complete TUG Test</button>
        </div>
    );
}

export default ReviewQuestion;