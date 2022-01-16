import './common/CommonStyle.css';
import CommonHeader from './common/CommonHeader';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ProtectedRoute from './security/ProtectedRoute';

const GripStrength4 = () => {
    // console.log(sessionStorage.getItem("MaxLeftHandResult"));
    // console.log(sessionStorage.getItem("MaxRightHandResult"));
    const navigate = useNavigate();
    //help poppup function
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const goBack = () => {
        navigate("/GripStrength3");
    };
    const [question4, setAnswerQuestion1] = useState("");
    const [question5, setAnswerQuestion2] = useState("");
    const ObjectMaxLeftHandResult = sessionStorage.getItem("MaxLeftHandResult");
    const ObjectMaxRightHandResult = sessionStorage.getItem("MaxRightHandResult");

    const MaxLeftHandResult = JSON.parse(ObjectMaxLeftHandResult);
    const MaxRightHandResult = JSON.parse(ObjectMaxRightHandResult);
    // console.log("Question 1: ", question1);
    // console.log("Question 2: ", question2);
    // console.log("\n");

    useEffect(() => {
        if (MaxLeftHandResult != null) {
            try {
                if (MaxLeftHandResult.TestResult == "No Left Result") {
                    document.getElementById("gst-question1-radio1").disabled = true;
                }
                else {
                    document.getElementById("gst-question1-radio2").disabled = true;
                }
                if (MaxRightHandResult.TestResult == "No Right Result") {
                    document.getElementById("gst-question2-radio1").disabled = true;
                }
                else {
                    document.getElementById("gst-question2-radio2").disabled = true;
                }
            }
            catch {}
        }
    });

    if (sessionStorage.getItem("question1") === 'false' || sessionStorage.getItem("question2") === 'false' || sessionStorage.getItem("question3") === 'false') {
        console.log("ASDFGASGSDFZ");
        return ProtectedRoute();
    }
    function validateForm() {
        console.log("\nEntered into the validate form");
        if (question5 == "") {
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else if (question5 == "no, other" || question5 == "Other: ") {
            document.getElementById("question2-alert").innerHTML = "";
            document.getElementById("question2-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else {
            document.getElementById("question2-alert").innerHTML = "";
            document.getElementById("question2-other-alert").innerHTML = "";
        }
        if (question4 == "") {
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question4 == "no, other" || question4 == "Other: ") {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }
        if (question4 != "" && question5 != "") {
            if (question4 != "no, other" && question5 != "no, other") {
                if (question4 != "Other: " && question5 != "Other: ") {

                    console.log("Passing results to GripStrength");
                    sessionStorage.setItem("question4", question4);
                    sessionStorage.setItem("question5", question5);

                    console.log(question4);
                    console.log(question5, "\n");
                    navigate("/Summary");
                }
            }
        }
    }



    console.log(sessionStorage.getItem("question1"));
    console.log(sessionStorage.getItem("question2"));
    console.log(sessionStorage.getItem("question3"));
    console.log(sessionStorage.getItem("question4"));
    console.log(sessionStorage.getItem("question5"));

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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page is where you must answer questions regarding to how the test was carried out and how the patient performed</Typography>
                </Popover>
            </div>
            <div className="main-section">
                <label className="subtitle">Left Hand</label>
                <form id="question1Form">
                    <p>Grip Strength test carried out on <b>left hand</b>?</p>
                    <h3 className="alert" id="question1-alert"></h3>
                    <input type="radio" id="gst-question1-radio1" name="question1-yes-no" onClick={function () {
                        document.getElementById("leftHandFieldset").disabled = true;
                        document.getElementById("gst-question1-radio3").checked = false;
                        document.getElementById("gst-question1-radio4").checked = false;
                        document.getElementById("gst-question1-radio5").checked = false;
                        document.getElementById("gst-question1-radio6").checked = false;
                        document.getElementById("gst-question1-radio7").checked = false;
                    }} onChange={(e) => setAnswerQuestion1(e.target.value)} value="Left Hand was carried out" />
                    <label className="radio-button-label" htmlFor="gst-question1-radio1">Yes</label>
                    <br />
                    <input type="radio" id="gst-question1-radio2" name="question1-yes-no" onClick={function () {
                        document.getElementById("leftHandFieldset").disabled = false;
                    }} onChange={(e) => setAnswerQuestion1("")} />
                    <label className="radio-button-label" htmlFor="gst-question1-radio2">No</label>
                    <br />

                    <fieldset id="leftHandFieldset" className="indented-radio-buttons" disabled={true}>
                        <input type="radio" id="gst-question1-radio3" name="question1-sub-questions" value="No, Attempted but unable" onClick={function () {
                            document.getElementById("left-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question1-radio3">Attempted but unable</label>
                        <br />
                        <input type="radio" id="gst-question1-radio4" name="question1-sub-questions" value="No, Unsafe" onClick={function () {
                            document.getElementById("left-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question1-radio4">Unsafe</label>
                        <br />
                        <input type="radio" id="gst-question1-radio5" name="question1-sub-questions" value="No, Unable to understand command" onClick={function () {
                            document.getElementById("left-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question1-radio5">Unable to understand command</label>
                        <br />
                        <input type="radio" id="gst-question1-radio6" name="question1-sub-questions" value="No, Refused" onClick={function () {
                            document.getElementById("left-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion1(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question1-radio6">Refused</label>
                        <br />
                        <input type="radio" id="gst-question1-radio7" name="question1-sub-questions" value="no, other" onClick={function () {
                            document.getElementById("left-hand-text-box").disabled = false;
                        }} onChange={(e) => setAnswerQuestion1(e.target.value)}/>
                        <label className="radio-button-label" htmlFor="gst-question1-radio7">Other:  </label>
                        <input type="text" id="left-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("Other: " + e.target.value)} />
                        <h3 className="alert" id="question1-other-alert"></h3>
                    </fieldset>
                </form>
                <label className="subtitle">Right Hand</label>
                <form id="question2Form">
                    <p>Grip Strength test carried out on <b>right hand</b>?</p>
                    <h3 className="alert" id="question2-alert"></h3>
                    <div>
                        <input type="radio" id="gst-question2-radio1" name="question2-yes-no" onClick={function () {
                            document.getElementById("rightHandFieldset").disabled = true;
                            document.getElementById("gst-question2-radio3").checked = false;
                            document.getElementById("gst-question2-radio4").checked = false;
                            document.getElementById("gst-question2-radio5").checked = false;
                            document.getElementById("gst-question2-radio6").checked = false;
                            document.getElementById("gst-question2-radio7").checked = false;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)} value="Right hand was carried out" />
                        <label className="radio-button-label" htmlFor="gst-question2-radio1">Yes</label>
                        <br />
                        <input type="radio" id="gst-question2-radio2" name="question2-yes-no" onClick={function () {
                            document.getElementById("rightHandFieldset").disabled = false;
                        }} onChange={(e) => setAnswerQuestion2("")} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio2">No</label>
                    </div>
                    <br />

                    <fieldset id="rightHandFieldset" className="indented-radio-buttons" disabled={true}>
                        <input type="radio" id="gst-question2-radio3" name="question2-sub-questions" value="Attempted but unable" onClick={function () {
                            document.getElementById("right-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio3">Attempted but unable</label>
                        <br />
                        <input type="radio" id="gst-question2-radio4" name="question2-sub-questions" value="Unsafe" onClick={function () {
                            document.getElementById("right-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio4">Unsafe</label>
                        <br />
                        <input type="radio" id="gst-question2-radio5" name="question2-sub-questions" value="Unable to understand command" onClick={function () {
                            document.getElementById("right-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)} />
                        <label className="radio-button-label" htmlFor="gst-question2-radio5">Unable to understand command</label>
                        <br />
                        <input type="radio" id="gst-question2-radio6" name="question2-sub-questions" value="Refused" onClick={function () {
                            document.getElementById("right-hand-text-box").disabled = true;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)} />

                        <label className="radio-button-label" htmlFor="gst-question2-radio6">Refused</label>
                        <br />
                        <input type="radio" id="gst-question2-radio7" name="question2-sub-questions" value="no, other" onClick={function () {
                            document.getElementById("right-hand-text-box").disabled = false;
                        }} onChange={(e) => setAnswerQuestion2(e.target.value)}/>
                        <label className="radio-button-label" htmlFor="gst-question2-radio7">Other:  </label>
                        <input type="text" id="right-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion2("Other: " + e.target.value)} />
                        <h3 className="alert" id="question2-other-alert"></h3>
                    </fieldset>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Submit Results</button>
        </div>
    );
};
export default GripStrength4;