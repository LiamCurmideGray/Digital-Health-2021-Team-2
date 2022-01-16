function CommonHeader(Title) {

    let patientName = null;
    let patientData = sessionStorage.getItem("PatientData");

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    const dateString = date.toString();
    if(patientData != null) {
        
        let actualPatientData = JSON.parse(patientData);
        patientName = actualPatientData.name;
    } else {
        patientName = "No PATIENT"
    }

    return (
        <table style={{ width: '75%' }}>
            <tbody>
                <tr>
                    <td style={{
                        textAlign: 'left',
                        width: '33%'
                    }}>
                        <label className="details">
                           Patient: {patientName}
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'center',
                        width: '33%'
                    }}>
                        <label className="details">
                            {dateString}
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'right',
                        width: '33%'
                    }}>
                        <label className="details">
                           Doctor: Who
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default CommonHeader;