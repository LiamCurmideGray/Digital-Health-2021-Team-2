import './common/TemplatePage.css';
import TUGPhoto from '../resources/TUG_Test_Setup.png'
import CommonHeader from './common/CommonHeader';

function ListOfEquipment() {
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
            }}/>
            </div>
            <a href="/Instructions" className="next-button">Next</a>
        </div>
    );
}

export default ListOfEquipment;