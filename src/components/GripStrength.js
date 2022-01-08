import './common/TemplatePage.css';
import GripPhoto from '../resources/Grip Strength Test Equipment.png'
import { useNavigate } from 'react-router-dom';

function GripStrength() {
    const navigate = useNavigate();
    function navToNextPage(){
        navigate("/GripStrength2")
    }
    return (
        <div className="screen">
            <table style={{ width: '75%' }}>
                <tbody>
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
                </tbody>
            </table>
            <div className="buttons-section space-between">
                <a href="/" className="back-button">&lt;</a>
                <label className="title">Grip Strength Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
            </div>
            <img src={GripPhoto} style={{
                padding: 20
            }} />
            <div className="main-section">
                <label className="subtitle">Equipment and Instructions</label>
                <p>Equipment needed:</p>
                <ul>
                    <li>Dynamometer</li>
                </ul>
                <p>Instructions:</p>
                <ul>
                    <li>"In this exercise, I am going to use the dynamometer to test the strength in your hands."</li>
                    <li>"I'll start by asking you a couple of questions first and then we can proceed to the test."</li>
                </ul>
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default GripStrength;