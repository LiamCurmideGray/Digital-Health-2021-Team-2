import logo from './logo.svg';
import './App.css';
import TemplatePage from './components/common/TemplatePage';
import GripStrength from './components/GripStrength';
import GripStrength2 from './components/GripStrength2';
import HomePage from './components/HomePage';

function App() {
  function getPages(){
    const route = window.location.pathname;
    if (route === "/GripStrength"){
      return <GripStrength/>;
    }
    else if (route === "/GripStrength2"){
      return <GripStrength2/>;
    }
    else if (route === "/TemplatePage"){
      return <TemplatePage/>;
    }
    return <HomePage/>;
  };
  return getPages();
}

export default App;
