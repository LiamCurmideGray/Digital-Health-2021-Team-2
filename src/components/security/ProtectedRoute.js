import  React  from  "react";
import { useNavigate } from  "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const navigate = useNavigate();

  //GripStrength Session Variables
// console.log(sessionStorage.getItem("question1"));
// console.log(sessionStorage.getItem("question2"));
// console.log(sessionStorage.getItem("question3"));
// console.log(sessionStorage.getItem("question4"));
// console.log(sessionStorage.getItem("question5"));

// //TUG Test Results Variables
// console.log(sessionStorage.getItem("TUGQuestion1"));
// console.log(sessionStorage.getItem("TUGQuestion2"));
// console.log(sessionStorage.getItem("TUGTimer"));
// console.log(sessionStorage.getItem("TUGStatus"));
// console.log(sessionStorage.getItem("TUGTestCarriedOut"));

// console.log("\n");
// console.log(children);
// console.log(children.props.children[2].props.path);
// console.log(children[0].props.path);
let path = children.props.children[2].props.path;
var num = 0;


  if (num == 5) {
    return  children.props.children[2];
  } else {
    return children;
  }
};

export default ProtectedRoute;
