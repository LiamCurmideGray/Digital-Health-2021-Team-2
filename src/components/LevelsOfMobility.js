import './common/TemplatePage.css';

var group;

function LevelsOfMobility() {
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
                <a href="/" className="back-button">&lt;</a>
                <label className="title">Levels of Mobility</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">1. Previous level of mobility (past six (6) months)</label>
                <form>
                    <div>
                        <input type="radio" id="radio-button-prev-ind-and-unaid" name="group1" value="indepedent-and-unaided" onChange={disableButton()} />
                        <label className="radio-button-label" for="radio-button-prev-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-prev-ind-and-walk-aid" name="group1" value="independent-and-walking-aid" onChange={enableButton()} />
                        <label className="radio-button-label" for="radio-button-prev-ind-and-walk-aid">Independent and Walking Aid</label>
                    </div>
                    <form>
                        <div>
                            <input type="radio" id="radio-button-prev-stick" name="group1-1" value="stick" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-stick">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-roll-frame" name="group1-1" value="rollator-frame" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-roll-frame">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-gutt-frame" name="group1-1" value="gutter-frame" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-gutt-frame">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-prev-other" name="group1-1" value="other" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-prev-other">Other</label>
                        </div>
                    </form>
                </form>
                <label className="subtitle">2. Current level of mobility</label>
                <form>
                    <div>
                        <input type="radio" id="radio-button-curr-ind-and-unaid" name="group2" value="indepedent-and-unaided" onChange={disableButton()} />
                        <label className="radio-button-label" for="radio-button-curr-ind-and-unaid">Independent and Unaided</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-button-curr-ind-and-walk-aid" name="group2" value="independent-and-walking-aid" onChange={enableButton()} />
                        <label className="radio-button-label" for="radio-button-prev-curr-and-walk-aid">Independent and Walking Aid</label>
                    </div>
                    <form>
                        <div>
                            <input type="radio" id="radio-button-curr-stick" name="group2-1" value="stick" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-curr-stick">Stick</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-curr-roll-frame" name="group2-1" value="rollator-frame" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-curr-roll-frame">Rollator Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-curr-gutt-frame" name="group2-1" value="gutter-frame" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-curr-gutt-frame">Gutter Frame</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-button-curr-other" name="group2-1" value="other" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="radio-button-curr-other">Other</label>
                        </div>
                    </form>
                </form>
            </div>
            <a href="/ListOfEquipment" className="next-button">Next</a>
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

export default LevelsOfMobility;