import './TemplatePage.css';

function TemplatePage(){
    return(
        <div className="screen">
            <div className="buttons-section">
                <a href="#" className="back-button">&lt;</a>
                <a href="#" className="help-button">?</a>
            </div>
            <table style={{width:'75%'}}>
            <tr>
                <td style={{
                    textAlign: 'left',
                    width: '33%'
                    }}>
                    <small>
                        [Patient Name]
                    </small>
                </td>
                <td style={{
                    textAlign: 'center',
                    width: '33%'
                    }}>
                    <small>
                        [Date]
                    </small>
                </td>
                <td style={{
                    textAlign: 'right',
                    width: '33%'
                    }}>
                    <small>
                        [MR Name]
                    </small>
                </td>
                
            </tr>
            </table>
            <h1>Title</h1>
            <div className="main-section">
                <h2>Section Title</h2>
                <form>
                    <input type="radio" id="test-radio-button" name="group1" value="value1"/>
                    <label for="test-radio-button">Test Radio 1</label>
                    <br/>
                    <input type="radio" id="test-radio-button2" name="group1" value="value2"/>
                    <label for="test-radio-button2">Test Radio 2</label>
                </form>
                
            </div>
            <a href="#" className="next-button">Next</a>
        </div>
    );
}

export default TemplatePage;