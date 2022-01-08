import './common/TemplatePage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './common/TemplatePage.css';
import { useGripContext } from "./database/GripStrengthDatabase";

const GripStrength4 = () => {

    const { addnewGripEntry } = useGripContext();
    const navigate = useNavigate();

    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");

    console.log("Question 1: ", question1);
    console.log("Question 2: ", question2);
    console.log("\n");


    function validateForm() {

        console.log("Entered into the validate form");
        if (question2 == "") {
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else if (question2.value == "no, other" || question2.value == "no, reason: "){
            document.getElementById("question2-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else {
            document.getElementById("question2-alert").innerHTML = "";
            document.getElementById("question2-other-alert").innerHTML = "";
        }
        if (question1 == "") {
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question1.value == "no, other" || question1.value == "no, reason: "){
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }
        if (question1 != "" && question2 != "") {
            console.log("Passing results to GripStrength");
            sessionStorage.setItem("question4", question1);
            sessionStorage.setItem("question5", question2);
            addnewGripEntry();
            navigate("");
        }
    }


    return (
        <div className="screen">
            <table style={{ width: '75%' }}>
                <tr>
                    <td style={{
                        textAlign: 'left',
                        width: '33%'
                    }}>
                        <label className="details">
                            [Patient Name]
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'center',
                        width: '33%'
                    }}>
                        <label className="details">
                            [Date]
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'right',
                        width: '33%'
                    }}>
                        <label className="details">
                            [MR Name]
                        </label>
                    </td>

                </tr>
            </table>
            <div className="buttons-section space-between">
                <a href="/GripStrength3" className="back-button">&lt;</a>
                <label className="title">Grip Strength Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>
            <div className="main-section">
                <label className="subtitle">Left Hand</label>
                <form>
                    <ol>
                        <form id="question1Form">
                            <li>Grip Strength test carried out on <b>left hand</b>?</li>
                            <h3 class="alert" id="question1-alert"></h3>
                            <input type="radio" id="gst-question1-radio1" name="question1-yes-no" onClick={function () {
                                document.getElementById("leftHandFieldset").disabled = true;
                                document.getElementById("gst-question1-radio3").checked = false;
                                document.getElementById("gst-question1-radio4").checked = false;
                                document.getElementById("gst-question1-radio5").checked = false;
                                document.getElementById("gst-question1-radio6").checked = false;
                                document.getElementById("gst-question1-radio7").checked = false;
                            }} onChange={(e) => setAnswerQuestion1(e.target.value)} value="grip strength test carried out on left hand" />
                            <label className="radio-button-label" for="gst-question1-radio1">Yes</label>
                            <br />
                            <input type="radio" id="gst-question1-radio2" name="question1-yes-no" onClick={function () {
                                document.getElementById("leftHandFieldset").disabled = false;
                            }} onChange={(e) => setAnswerQuestion1("")}/>
                            <label className="radio-button-label" for="gst-question1-radio2">No</label>
                            <br />

                            <fieldset id="leftHandFieldset" disabled={true}>
                                <input type="radio" id="gst-question1-radio3" name="question1-sub-questions" value="no, attempted but unable" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio3">Attempted but unable</label>
                                <br />
                                <input type="radio" id="gst-question1-radio4" name="question1-sub-questions" value="no, unsafe" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio4">Unsafe</label>
                                <br />
                                <input type="radio" id="gst-question1-radio5" name="question1-sub-questions" value="no, unable to understand" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio5">Unable to understand</label>
                                <br />
                                <input type="radio" id="gst-question1-radio6" name="question1-sub-questions" value="no, refused" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio6">Refused</label>
                                <br />
                                <input type="radio" id="gst-question1-radio7" name="question1-sub-questions" value="no, other" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = false;
                                }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio7">Other:  </label>
                                <input type="text" id="left-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("no, reason: " + e.target.value)} />
                                <h3 class="alert" id="question1-other-alert"></h3>
                            </fieldset>
                        </form>
                    </ol>
                </form>

                <label className="subtitle">Right Hand</label>
                <form>
                    <ol>
                        <form id="question2Form">
                            <li>Grip Strength test carried out on <b>right hand</b>?</li>
                            <h3 class="alert" id="question2-alert"></h3>
                            <div>
                                <input type="radio" id="gst-question2-radio1" name="question2-yes-no" onClick={function () {
                                    document.getElementById("rightHandFieldset").disabled = true;
                                    document.getElementById("gst-question2-radio3").checked = false;
                                    document.getElementById("gst-question2-radio4").checked = false;
                                    document.getElementById("gst-question2-radio5").checked = false;
                                    document.getElementById("gst-question2-radio6").checked = false;
                                    document.getElementById("gst-question2-radio7").checked = false;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} value="grip strength test carried out on right hand" />
                                <label className="radio-button-label" for="gst-question2-radio1">Yes</label>
                                <br />
                                <input type="radio" id="gst-question2-radio2" name="question2-yes-no" onClick={function () {
                                    document.getElementById("rightHandFieldset").disabled = false;
                                }} onChange={(e) => setAnswerQuestion2("")}  />
                                <label className="radio-button-label" for="gst-question2-radio2">No</label>
                            </div>
                            <br />

                            <fieldset id="rightHandFieldset" disabled={true}>
                                <input type="radio" id="gst-question2-radio3" name="question2-sub-questions" value="attempted-unable" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio3">Attempted but unable</label>
                                <br />
                                <input type="radio" id="gst-question2-radio4" name="question2-sub-questions" value="unsafe" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio4">Unsafe</label>
                                <br />
                                <input type="radio" id="gst-question2-radio5" name="question2-sub-questions" value="unable-to-understand" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio5">Unable to understand</label>
                                <br />
                                <input type="radio" id="gst-question2-radio6" name="question2-sub-questions" value="refused" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} style={{ marginLeft: "7.5em" }} />

                                <label className="radio-button-label" for="gst-question2-radio6">Refused</label>
                                <br />
                                <input type="radio" ild="gst-question2-radio7" name="question2-sub-questions" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = false;
                                }} onChange={(e) => setAnswerQuestion2(e.target.value)} value="no, other" disabled={false} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio7">Other:  </label>
                                <input type="text" id="right-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion2("no, reason: " + e.target.value)} />
                                <h3 class="alert" id="question2-other-alert"></h3>
                            </fieldset>
                        </form>
                    </ol>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Submit Results</button>
        </div>
    );
};
export default GripStrength4;