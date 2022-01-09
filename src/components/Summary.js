import './common/TemplatePage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGripContext } from "./database/GripStrengthDatabase";
import CommonHeader from './common/CommonHeader';


const Summary = () => {
    const navigate = useNavigate();

    function validateForm() {
        console.log("Results are to be submitted after the SUBMIT is pressed");
        navigate("/");
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
                    <li>Previous level: XX</li>
                    <li>Current level: XX</li>
                </ul>
                <label className="subtitle">Timed Up and Go Test</label>
                <ul>
                    <li>Risk of Fall Status: STATUS; TIME_TAKEN</li>
                    <li>Carried out: YES/NO</li>
                </ul>
                <label className="subtitle">Grip Strength test</label>
                <ul>
                    <li>Left hand: XX</li>
                    <li>Right level: XX</li>
                </ul>
            </div>
            <button className="next-button" onClick={validateForm}>Submit</button>
        </div>
    );
};

export default Summary;