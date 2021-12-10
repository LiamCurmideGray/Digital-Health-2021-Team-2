import logo from '../logo.svg';
import '../App.css';
import './HomePage.css';

function HomePage(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Home Page</h1>
            <p>Click any button to access the respective page</p>
            <a href='/TemplatePage' className='page-button'>Template Page</a>
            <a href='/GripStrength' className='page-button'>Grip Strength</a>
            <a href='/GripStrength2' className='page-button'>Grip Strength 2</a>
          </header>
        </div>
      );
}
export default HomePage;