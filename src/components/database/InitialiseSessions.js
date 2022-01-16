
function InitialiseSessions(){

    sessionStorage.setItem("TUGQuestion1", '');
    sessionStorage.setItem("TUGQuestion2", '');
    sessionStorage.setItem("TUGTimer", '');
    sessionStorage.setItem("TUGTestCarriedOut", '');
    sessionStorage.setItem("GripStrength2", false);
    sessionStorage.setItem("TUGStatus", '');
    sessionStorage.setItem("Timer", false);
    sessionStorage.setItem("Instructions", false);
    sessionStorage.setItem("RiskOfFallStatus", false);
    
    sessionStorage.setItem("question1", '');
    sessionStorage.setItem("question2", '');
    sessionStorage.setItem("question3", '');
    sessionStorage.setItem("question4", '');
    sessionStorage.setItem("question5", '');
    sessionStorage.setItem("MaxLeftHandResult", false);
    sessionStorage.setItem("MaxRightHandResult", false);

    //Initialised Session Variables
    console.log("\nGrip Strength Results");
    console.log("Question1: ",sessionStorage.getItem("question1"));
    console.log("Question2: ",sessionStorage.getItem("question2"));
    console.log("Question3: ",sessionStorage.getItem("question3"));
    console.log("Question4: ",sessionStorage.getItem("question4"));
    console.log("Question5: ",sessionStorage.getItem("question5"));
    console.log("GST: ",sessionStorage.getItem("GripStrength2"));

    console.log("\nTUG Test Results");
    console.log("TUG Previous Mobility: ",sessionStorage.getItem("TUGQuestion1"));
    console.log("TUG Current Mobility: ",sessionStorage.getItem("TUGQuestion2"));
    console.log("TUG Time: ",sessionStorage.getItem("TUGTimer"));
    console.log("TUG Carried Out:", sessionStorage.getItem("TUGTestCarriedOut"));
    console.log("TUG Status: ",sessionStorage.getItem("TUGStatus"));
    console.log("Timer: ",sessionStorage.getItem("Timer"));
    console.log("Instructions: ", sessionStorage.getItem("Instructions"));

    let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
    let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");
    console.log("Session Right Result: ", SessionRightResult );
    console.log("Session Left Result:", SessionLeftResult );

}

export default InitialiseSessions;