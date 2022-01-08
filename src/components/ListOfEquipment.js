import './common/TemplatePage.css';
import TUGPhoto from '../resources/TUG_Test_Setup.png'
import CommonHeader from './common/CommonHeader';
import { Navigate, useNavigate } from 'react-router-dom';

function ListOfEquipment() {
    const navigate = useNavigate();
    const question1 = sessionStorage.getItem("TUGQuestion1");
    const question2 = sessionStorage.getItem("TUGQuestion2");
    console.log(question1);
    console.log(question2);
    if (question1 == "" || question2 == "") {
        return <Navigate to="/LevelsOfMobility" />;
    }
    function navToNextPage(){
        navigate("/Instructions")
    }
    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/LevelsOfMobility" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
                <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
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
                <img src={TUGPhoto} style={{
                    padding: 20
                }} />
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default ListOfEquipment;