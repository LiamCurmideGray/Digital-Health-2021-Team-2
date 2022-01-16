import  React  from  "react";
import { Navigate, useNavigate } from  "react-router-dom";

function ProtectedRoute() {
  

  const navigate = useNavigate();
  console.log("\nGrip Strength Results");
  console.log(sessionStorage.getItem("question1"));
  console.log(sessionStorage.getItem("question2"));
  console.log(sessionStorage.getItem("question3"));
  console.log(sessionStorage.getItem("question4"));
  console.log(sessionStorage.getItem("question5"));

  console.log("\nTUG Test Results");
  console.log(sessionStorage.getItem("TUGQuestion1"));
  console.log(sessionStorage.getItem("TUGQuestion2"));
  console.log(sessionStorage.getItem("TUGTimer"));
  console.log(sessionStorage.getItem("TUGTestCarriedOut"));
  console.log(sessionStorage.getItem("TUGStatus"));

  let question1 = sessionStorage.getItem("TUGQuestion1");
  let question2 = sessionStorage.getItem("TUGQuestion2");

  let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
  let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

  let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
  let ActualObjectRightResult = JSON.parse(SessionRightResult);

  console.log("CHECKING \n");
  console.log( question1);
  console.log(question2);

  if (sessionStorage.getItem("PatientData") === '0' || sessionStorage.getItem("PatientData") === null){
    return <Navigate to="/" />
  }
  else if (question1 === 'false' || question2 === 'false') {
    return <Navigate to="/LevelsOfMobility" />;
  }
  else if (sessionStorage.getItem("Instructions") === 'false'){
    return <Navigate to="/ListOfEquipment" />;
  }
  else if (sessionStorage.getItem("Timer") === 'false'){
    return <Navigate to="/Instructions" />;
  }
  else if (sessionStorage.getItem("TUGTimer") === 'false'){
    return <Navigate to="/Timer" />;
  }
  else if (sessionStorage.getItem("TUGStatus") === 'false'){
    return <Navigate to="/RiskOfFallStatus" />;
  }
  else if (sessionStorage.getItem("TUGTestCarriedOut") === 'false'){
    return <Navigate to="/ReviewQuestion" />;
  }
  else if (sessionStorage.getItem("GripStrength2") === 'false'){
    return <Navigate to="/GripStrength" />;
  }
  else if (sessionStorage.getItem("question1") === 'false' || sessionStorage.getItem("question2") === 'false'){
    return <Navigate to="/GripStrength2" />;
  }
  else if (sessionStorage.getItem("question4") === 'false' || sessionStorage.getItem("question5") === 'false'){
    return <Navigate to="/GripStrength4" />;
  }
  else {
    console.log("THIS WASN'T FIRED");
  }

}

export default ProtectedRoute;
