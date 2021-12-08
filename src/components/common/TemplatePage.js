import './TemplatePage.css';

function TemplatePage() {
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
                <label className="title">Sample Title</label>
                <a href="#" className="help-button" style={{backgroundColor:'green'}}>?</a>
            </div>
            
            <div className="main-section">
                <label className="subtitle">Section Title</label>
                <form>
                    <div>
                        <input type="radio" id="test-radio-button" name="group1" value="value1" />
                        <label className="radio-button-label" for="test-radio-button">Test Radio 1</label>
                    </div>
                    <div>
                        <input type="radio" id="test-radio-button2" name="group1" value="value2" />
                        <label className="radio-button-label" for="test-radio-button2">Test Radio 2</label>
                    </div>
                    <form>
                        <div>
                            <input type="radio" id="test-radio-button3" name="group2" value="value11" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="test-radio-button3">Indented Radio 1</label>
                        </div>
                        <div>
                            <input type="radio" id="test-radio-button4" name="group2" value="value12" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="test-radio-button4">Indented Radio 2</label>
                        </div>
                    </form>
                </form>

            </div>
            <a href="#" className="next-button">Next</a>
        </div>
    );
}

export default TemplatePage;