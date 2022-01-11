import './App.css';
import TemplatePage from './components/common/TemplatePage';
import GripStrength from './components/GripStrength';
import GripStrength2 from './components/GripStrength2';
import GripStrength3 from './components/GripStrength3';
import GripStrength4 from './components/GripStrength4';
import HomePage from './components/HomePage';
import Instructions from './components/Instructions';
import LevelsOfMobility from './components/LevelsOfMobility';
import ListOfEquipment from './components/ListOfEquipment';
import ReviewQuestion from './components/ReviewQuestion';
import RiskOfFallStatus from './components/RiskOfFallStatus';
import Timer from './components/Timer';
import Summary from './components/Summary';
import {GripStrengthDatabaseProvider} from './components/database/GripStrengthDatabase';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import GetPatientData from './components/GetPatientData';


function App() {

  return(
    <Container>
      <Row>
        <Col>
        <GripStrengthDatabaseProvider>
          <Routes>
            <Route path="/TemplatePage" element={<TemplatePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/GetPatientData" element={<GetPatientData/>}></Route>

            
                <Route path="/LevelsOfMobility" element={<LevelsOfMobility/>}></Route>
                <Route path="/ListOfEquipment" element={<ListOfEquipment/>}></Route>
                <Route path="/Instructions" element={<Instructions/>}></Route>
                <Route path="/Timer" element={<Timer/>}></Route>
                <Route path="/RiskOfFallStatus" element={<RiskOfFallStatus/>}></Route>
                <Route path="/ReviewQuestion" element={<ReviewQuestion/>}></Route>

                <Route path="/GripStrength" element={<GripStrength/>}></Route>
                <Route path="/GripStrength2" element={<GripStrength2/>}></Route>
                <Route path="/GripStrength3" element={<GripStrength3/>}></Route>
                <Route path="/GripStrength4" element={<GripStrength4/>}></Route>
                <Route path="/Summary" element={<Summary/>}></Route>

          </Routes>
        </GripStrengthDatabaseProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
