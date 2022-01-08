import "./common/TemplatePage.css";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Alert} from "react-bootstrap";

function LeftResultInputs() {
  const [leftInput1, setLeftInput1] = useState(0);
  const [leftInput2, setLeftInput2] = useState(0);
  const [rightInput1, setRightInput1] = useState(0);
  const [rightInput2, setRightInput2] = useState(0);
  const [error, setError] = useState("Please fill the fields for both hands, or only fill for one of the hands");
  const [errorConfirm, setErrorConfirm] = useState(false);
  sessionStorage.setItem("MaxLeftHandResult", "No Left Result");
  sessionStorage.setItem("MaxRightHandResult","No Right Result");


  const navigate = useNavigate();

  function maxVal(input, input2) {

    const values = [input, input2];
    const LeftMax = Math.max(...values);
    return LeftMax;
  }
  
  function onSubmit(){

    if(errorConfirm == true) {
    navigate("/GripStrength4")
    }
    setError("");

    if((leftInput1 == 0 || leftInput2 == 0) && (rightInput1 == 0 || rightInput2 == 0)) {
      setError("You're about to proceed without inputting anything, click next button again to proceed without any values");
      setErrorConfirm(true);
      }

    else {
      if(leftInput1 == 0 || leftInput2 == 0){
        sessionStorage.setItem("MaxLeftHandResult", "No Left Result");
      }  
      else {

        if(rightInput1 == 0 || rightInput2 == 0){

          setError("You haven't inputed the data for the Right hand!, click next button again to proceed without Right Hand values");
          setErrorConfirm(true);
        }
        sessionStorage.setItem("MaxLeftHandResult"  ,`Left Max Result: ${maxVal(leftInput1, leftInput2)}kg`);
      }

      if(rightInput1 == 0 || rightInput2 == 0){
        sessionStorage.setItem("MaxRightHandResult","No Right Result");
       } 
       else {

        if(leftInput1 == 0 || leftInput2 == 0){
          setError("You haven't inputed the data for the Left hand!, click next button again to proceed without Left Hand values");
          setErrorConfirm(true);
        }
         sessionStorage.setItem("MaxRightHandResult"  ,`Right Max Result: ${maxVal(rightInput1, rightInput2)}kg`);
       }

       if(sessionStorage.getItem("MaxLeftHandResult") != "No Left Result" && sessionStorage.getItem("MaxRightHandResult") != "No Right Result"){
        navigate("/GripStrength4")
       }
  }
  
  }

  return (
    <div className="screen">
      <table style={{ width: "75%" }}>
        <tr>
          <td
            style={{
              textAlign: "left",
              width: "33%",
            }}
          >
            <label className="details">[Patient Name]</label>
          </td>
          <td
            style={{
              textAlign: "center",
              width: "33%",
            }}
          >
            <label className="details">[Date]</label>
          </td>
          <td
            style={{
              textAlign: "right",
              width: "33%",
            }}
          >
            <label className="details">[MR Name]</label>
          </td>
        </tr>
      </table>
      <div className="buttons-section space-between">
        <a href="/GripStrength2" className="back-button">
          &lt;
        </a>
        <label className="title">Results Entry</label>
        <a href="" className="help-button" style={{ backgroundColor: "green" }}>
          ?
        </a>
      </div>

      <div className="main-section">
      {error && <Alert  variant="danger">{error}</Alert>}
        <label className="subtitle">Left Hand Results</label>
        <form>
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              >
                 <label>1st Reading</label>
                <TextField
                  fullWidth
                  id="FirstReading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => {setLeftInput1(event.target.value); setErrorConfirm(false);}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              >
                 <label>2nd Reading</label>
                <TextField
                  id="Second Reading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => {setLeftInput2(event.target.value); setErrorConfirm(false);}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
            </tr>
          </table>
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              >
              </td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              ></td>
            </tr>
          </table>

          <h1 className="subtitle">Right Hand Results</h1>      

         <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              >
                  <label>1st Reading</label>
                <TextField
                  fullWidth
                  id="FirstReading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => {setRightInput1(event.target.value); setErrorConfirm(false);}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              >
                  <label>2nd Reading</label>
                <TextField
                  id="Second Reading"
                  className="gripInputs"
                  label="Required"
                  type="number"
                  variant="filled"
                  onChange={(event) => {setRightInput2(event.target.value); setErrorConfirm(false);}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                  }}
                />
              </td>
            </tr>
          </table>
          
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              ></td>
              <td
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              >
              </td>
              <td
                style={{
                  textAlign: "right",
                  width: "33%",
                }}
              ></td>
            </tr>
          </table>
        </form>
      </div>
      <button className="next-button" onClick={onSubmit}>Next</button>

    </div>
  );
}

export default LeftResultInputs;

