import './common/TemplatePage.css';
import CommonHeader from './common/CommonHeader';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LevelsOfMobility() {

    const [question1, setAnswerQuestion1] = useState("");
    const [question2, setAnswerQuestion2] = useState("");
    sessionStorage.setItem("TUGQuestion1", question1);
    sessionStorage.setItem("TUGQuestion2", question2);
    const navigate = useNavigate();

    console.log("Previous Level of Mobility", question1);
    console.log("Current Level of Mobility", question2);
    console.log("\n");

    function validateForm() {

        if (question2 == "") {
            document.getElementById("question2-alert").innerHTML = "Please select an option!";
            document.getElementById("question2Form").scrollIntoView();
        }
        else if (question2 == "other" || question2 == "independent-with-walking-aid with ") {
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
        else if (question1 == "other" || question1 == "independent-with-walking-aid with ") {
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }

        if ((question1 != "" && question2 != "") && (question1 != "other" && question2 != "other")) {
            sessionStorage.setItem("TUGQuestion1", "Previous Level of Mobility " + question1);
            sessionStorage.setItem("TUGQuestion2", "Current Level of Mobility " + question2);
            navigate("/ListOfEquipment");
        }
    }

    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/" className="back-button">&lt;</a>
                <label className="title">Levels of Mobility</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <form id="question1Form">
                    <label className="subtitle">1. Previous level of mobility (past six (6) months)</label>
                    <h3 className="alert" id="question1-alert"></h3>
                    <div>
                        <input type="radio" id="radio-button1-prev-ind-and-unaid" name="group1" value="independent-and-unaided" onChange={(e) => setAnswerQuestion1(e.target.value)}
                            onClick={function () {
                                document.getElementById("PreviousLevelOfMobilityFieldset").disabled = true;
                                document.getElementById("radio-button-prev-stick").checked = false;
                                document.getElementById("radio-button-prev-roll-frame").checked = false;
                                document.getElementById("radio-button-prev-gutt-frame").checked = false;
                                document.getElementById("radio-button-prev-other").checked = false;
                            }} />
                        <label className="radio-button-label" htmlFor="radio-button1-prev-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <input type="radio" id="radio-button1-prev-ind-and-walk-aid" name="group1" value="independent-with-walking-aid" onChange={(e) => setAnswerQuestion1("")}
                        onClick={function () {
                            document.getElementById("PreviousLevelOfMobilityFieldset").disabled = false;
                        }} />

                    <label className="radio-button-label" htmlFor="radio-button1-prev-ind-and-walk-aid">Independent with Walking Aid</label>

                    <fieldset id="PreviousLevelOfMobilityFieldset" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-prev-stick" name="group1-1" value="stick" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion1("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-stick">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-roll-frame" name="group1-1" value="rollator-frame" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion1("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-roll-frame">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-gutt-frame" name="group1-1" value="gutter-frame" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion1("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-gutt-frame">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" style={{ marginLeft: "7.5em" }} onClick={function () {
                                document.getElementById("left-hand-text-box").disabled = false;
                            }} onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other">Other: </label>
                            <input type="text" id="left-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("independent-with-walking-aid with " + e.target.value)} />
                            <h3 className="alert" id="question1-other-alert"></h3>

                        </div>
                    </fieldset>
                </form>
                <form id="question2Form">
                    <label className="subtitle">2. Current level of mobility</label>
                    <h3 className="alert" id="question2-alert"></h3>
                    <div>
                        <input type="radio" id="radio-button2-prev-ind-and-unaid" name="group2" value="independent-and-unaided" onChange={(e) => setAnswerQuestion2(e.target.value)}
                            onClick={function () {
                                document.getElementById("CurrentLevelofMobilityFieldset").disabled = true;
                                document.getElementById("radio-button-prev-stick2").checked = false;
                                document.getElementById("radio-button-prev-roll-frame2").checked = false;
                                document.getElementById("radio-button-prev-gutt-frame2").checked = false;
                                document.getElementById("radio-button-prev-other2").checked = false;
                            }} />
                        <label className="radio-button-label" htmlFor="radio-button2-prev-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <input type="radio" id="radio-button2-prev-ind-and-walk-aid" name="group2" value="independent-with-walking-aid" onChange={(e) => setAnswerQuestion2("")}
                        onClick={function () {
                            document.getElementById("CurrentLevelofMobilityFieldset").disabled = false;
                        }} />

                    <label className="radio-button-label" htmlFor="radio-button2-prev-ind-and-walk-aid">Independent with Walking Aid</label>

                    <fieldset id="CurrentLevelofMobilityFieldset" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-prev-stick2" name="group2-1" value="stick" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion2("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-stick">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-roll-frame2" name="group2-1" value="rollator-frame" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion2("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-roll-frame">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-gutt-frame2" name="group2-1" value="gutter-frame" style={{ marginLeft: "7.5em" }} onChange={(e) => setAnswerQuestion2("independent-with-walking-aid with " + e.target.value)} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-gutt-frame">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other2" name="group2-1" value="other" style={{ marginLeft: "7.5em" }} onClick={function () {
                                document.getElementById("left-hand-text-box2").disabled = false;
                            }} onChange={(e) => setAnswerQuestion2(e.target.value)} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" htmlFor="radio-button-prev-other2">Other: </label>
                            <input type="text" id="left-hand-text-box2" disabled={true} onBlur={(e) => setAnswerQuestion2("independent-with-walking-aid with " + e.target.value)} />
                            <h3 className="alert" id="question2-other-alert"></h3>

                        </div>
                    </fieldset>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Next</button>
        </div>
    );
}



export default LevelsOfMobility;