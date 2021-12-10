import '../App.css';

function Instructions() {
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
                <a href="/ListOfEquipment" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>

            <div className="main-section">
                <label className="subtitle">Instructions for Clinician</label>
                <div>
                    <ol>
                        <li className="list-item">Equipment: arm chair, tape measure, tape, stopwatch.</li>
                        <li className="list-item">Begin the test with the subject sitting correctly (hips all the way to the back of the seat) in a chair with arm rests. The chair should be stable and positioned such that it will not move when the subject moves from sit to stand. The subject is allowed to use the arm rests during the sit-stand and stand-sit movements</li>
                        <li className="list-item">Place a piece of tape or other marker on the floor 3 meters away from the chair so that it is easily seen by the subject.</li>
                        <li className="list-item">Start timing on the word “GO” and stop timing when the subject is seated again correctly in the chair with their back resting on the back of the chair</li>
                        <li className="list-item">The subject wears their regular footwear, may use any gait aid that they normally use during ambulation, but may not be assisted by another person. There is no time limit. They may stop and rest (but not sit down) if they need to.</li>
                        <li className="list-item">Normal healthy elderly usually complete the task in ten seconds or less. Very frail or weak elderly with poor mobility may take 2 minutes or more.</li>
                        <li className="list-item">The subject should be given a practise trial that is not times, before testing.</li>
                        <li className="list-item">Results correlate with gait speed, balance, functional level, the ability to go out, and can follow change over time.</li>
                    </ol>
                </div>
                <label className="subtitle">Instruction for Patient</label>
                <div>
                    <ol>
                        <li className="list-item">“On the word GO you will stand up, walk to the line on the floor, turn around and walk back to the chair and sit down. Walk at you regular pace.”</li>
                    </ol>
                </div>
            </div>
            <a href="/RiskOfFallStatus" className="next-button">Next</a>
        </div>
    );
}

export default Instructions;