import  React  from  "react";
import { useNavigate } from  "react-router-dom";

const ProtectedRoute = ({ children }) => {

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
  console.log(sessionStorage.getItem("TUGStatus"));
  console.log(sessionStorage.getItem("TUGTestCarriedOut"));

  let question1 = sessionStorage.getItem("TUGQuestion1");
  let question2 = sessionStorage.getItem("TUGQuestion2");

  let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
  let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");

  let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
  let ActualObjectRightResult = JSON.parse(SessionRightResult);

  console.log("CHECKING \n");
  console.log( question1);
  console.log(question2);
  if (question1 == "" || question2 == "") {
    console.log("THIS WAS FIRED");
    return <Navigate to="/LevelsOfMobility" />;
    // return navigate("/LevelsOfMobility");
  }
  
  else {
    console.log("THIS WASN'T FIRED");
  }
};

export default ProtectedRoute;
