import './common/TemplatePage.css';

function GripStrength3() {
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
                <a href="" className="back-button">&lt;</a>
                <label className="title">Grip Strength Test</label>
                <a href="" className="help-button" style={{backgroundColor:'green'}}>?</a>
            </div>
            <div className="main-section">
                <label className="subtitle">Left Hand</label>
                <form>
                    <ol>
                        <form>
                            <li>Grip Strength test carried out on <b>left hand</b>?</li>
                            <input type="radio" id="gst-question1-radio1" name="question1-yes-no" onClick={function(){
                                var radio1 = document.getElementById("gst-question1-radio3");
                                var radio2 = document.getElementById("gst-question1-radio4");
                                var radio3 = document.getElementById("gst-question1-radio5");
                                var radio4 = document.getElementById("gst-question1-radio6");
                                var radio5 = document.getElementById("gst-question1-radio7");

                                radio1.disabled = true;
                                radio1.checked = false;
                                radio2.disabled = true;
                                radio2.checked = false;
                                radio3.disabled = true;
                                radio3.checked = false;
                                radio4.disabled = true;
                                radio4.checked = false;
                                radio5.disabled = true;
                                radio5.checked = false;
                            }} value="yes" />
                            <label className="radio-button-label" for="gst-question1-radio1">Yes</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio2" name="question1-yes-no" onClick={function(){
                                var radio1 = document.getElementById("gst-question1-radio3");
                                var radio2 = document.getElementById("gst-question1-radio4");
                                var radio3 = document.getElementById("gst-question1-radio5");
                                var radio4 = document.getElementById("gst-question1-radio6");
                                var radio5 = document.getElementById("gst-question1-radio7");

                                radio1.disabled = false;
                                radio2.disabled = false;
                                radio3.disabled = false;
                                radio4.disabled = false;
                                radio5.disabled = false;
                            }} value="no" />
                            <label className="radio-button-label" for="gst-question1-radio2">No</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio3" name="question1-sub-questions" value="attempted-unable" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question1-radio3">Attempted but unable</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio4" name="question1-sub-questions" value="unsafe" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question1-radio4">Unsafe</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio5" name="question1-sub-questions" value="unable-to-understand" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question1-radio5">Unable to understand</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio6" name="question1-sub-questions" value="refused" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question1-radio6">Refused</label>
                            <br/>
                            <input type="radio" id="gst-question1-radio7" name="question1-sub-questions" value="other" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question1-radio7">Other:  </label>
                            <input type="text" id="left-hand-text-box" />
                        </form>
                    </ol>
                </form>

                <label className="subtitle">Right Hand</label>
                <form>
                    <ol>
                        <form>
                            <li>Grip Strength test carried out on <b>right hand</b>?</li>
                            <input type="radio" id="gst-question2-radio1" name="question2-yes-no" onClick={function(){
                                var radio1 = document.getElementById("gst-question2-radio3");
                                var radio2 = document.getElementById("gst-question2-radio4");
                                var radio3 = document.getElementById("gst-question2-radio5");
                                var radio4 = document.getElementById("gst-question2-radio6");
                                var radio5 = document.getElementById("gst-question2-radio7");

                                radio1.disabled = true;
                                radio1.checked = false;
                                radio2.disabled = true;
                                radio2.checked = false;
                                radio3.disabled = true;
                                radio3.checked = false;
                                radio4.disabled = true;
                                radio4.checked = false;
                                radio5.disabled = true;
                                radio5.checked = false;
                            }} value="yes" />
                            <label className="radio-button-label" for="gst-question2-radio1">Yes</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio2" name="question2-yes-no" onClick={function(){
                                var radio1 = document.getElementById("gst-question2-radio3");
                                var radio2 = document.getElementById("gst-question2-radio4");
                                var radio3 = document.getElementById("gst-question2-radio5");
                                var radio4 = document.getElementById("gst-question2-radio6");
                                var radio5 = document.getElementById("gst-question2-radio7");

                                radio1.disabled = false;
                                radio2.disabled = false;
                                radio3.disabled = false;
                                radio4.disabled = false;
                                radio5.disabled = false;
                            }} value="no" />
                            <label className="radio-button-label" for="gst-question2-radio2">No</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio3" name="question2-sub-questions" value="attempted-unable" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question2-radio3">Attempted but unable</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio4" name="question2-sub-questions" value="unsafe" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question2-radio4">Unsafe</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio5" name="question2-sub-questions" value="unable-to-understand" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question2-radio5">Unable to understand</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio6" name="question2-sub-questions" value="refused" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question2-radio6">Refused</label>
                            <br/>
                            <input type="radio" id="gst-question2-radio7" name="question2-sub-questions" value="other" disabled={true} style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="gst-question2-radio7">Other:  </label>
                            <input type="text" id="right-hand-text-box" />
                        </form>
                    </ol>
                </form>
            </div>
            <a href="" className="next-button" onclick={validateForm()}>Next</a>
        </div>
    );
}
function validateForm(){
    
}
export default GripStrength3;