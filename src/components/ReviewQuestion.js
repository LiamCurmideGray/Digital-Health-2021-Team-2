import './common/CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import CommonHeader from './common/CommonHeader';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './security/ProtectedRoute';


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

    const goBack = () => {
        navigate("/RiskOfFallStatus");
    };

    const [question1, setAnswerQuestion1] = useState("");
    const navigate = useNavigate();


    console.log(question1);


    useEffect(() => {

        
        let status = sessionStorage.getItem("TUGStatus");
        console.log("Status: ", status);
        if(status !== 'false'){
        if (status === "Not Recorded") {
            console.log("TIMER IS NULLL");
                    document.getElementById("radio-button-yes").disabled = true;
                }
                else {
                    console.log("TIMER IS NOT NULLL");
                    document.getElementById("radio-button-no").disabled = true;
                }
            }
    }, []);

        if (sessionStorage.getItem("TUGStatus") === 'false'){
            return ProtectedRoute();
        } else {
            console.log("TUG Status:",sessionStorage.getItem("TUGStatus"));
        }
  

    function validateForm() {
        if (question1 == "") {
            document.getElementById("question1-other-alert").innerHTML = "";
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question1 == "other" || question1 == "No, Other: ") {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }

        if (question1 != "" && question1 != "other" && question1 != "No, Other: ") {
            sessionStorage.setItem("TUGTestCarriedOut", question1);
            navigate("/GripStrength");
        }
    }

    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
                    <ArrowBack fontSize="large" />
                </Fab>
                <label className="title">Timed Up and Go Test</label>
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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page consists of a question regarding how the test was carried out by the patient</Typography>
                </Popover>
            </div>

            <div className="main-section">
                <label className="subtitle">TUG Test Carried out</label>
                <h3 className="alert" id="question1-alert"></h3>
                <form id="question1Form">
                    <div>
                        <input type="radio" id="radio-button-yes" name="group1" value="Yes" onChange={(e) => setAnswerQuestion1(e.target.value)}
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
                            <input type="radio" id="radio-button-att" name="group1-1" value="No, Attempted but unable"
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-att">Attempted, but unable</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unsafe" name="group1-1" value="No, Unsafe"
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-unsafe">Unsafe</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unable" name="group1-1" value="No, Unable to understand command"
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-unable">Unable to understand command</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-refused" name="group1-1" value="No, Refused"
                                onChange={(e) => {
                                    setAnswerQuestion1(e.target.value);
                                    document.getElementById("text-box").disabled = true;
                                }} />
                            <label className="radio-button-label" htmlFor="radio-button-refused">Refused</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" onClick={function () {
                                document.getElementById("text-box").disabled = false;
                            }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other">Other: </label>
                            <input type="text" id="text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("No, Other: " + e.target.value)} />
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