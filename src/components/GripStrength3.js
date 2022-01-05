import './common/TemplatePage.css';
import React from 'react';

function GripStrength3() {
    const [disable, setDisable] = React.useState(true);
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
                <a href="/GripStrength2" className="back-button">&lt;</a>
                <label className="title">Grip Strength Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>
            <div className="main-section" onChange={validateForm()}>
                <label className="subtitle">Left Hand</label>
                <form>
                    <ol>
                        <form>
                            <li>Grip Strength test carried out on <b>left hand</b>?</li>
                            <div>
                                <input type="radio" id="gst-question1-radio1" name="question1-yes-no" onClick={function () {
                                    document.getElementById("leftHandFieldset").disabled = true;
                                }} value="yes" />
                                <label className="radio-button-label" for="gst-question1-radio1">Yes</label>
                                <br />
                                <input type="radio" id="gst-question1-radio2" name="question1-yes-no" onClick={function () {
                                    document.getElementById("leftHandFieldset").disabled = false;
                                }} value="no" />
                                <label className="radio-button-label" for="gst-question1-radio2">No</label>
                            </div>
                            <br />

                            <fieldset id="leftHandFieldset" disabled={true}>
                                <input type="radio" id="gst-question1-radio3" name="question1-sub-questions" value="attempted-unable" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio3">Attempted but unable</label>
                                <br />
                                <input type="radio" id="gst-question1-radio4" name="question1-sub-questions" value="unsafe" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio4">Unsafe</label>
                                <br />
                                <input type="radio" id="gst-question1-radio5" name="question1-sub-questions" value="unable-to-understand" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio5">Unable to understand</label>
                                <br />
                                <input type="radio" id="gst-question1-radio6" name="question1-sub-questions" value="refused" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio6">Refused</label>
                                <br />
                                <input type="radio" id="gst-question1-radio7" name="question1-sub-questions" value="other" onClick={function () {
                                    document.getElementById("left-hand-text-box").disabled = false;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question1-radio7">Other:  </label>
                                <input type="text" id="left-hand-text-box" disabled={true} />
                            </fieldset>
                        </form>
                    </ol>
                </form>

                <label className="subtitle">Right Hand</label>
                <form>
                    <ol>
                        <form>
                            <li>Grip Strength test carried out on <b>right hand</b>?</li>
                            <div>
                                <input type="radio" id="gst-question2-radio1" name="question2-yes-no" onClick={function () {
                                    document.getElementById("rightHandFieldset").disabled = true;
                                }} value="yes" />
                                <label className="radio-button-label" for="gst-question2-radio1">Yes</label>
                                <br />
                                <input type="radio" id="gst-question2-radio2" name="question2-yes-no" onClick={function () {
                                    document.getElementById("rightHandFieldset").disabled = false;
                                }} value="no" />
                                <label className="radio-button-label" for="gst-question2-radio2">No</label>
                            </div>
                            <br />

                            <fieldset id="rightHandFieldset" disabled={true}>
                                <input type="radio" id="gst-question2-radio3" name="question2-sub-questions" value="attempted-unable" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio3">Attempted but unable</label>
                                <br />
                                <input type="radio" id="gst-question2-radio4" name="question2-sub-questions" value="unsafe" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio4">Unsafe</label>
                                <br />
                                <input type="radio" id="gst-question2-radio5" name="question2-sub-questions" value="unable-to-understand" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio5">Unable to understand</label>
                                <br />
                                <input type="radio" id="gst-question2-radio6" name="question2-sub-questions" value="refused" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = true;
                                }} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio6">Refused</label>
                                <br />
                                <input type="radio" id="gst-question2-radio7" name="question2-sub-questions" onClick={function () {
                                    document.getElementById("right-hand-text-box").disabled = false;
                                }} value="other" disabled={false} style={{ marginLeft: "7.5em" }} />
                                <label className="radio-button-label" for="gst-question2-radio7">Other:  </label>
                                <input type="text" id="right-hand-text-box" disabled={true} />
                            </fieldset>
                        </form>
                    </ol>
                </form>
            </div>
            <a href="" className="next-button" onclick={validateForm()}>Next</a>
        </div>
    );
}
function validateForm() {
    // var foo = document.getElementById("gst-question1-radio1");
    // if (foo){
    //     console.log("AAAAAAAAAA");
    // }
}
export default GripStrength3;