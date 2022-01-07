import './common/TemplatePage.css';

function RiskOfFallStatus() {
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
                <a href="/timer" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">Risk of Fall Status</label>
                <label></label>
                <div>
                    <table className="style">
                        <tr>
                            <th className="style">
                                Risk Status
                            </th>
                            <th className="style">
                                Patient Time
                            </th>
                        </tr>
                        <tr>
                            <td className="style">
                                
                            </td>
                            <td className="style">
                        
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <a href="/reviewquestion" className="next-button">Next</a>
        </div>
    );
}

export default RiskOfFallStatus;