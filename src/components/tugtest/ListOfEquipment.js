import 'C:\\Users\\Owner\\OneDrive\\Documents\\GitHub\\Digital-Health-2021-Team-2\\src\\components\\common\\TemplatePage.css';

function ListOfEquipment() {
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
                <label className="subtitle">List of Equipment</label>
                <div>
                    <ul>
                        <li className="list-item">Arm-chair</li>
                        <li className="list-item">Tape measure</li>
                        <li className="list-item">Tape</li>
                    </ul>
                </div>
                <label className="subtitle">Setup of Test</label>
                {/* <img src="" className=""> */}
            </div>
            <a href="#" className="next-button">Next</a>
        </div>
    );
}

export default ListOfEquipment;