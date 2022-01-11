import logo from '../logo.svg';
import '../App.css';
import './HomePage.css';
import { useGripContext } from "./database/GripStrengthDatabase";

function HomePage() {
  const { addnewGripEntry } = useGripContext();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home Page</h1>
        <p>Click any button to access the respective page</p>
        <a href='/TemplatePage' className='page-button'>Template Page</a>
        <a href='/' className='page-button'>Get Patient Data</a>
        <a href='/LevelsOfMobility' className='page-button'>Levels Of Mobility</a>
        <a href='/ListOfEquipment' className='page-button'>List Of Equipment</a>
        <a href='/Instructions' className='page-button'>Instructions</a>
        <a href='/Timer' className='page-button'>Timer</a>
        <a href='/RiskOfFallStatus' className='page-button'>Risk Of Fall Status</a>
        <a href='/ReviewQuestion' className='page-button'>Review Question</a>
        <a href='/GripStrength' className='page-button'>Grip Strength</a>
        <a href='/GripStrength2' className='page-button'>Grip Strength 2</a>
        <a href='/GripStrength3' className='page-button'>Grip Strength 3</a>
        <a href='/GripStrength4' className='page-button'>Grip Strength 4</a>
        <a href='/Summary' className='page-button'>Summary</a>
        <button className='page-button' onClick={addnewGripEntry}>Test Database</button>
      </header>
    </div>
  );
}
export default HomePage;