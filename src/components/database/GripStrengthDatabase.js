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

  let AnsGripQuestion1,AnsGripQuestion2,AnsGripQuestion3 = null;

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;
    const dateString = date.toString();
    let patientId = 1234;

    function GripStrengthResults2(GripQuestion1,GripQuestion2,GripQuestion3){
      AnsGripQuestion1 = GripQuestion1;
      AnsGripQuestion2 = GripQuestion2;
      AnsGripQuestion3 = GripQuestion3;

      // addnewGripEntry();
    }
    //1234 can be changed accordingly via patientID
    async function addnewGripEntry() {
      console.log("Wasalt fil method ta add new Grip Entry");

      // await setDoc(doc(db, "TESTGRIP", "TOBEDELETED"), {
      await setDoc(doc(db, "patients", patientId.toString(),"SectionB", dateString), {
        GripStrengthResults: {
         Question1: AnsGripQuestion1,
         Question2: AnsGripQuestion2,
         Question3: AnsGripQuestion3,
        },
      });
    };

  return (
    <gripStrengthContext.Provider value={{GripStrengthResults2, addnewGripEntry}}>
      {children}
    </gripStrengthContext.Provider>
  );
}

export function useGripContext() {
  return useContext(gripStrengthContext);
}
