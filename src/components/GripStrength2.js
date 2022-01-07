import './common/TemplatePage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './common/TemplatePage.css';
import { useGripContext } from "./database/GripStrengthDatabase";


const GripStrength2 = () => {

    const { GripStrengthResults2 } = useGripContext();
    const navigate = useNavigate();

    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");
    const [question3, setAnswerQuestion3] = useState("");

    console.log("Question 1: ", question1);
    console.log("Question 2: ", question2);
    console.log("Question 3: ", question3);
    console.log("\n");


    function validateForm() {

        console.log("Entered into the validate form");
        if (question3 == "") {
            document.getElementById("question3-alert").innerHTML = "Please select an option!";
            document.getElementById("question3Form").scrollIntoView(false);
        }
        else{
            document.getElementById("question3-alert").innerHTML = "";
        }
        if (question2 == "") {
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else {
            document.getElementById("question2-alert").innerHTML = "";
        }
        if (question1 == "") {
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else{
            document.getElementById("question1-alert").innerHTML = "";
        }
        if (question1 != "" && question2 != "" && question3 != "") {
            console.log("Passing results to GripStrength");
            GripStrengthResults2(question1, question2, question3);
            navigate("/GripStrength3")
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
                <a href="/GripStrength" className="back-button">&lt;</a>
                <label className="title">Grip Strength Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>
            <div className="main-section">
                <label className="subtitle">Test Questions</label>
                <form>
                    <ol>
                        <form id="question1Form">
                            <li>Which hand do you use to sign your name? (This is the <b><u>dominant hand</u></b>)</li>
                            <h3 class="alert" id="question1-alert"></h3>
                            <input type="radio" id="gst-question1-radio1" name="question1" value="sign name with right-hand" onChange={(e) => setAnswerQuestion1({ name: e.target.name, value: e.target.value })} />
                            <label className="radio-button-label" for="gst-question1-radio1">Right Hand</label>
                            <br />
                            <input type="radio" id="gst-question1-radio2" name="question1" value="sign name with left-hand" onChange={(e) => setAnswerQuestion1({ name: e.target.name, value: e.target.value })} />
                            <label className="radio-button-label" for="gst-question1-radio2">Left Hand</label>
                        </form>

                        <form id="question2Form">
                            <li>Have you had any recent pain in your hand or wrist or any acute flare-up in your hand or wrist from conditions like arthritis?</li>
                            <h3 class="alert" id="question2-alert"></h3>
                            <input type="radio" id="gst-question2-radio1" name="question2-yes-no" onChange={(e) => setAnswerQuestion2("")} onClick={function () {
                                document.getElementById("recentPainFieldset").disabled = false;
                            }} value="yes" />
                            <label className="radio-button-label" for="gst-question2-radio1">Yes</label>
                            <br />
                            <fieldset id="recentPainFieldset" disabled={true}>
                                <input type="radio" id="gst-question2-radio2" name="question2" value="recent pain right-hand" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion2({ name: e.target.name, value: e.target.value })} />
                                <label className="radio-button-label" for="gst-question2-radio2">Right Hand</label>
                                <br />
                                <input type="radio" id="gst-question2-radio3" name="question2" value="recent pain left-hand" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion2({ name: e.target.name, value: e.target.value })} />
                                <label className="radio-button-label" for="gst-question2-radio3">Left Hand</label>
                                <br />
                            </fieldset>
                            <input type="radio" id="gst-question2-radio4" name="question2-yes-no" onClick={function () {
                                document.getElementById("recentPainFieldset").disabled = true;
                                document.getElementById("gst-question2-radio2").checked = false;
                                document.getElementById("gst-question2-radio3").checked = false;
                            }} value="no recent pain on either hand" onChange={(e) => setAnswerQuestion2({ name: e.target.name, value: e.target.value })} />
                            <label className="radio-button-label" for="gst-question2-radio4">No</label>
                            <p><b>If yes to dominant hand, do not test.</b></p>
                        </form>


                        <form id="question3Form">
                            <li>Have you had any surgery on your hands or arms duing the past 3 months?</li>
                            <h3 class="alert" id="question3-alert"></h3>
                            <input type="radio" id="gst-question3-radio1" name="question3-yes-no" onChange={(e) => setAnswerQuestion3("")} onClick={function () {
                                document.getElementById("surgeryFieldset").disabled = false;
                            }} value="yes" />
                            <label className="radio-button-label" for="gst-question3-radio1">Yes</label>
                            <br />
                            <fieldset id="surgeryFieldset" disabled={true}>
                                <input type="radio" id="gst-question3-radio2" name="question3" value="yes recent surgery right-hand" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion3({ name: e.target.name, value: e.target.value })} />
                                <label className="radio-button-label" for="gst-question3-radio2">Right Hand</label>
                                <br />
                                <input type="radio" id="gst-question3-radio3" name="question3" value="yes recent surgery left-hand" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion3({ name: e.target.name, value: e.target.value })} />
                                <label className="radio-button-label" for="gst-question3-radio3">Left Hand</label>
                                <br />
                            </fieldset>
                            <input type="radio" id="gst-question3-radio4" name="question3-yes-no" onClick={function () {
                                document.getElementById("surgeryFieldset").disabled = true;
                                document.getElementById("gst-question3-radio2").checked = false;
                                document.getElementById("gst-question3-radio3").checked = false;
                            }} value="no recent surgery in either hand" onChange={(e) => setAnswerQuestion3({ name: e.target.name, value: e.target.value })} />
                            <label className="radio-button-label" for="gst-question3-radio4">No</label>

                            <p><b>If yes to dominant hand, do not test.</b></p>
                            <br /><br />
                        </form>
                        <p>"I would like you to take this in your hand. I will ask you to do this two times, both hands. When I say '<b>GO</b>' press as hard as you can."</p>
                        <p><b>Remember</b> to set the dynamometer to zero (0) prior to each squeeze</p>
                    </ol>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Next</button>
        </div>
    );
};

export default GripStrength2;