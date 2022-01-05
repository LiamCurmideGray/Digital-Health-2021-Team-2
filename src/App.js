import './App.css';
import TemplatePage from './components/common/TemplatePage';
import GripStrength from './components/GripStrength';
import GripStrength2 from './components/GripStrength2';
import GripStrength3 from './components/GripStrength3';
import GripStrength4 from './components/GripStrength4';
import GripStrength5 from './components/GripStrength5';
import HomePage from './components/HomePage';
import Instructions from './components/Instructions';
import LevelsOfMobility from './components/LevelsOfMobility';
import ListOfEquipment from './components/ListOfEquipment';
import ReviewQuestion from './components/ReviewQuestion';
import RiskOfFallStatus from './components/RiskOfFallStatus';
import Timer from './components/Timer';

function App() {
  function getPages(){
    const route = window.location.pathname;
    if (route === "/GripStrength"){
      return <GripStrength/>;
    }
    else if (route === "/GripStrength2"){
      return <GripStrength2/>;
    }
    else if (route === "/GripStrength3"){
      return <GripStrength3/>;
    }
    else if (route === "/GripStrength4"){
      return <GripStrength4/>;
    }
    else if (route === "/GripStrength5"){
      return <GripStrength5/>;
    }
    else if (route === "/TemplatePage"){
      return <TemplatePage/>;
    }
    else if (route === "/LevelsOfMobility"){
      return <LevelsOfMobility/>;
    }
    else if (route === "/ListOfEquipment"){
      return <ListOfEquipment/>;
    }
    else if (route === "/Instructions"){
      return <Instructions/>;
    }
    else if (route === "/RiskOfFallStatus"){
      return <RiskOfFallStatus/>;
    }
    else if (route === "/ReviewQuestion"){
      return <ReviewQuestion/>;
    }
    else if (route === "/Timer"){
      return <Timer/>;
    }
    return <HomePage/>;
  };
  return getPages();
}

export default App;
