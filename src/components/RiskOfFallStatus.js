import CommonHeader from './common/CommonHeader';
import './common/TemplatePage.css';

function RiskOfFallStatus() {
    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/timer" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">Risk of Fall Status</label>
                <ul>
                    <li>Status: XX</li>
                    <li>Time taken: XX</li>
                </ul>
                <label className='subtitle'></label>
                <div>
                    <table className="style">
                        <tbody>
                            <tr>
                                <th className="style">
                                    Risk of Falls
                                </th>
                                <th className="style">
                                    Normative Reference Value
                                </th>
                            </tr>
                            <tr>
                                <td className="style">
                                    Low Risk
                                </td>
                                <td className="style">
                                    &lt;10 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    Medium Risk
                                </td>
                                <td className="style">
                                    11- 14 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    Hight Risk
                                </td>
                                <td className="style">
                                    &gt;15 seconds
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href="/reviewquestion" className="next-button">Next</a>
        </div>
    );
}

export default RiskOfFallStatus;