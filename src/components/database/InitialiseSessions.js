
function InitialiseSessions(){

    sessionStorage.setItem("TUGQuestion1", false);
    sessionStorage.setItem("TUGQuestion2", false);
    sessionStorage.setItem("TUGTimer", false);
    sessionStorage.setItem("TUGTestCarriedOut", false);
    sessionStorage.setItem("TUGStatus", false);
    sessionStorage.setItem("Timer", false);
    sessionStorage.setItem("Instructions", false);
    
    sessionStorage.setItem("question1", false);
    sessionStorage.setItem("question2", false);
    sessionStorage.setItem("question3", false);
    sessionStorage.setItem("question4", false);
    sessionStorage.setItem("question5", false);
    sessionStorage.setItem("MaxLeftHandResult", false);
    sessionStorage.setItem("MaxRightHandResult", false);

    //Initialised Session Variables
    console.log("\nGrip Strength Results");
    console.log("Question1: ",sessionStorage.getItem("question1"));
    console.log("Question2: ",sessionStorage.getItem("question2"));
    console.log("Question3: ",sessionStorage.getItem("question3"));
    console.log("Question4: ",sessionStorage.getItem("question4"));
    console.log("Question5: ",sessionStorage.getItem("question5"));

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