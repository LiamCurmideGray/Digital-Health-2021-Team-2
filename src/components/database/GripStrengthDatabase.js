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
    async function addnewGripEntry() {
      console.log("Wasalt fil method ta add new Grip Entry");

      await setDoc(doc(db, "patients", patientId.toString(),"SectionB", dateString), {
        GripStrengthResults: {
         Question1: sessionStorage.getItem("question1"),
         Question2: sessionStorage.getItem("question2"),
         Question3: sessionStorage.getItem("question3"),
         Question4: sessionStorage.getItem("question4"),
         Question5: sessionStorage.getItem("question5"),
         MaxLeftHandResult: sessionStorage.getItem("MaxLeftHandResult"),
         MaxRightHandResult: sessionStorage.getItem("MaxRightHandResult"),
        },
      });
      console.log("Updated Database");
    };

  return (
    <gripStrengthContext.Provider value={{addnewGripEntry}}>
      {children}
    </gripStrengthContext.Provider>
  );
}

export function useGripContext() {
  return useContext(gripStrengthContext);
}
