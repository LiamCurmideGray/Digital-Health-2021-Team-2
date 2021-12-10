import './common/TemplatePage.css';


var group;

function ReviewQuestion() {
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
                <a href="#" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="#" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">TUG Test Carried out</label>
                <form>
                    <div>
                        <input type="radio" id="radio-button-yes" name="group1" value="yes" onChange={disableButton()} />
                        <label className="radio-button-label" for="radio-button-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-no" name="group1" value="no" onChange={enableButton()} />
                        <label className="radio-button-label" for="radio-button-no">No</label>
                    </div>
                    <form>
                        <div>
                            <input type="radio" id="radio-button-att" name="group1-1" value="attempted-but-unable" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-att">Attempted, but unable</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unsafe" name="group1-1" value="unsafe" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-unsafe">Unsafe</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-unable" name="group1-1" value="unable" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-unable">Unable to understand command</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-refused" name="group1-1" value="refused" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-refused">Refused</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-other">Other</label>
                        </div>
                    </form>
                </form>
            </div>
            <a href="#" className="next-button">Complete TUG Test</a>
        </div>
    );
}

function disableButton(id) {

    if (id === "radio-button-prev-ind-and-unaid") {
        group = document.getElementsByName("group1-1");
    }
    else {
        group = document.getElementsByName("group1-2");
    }

    for (var i = 0; i < group.length - 1; i++) {
        group[i].disabled = true;
    }
}

function enableButton(id) {

    if (id === "radio-button-prev-ind-and-unaid") {
        group = document.getElementsByName("group1-1");
    }
    else {
        group = document.getElementsByName("group1-2");
    }

    for (var i = 0; i < group.length - 1; i++) {
        group[i].disabled = false;
    }
}

export default ReviewQuestion;