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
  getDocs,
} from "firebase/firestore";
import db from "../../config/fbConfig";

const gripStrengthContext = createContext();

export function GripStrengthDatabaseProvider({ children }) {
    const db = getFirestore();

    const todaysSession = Date.now();
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;
    const dateString = date.toString();
    // const dateString = todaysSession.toString();
    let patientId = sessionStorage.getItem("PatientID");
    
   
    //1234 can be changed accordingly via patientID
    function AllResults(){
      addNewEntry();
    }

    async function addNewEntry() {
      console.log("Wasalt fil method ta add new Grip Entry");

      let SessionLeftResult = sessionStorage.getItem("MaxLeftHandResult");
      let SessionRightResult = sessionStorage.getItem("MaxRightHandResult");
  
      let ActualObjectLeftResult = JSON.parse(SessionLeftResult);
      let ActualObjectRightResult = JSON.parse(SessionRightResult);


      await setDoc(doc(db, "patients", patientId,"SectionB", todaysSession.toString()), {
        DateofSession: dateString,
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
         }
      });
      console.log("Updated Database");
    };

    let SessionsArray = [];
    async function getPatientDocuments(){

      console.log("the Patient ID:", patientId);
      const query = await getDocs(collection(db, "patients", patientId,"SectionB"));

      if(query.docs.length != 0) {
        query.forEach((doc) => {
          SessionsArray.push({id: doc.id, data: doc.data()});
        });
        let arraySize = SessionsArray.length;
        let latestSession = SessionsArray[arraySize-1].data;
        sessionStorage.setItem("PreviousResult", JSON.stringify(latestSession));
      } else {
       sessionStorage.setItem("PreviousResult", null);
      }
    }

    async function getPatientFromDatabase(inputtedPatientId){

      console.log("Getting if patient id exists:", inputtedPatientId);
      const docRef = doc(db, "patients", inputtedPatientId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.data()) {
        const patientObject = docSnap.data();
        sessionStorage.setItem("PatientData", JSON.stringify(patientObject));
      } else {
        sessionStorage.setItem("PatientData", 0);
        console.log("No such document!");
      }

      patientId = inputtedPatientId;
    }

  return (
    <gripStrengthContext.Provider value={{addNewEntry, AllResults, getPatientFromDatabase, getPatientDocuments}}>
      {children}
    </gripStrengthContext.Provider>
  );
}

export function useGripContext() {
  return useContext(gripStrengthContext);
}
