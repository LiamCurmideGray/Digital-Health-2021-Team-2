import './common/TemplatePage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonHeader from './common/CommonHeader';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


const Summary = () => {
    const navigate = useNavigate();

    //help poppup function
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function validateForm() {
        console.log("Results are to be submitted after the SUBMIT is pressed");
        navigate("/");
    }

    return (
        <div className="screen">
          {CommonHeader()}
    
          <div className="buttons-section space-between">
            <a href="/GripStrength4" className="back-button">&lt;</a>
            <label className="title">Grip Strength Test</label>
            <Fab className='help-button' aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" >
              <HelpIcon fontSize="large">
              </HelpIcon>
            </Fab>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
    
              <Typography sx={{ p: 5, fontSize: '1.5em' }}>This is a summary of the patient's level of mobility and the test results for the Timed Up and Go and Grip Strength tests.</Typography>
            </Popover>
          </div>
            <div className="main-section">
                <label className="subtitle">Levels of Mobility</label>
                <ul>
                    <li>Previous level: XX</li>
                    <li>Current level: XX</li>
                </ul>
                <label className="subtitle">Timed Up and Go Test</label>
                <ul>
                    <li>Risk of Fall Status: STATUS; TIME_TAKEN</li>
                    <li>Carried out: YES/NO</li>
                </ul>
                <label className="subtitle">Grip Strength test</label>
                <ul>
                    <li>Left hand: XX</li>
                    <li>Right level: XX</li>
                </ul>
            </div>
            <button className="next-button" onClick={validateForm}>Submit</button>
        </div>
    );
};

export default Summary;