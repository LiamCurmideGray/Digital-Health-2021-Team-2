import './common/TemplatePage.css';
import CommonHeader from './common/CommonHeader';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function ReviewQuestion() {

    const [question1, setAnswerQuestion1] = useState("");
    const navigate = useNavigate();

    console.log(question1);

    function validateForm(){
        if (question1 == "") {
            document.getElementById("question1-alert").innerHTML = "Please select an option!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else if (question1 == "other" || question1 == "independent-and-walking-aid with "){
            document.getElementById("question1-other-alert").innerHTML = "Please input a reason!";
            document.getElementById("question1Form").scrollIntoView();
        }
        else {
            document.getElementById("question1-alert").innerHTML = "";
            document.getElementById("question1-other-alert").innerHTML = "";
        }

        if (question1 != "" && question1 != "other" ) {
           
            sessionStorage.setItem("TUGTestCarriedOut", "Previous Level of Mobility " + question1);
            navigate("/");
        }
    }
    return (
        <div className="screen">
           {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/RiskOfFallStatus" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">TUG Test Carried out</label>
                <form>
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
                        <label className="radio-button-label" for="radio-button-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-no" name="group1" value="no"
                        onClick={function () {
                            document.getElementById("TUGTestCarriedOut").disabled = false; }}/>

                        <label className="radio-button-label" for="radio-button-no">No</label>
                    </div>
                    <fieldset id="TUGTestCarriedOut" disabled={true}>
                        <div>
                            <input type="radio" id="radio-button-att" name="group1-1" value="TUG Test Carried out: No, Reason: attempted-but-unable" style={{ marginLeft: "7.5em" }} 
                            onChange={(e) => setAnswerQuestion1(e.target.value)}/>
                            <label className="radio-button-label" for="radio-button-att">Attempted, but unable</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unsafe" name="group1-1" value="TUG Test Carried out: No, Reason: unsafe" style={{ marginLeft: "7.5em" }} 
                            onChange={(e) => setAnswerQuestion1(e.target.value)}/>
                            <label className="radio-button-label" for="radio-button-unsafe">Unsafe</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unable" name="group1-1" value="TUG Test Carried out: No, Reason: unable" style={{ marginLeft: "7.5em" }} 
                            onChange={(e) => setAnswerQuestion1(e.target.value)}/>
                            <label className="radio-button-label" for="radio-button-unable">Unable to understand command</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-refused" name="group1-1" value="TUG Test Carried out: No, Reason: refused" style={{ marginLeft: "7.5em" }} 
                            onChange={(e) => setAnswerQuestion1(e.target.value)}/>
                            <label className="radio-button-label" for="radio-button-refused">Refused</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" style={{ marginLeft: "7.5em" }} onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = false;
                                }}  onChange={(e) => setAnswerQuestion1(e.target.value)} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-other">Other:</label>
                            <input type="text" id="left-hand-text-box" disabled={true} onBlur={(e) => setAnswerQuestion1("TUG Test Carried out: No, Reason: " + e.target.value)} />
                            <h3 class="alert" id="question1-other-alert"></h3>

                        </div>
                    </fieldset>
                </form>
            </div>
            <button className="next-button" onClick={validateForm}>Complete TUG Test</button>
        </div>
    );
}

export default ReviewQuestion;