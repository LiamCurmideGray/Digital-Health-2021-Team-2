import React, { createContext, useContext, useState } from "react";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  deleteField,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "../../config/fbConfig";

const gripStrengthContext = createContext();

export function GripStrengthDatabaseProvider({ children }) {
    const db = getFirestore();

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;
    const dateString = date.toString();
    let patientId = 1234;
   
    //1234 can be changed accordingly via patientID
    function AllResults(){
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
      addNewEntry();
    }

    async function addNewEntry() {
      console.log("Wasalt fil method ta add new Grip Entry");

      let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
      let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");
  
      let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
      let ActualObjectRightResult = JSON.parse(SessionRightResult);

      await setDoc(doc(db, "patients", patientId.toString(),"SectionB", dateString), {
        GripStrengthResults: {
         Question1: sessionStorage.getItem("question1"),
         Question2: sessionStorage.getItem("question2"),
         Question3: sessionStorage.getItem("question3"),
         Question4: sessionStorage.getItem("question4"),
         Question5: sessionStorage.getItem("question5"),
         MaxLeftHandResult: ActualObjectLeftResult,
         MaxRightHandResult: ActualObjectRightResult,
        },
        TUGTestResults: {
          LevelsOfMobility: {
            PreviousLevelofMobility: sessionStorage.getItem("TUGQuestion1"),
            CurrentLevelofMobility: sessionStorage.getItem("TUGQuestion2")
          },
          RiskOfFallStatus:{
            TimeTakenInSeconds: Number(sessionStorage.getItem("TUGTimer")),
            Status: sessionStorage.getItem("TUGStatus")
          },
          TUGTestCarriedOut: sessionStorage.getItem("TUGTestCarriedOut")
         },
      });
      console.log("Updated Database");
    };

    async function getGenderFromDatabase(){
      const docRef = doc(db, "patients", patientId.toString());
      const docSnap = await getDoc(docRef);
  
      if (docSnap) {
        const patientObject = docSnap.data();
        console.log(patientObject.gender);
        
        return await patientObject.gender;
      } else {
        console.log("No such document!");
      }
    }

  return (
    <gripStrengthContext.Provider value={{addNewEntry, AllResults, getGenderFromDatabase}}>
      {children}
    </gripStrengthContext.Provider>
  );
}

export function useGripContext() {
  return useContext(gripStrengthContext);
}
