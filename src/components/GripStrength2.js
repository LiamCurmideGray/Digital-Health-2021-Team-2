import './common/TemplatePage.css';

function GripStrength2() {
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
                <a href="" className="help-button" style={{backgroundColor:'green'}}>?</a>
            </div>
            <div className="main-section">
                <label className="subtitle">Test Questions</label>
                <ol>
                    <li>Which hand do you use to sign your name? (This is the <b><u>dominant hand</u></b>)</li>
                    <form>
                        &emsp;&emsp;<input type="radio" id="gst-question1-radio1" name="question1" value="right-hand" />
                        <label className="radio-button-label" for="gst-question1-radio1">Right Hand</label>
                        <br/>
                        &emsp;&emsp;<input type="radio" id="gst-question1-radio2" name="question1" value="left-hand" />
                        <label className="radio-button-label" for="gst-question1-radio2">Left Hand</label>
                    </form>

                    <li>Have you had any recent pain in your hand or wrist or any acute flare-up in your hand or wrist from conditions like arthritis?</li>

                    &emsp;&emsp;<input type="radio" id="gst-question2-radio1" name="question2-yes-no" value="yes" />
                    <label className="radio-button-label" for="gst-question2-radio1">Yes</label>
                    <br/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="radio" id="gst-question2-radio2" name="question2-right-left" value="right-hand" />
                    <label className="radio-button-label" for="gst-question2-radio2">Right Hand</label>
                    <br/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="radio" id="gst-question2-radio3" name="question2-right-left" value="left-hand" />
                    <label className="radio-button-label" for="gst-question2-radio3">Left Hand</label>
                    <br/>
                    &emsp;&emsp;<input type="radio" id="gst-question2-radio4" name="question2-yes-no" value="no" />
                    <label className="radio-button-label" for="gst-question2-radio4">No</label>

                    <p><b>If yes to dominant hand, do not test.</b></p>

                    <li>Have you had any surgery on your hands or arms duing the past 3 months?</li>

                    &emsp;&emsp;<input type="radio" id="gst-question3-radio1" name="question3-yes-no" value="yes" />
                    <label className="radio-button-label" for="gst-question3-radio1">Yes</label>
                    <br/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="radio" id="gst-question3-radio2" name="question3-right-left" value="right-hand" />
                    <label className="radio-button-label" for="gst-question3-radio2">Right Hand</label>
                    <br/>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="radio" id="gst-question3-radio3" name="question3-right-left" value="left-hand" />
                    <label className="radio-button-label" for="gst-question3-radio3">Left Hand</label>
                    <br/>
                    &emsp;&emsp;<input type="radio" id="gst-question3-radio4" name="question3-yes-no" value="no" />
                    <label className="radio-button-label" for="gst-question3-radio4">No</label>

                    <p><b>If yes to dominant hand, do not test.</b></p>
                    <br/><br/>

                    <p>"I would like you to take this in your hand. I will ask you to do this two times, both hands. When I say '<b>GO</b>' press as hard as you can."</p>
                    <p><b>Remember</b> to set the dynamometer to zero (0) prior to each squeeze</p>
                </ol>
                
            </div>
            <a href="" className="next-button">Next</a>
        </div>
    );
}

export default GripStrength2;