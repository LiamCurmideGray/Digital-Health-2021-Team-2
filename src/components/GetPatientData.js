import "./common/CommonStyle.css";
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import HelpIcon from "@mui/icons-material/Help";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CommonHeader from "./common/CommonHeader";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {useGripContext} from "./database/GripStrengthDatabase";
import { Alert } from "react-bootstrap";


function GetPatientData() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    let [patientId, setPatientId] = useState("");
    const [error, setError] = useState("");
    const { getPatientFromDatabase, getPatientDocuments } = useGripContext();


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const goBack = () => {
      navigate("/GetPatientData");
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
    const navigate = useNavigate();
  
   async function navToNextPage() {

      setError("");

      if(patientId == "") {
        patientId = "blank";
      }
        await getPatientFromDatabase(patientId);
        await getPatientDocuments();

        let patientData = null;
        patientData = sessionStorage.getItem("PatientData");
        
        if(patientData != 0) {
            sessionStorage.setItem("PatientID", patientId);
            navigate("/LevelsOfMobility");
          
        } else {
          console.log("Patient DOES NOT HAVE DATA");
        setError("No Patient was found with that ID, kindly insert it again or Patient is not registerd in the database");
            
        }


    }


    return (
        <div className="screen">
          <br></br>
          <div className="buttons-section space-between">
              
            <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add">
              <ArrowBack fontSize="large" />
            </Fab>
            <label className="title">Patient Data</label>
    
            <Fab
              className="mui-icons"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              aria-label="add"
            >
              <HelpIcon fontSize="large"></HelpIcon>
            </Fab>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 5, fontSize: "1.5em" }}>
                This page requires to insert the patient's ID card number so that the data will be inserted into 
                the database accordingly. For testing copy and paste this Patient Id: 754569D
              </Typography>
            </Popover>
          </div>
    
          <div className="main-section">
            <label className="subtitle">Input Patient's ID number:</label>
            <TextField
                      fullWidth
                      id="FirstReading"
                      className="gripInputs"
                      label="Required"
                      type="text"
                      variant="filled"
                      onChange={(event) => {
                        setPatientId(event.target.value);
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                          <InputAdornment position="start"></InputAdornment>
                        ),
                        inputMode: "numeric",
                      }} />
                      {error && <Alert variant="danger">{error}</Alert>}
          </div>
          <button className="next-button" onClick={navToNextPage}>
            Next
          </button>
        </div>
      );
}

export default GetPatientData;