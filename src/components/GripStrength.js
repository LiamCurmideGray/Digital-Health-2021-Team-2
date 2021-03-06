import "./common/CommonStyle.css";
import React from "react";
import GripPhoto from "../resources/Grip Strength Test Equipment.png";
import Fab from "@mui/material/Fab";
import HelpIcon from "@mui/icons-material/Help";
import { ArrowBack } from '@mui/icons-material';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CommonHeader from "./common/CommonHeader";
import ProtectedRoute from "./security/ProtectedRoute";

function GripStrength() {
  //help poppup function
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goBack = () => {
    navigate("/ReviewQuestion");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigate = useNavigate();

  function navToNextPage() {
    sessionStorage.setItem("GripStrength2", true);
    navigate("/GripStrength2");
  }

  if(sessionStorage.getItem("TUGTestCarriedOut") === ''){
    return ProtectedRoute();
  } 
  return (
    <div className="screen">
      {CommonHeader()}
      <div className="buttons-section space-between">
        <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
          <ArrowBack fontSize="large" />
        </Fab>
        <label className="title">Grip Strength Test</label>

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
            This page explains the equipment needed and how it should be used. I
            also lists the instructions that should be told to the patient
          </Typography>
        </Popover>
      </div>

      <div className="main-section">
        <label className="subtitle">Equipment and Instructions</label>
        <p>Equipment needed:</p>
        <img
          src={GripPhoto}
          style={{
            padding: 20,
          }}
        />
        <ul>
          <li>Dynamometer</li>
        </ul>
        <p>Instructions:</p>
        <ul>
          <li>
            "In this exercise, I am going to use the dynamometer to test the
            strength in your hands."
          </li>
          <li>
            "I'll start by asking you a couple of questions first and then we
            can proceed to the test."
          </li>
        </ul>
      </div>
      <button className="next-button" onClick={navToNextPage}>
        Next
      </button>
    </div>
  );
}

export default GripStrength;

