import './common/TemplatePage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGripContext } from "./database/GripStrengthDatabase";
import CommonHeader from './common/CommonHeader';

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
    const { AllResults } = useGripContext();

    function validateForm() {
        console.log("Results are to be submitted after the SUBMIT is pressed");
        AllResults();
        navigate("/");
    }

    let finalLeft = [];
    let finalRight = [];
    let keys = []; 

    if( typeof ActualObjectLeftResult.Risk === 'object' && 
    !Array.isArray(ActualObjectLeftResult.Risk) &&
    ActualObjectLeftResult.Risk !== null) {
       
        for(var k in ActualObjectLeftResult.Risk){
            finalLeft.push(<ul><li>{k} Risk: {ActualObjectLeftResult.Risk[k]}</li></ul>)
        }
    } else {
        finalLeft.push(<ul><li>Risk: {ActualObjectLeftResult.Risk}</li></ul>)
    }


    if( typeof ActualObjectRightResult.Risk === 'object' && 
    !Array.isArray(ActualObjectRightResult.Risk) &&
    ActualObjectRightResult.Risk !== null) {
       
        for(var k in ActualObjectRightResult.Risk){
            finalRight.push(<ul><li>{k} Risk: {ActualObjectRightResult.Risk[k]}</li></ul>)
        }
    } else {
        finalRight.push(<ul><li>Risk: {ActualObjectRightResult.Risk}</li></ul>)
    }


    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                {/* <a href="/GripStrength4" className="back-button">&lt;</a> */}
                <a href=""></a>
                <label className="title">Results</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
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
                   <br/>
                    <li>{ActualObjectRightResult.TestResult}</li>
                    {finalRight}
                </ul>
            </div>
            <button className="next-button" onClick={validateForm}>Submit</button>
        </div>
    );
};

export default Summary;