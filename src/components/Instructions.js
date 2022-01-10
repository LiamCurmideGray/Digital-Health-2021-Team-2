import '../App.css';

import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import React from 'react'
import CommonHeader from './common/CommonHeader';
import { useNavigate } from 'react-router-dom';

function Instructions() {
  
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
    const navigate = useNavigate();
    function navToNextPage() {
        navigate("/Timer")
    }

    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/ListOfEquipment" className="back-button">&lt;</a>
                <label className="title">Timed Up and Go Test</label>
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

        <Typography sx={{ p: 5, fontSize:'1.5em' }}>This page consists of all the instructions you need as well as the instructions that should be read to the patient</Typography>
      </Popover> 
            </div>

            <div className="main-section">
                <label className="subtitle">Instructions for Clinician</label>
                <div>
                    <ol>
                        <li className="list-item">Equipment: arm chair, tape measure, tape, stopwatch.</li>
                        <li className="list-item">Begin the test with the subject sitting correctly (hips all the way to the back of the seat) in a chair with arm rests. The chair should be stable and positioned such that it will not move when the subject moves from sit to stand. The subject is allowed to use the arm rests during the sit-stand and stand-sit movements</li>
                        <li className="list-item">Place a piece of tape or other marker on the floor 3 meters away from the chair so that it is easily seen by the subject.</li>
                        <li className="list-item">Start timing on the word “GO” and stop timing when the subject is seated again correctly in the chair with their back resting on the back of the chair</li>
                        <li className="list-item">The subject wears their regular footwear, may use any gait aid that they normally use during ambulation, but may not be assisted by another person. There is no time limit. They may stop and rest (but not sit down) if they need to.</li>
                        <li className="list-item">Normal healthy elderly usually complete the task in ten seconds or less. Very frail or weak elderly with poor mobility may take 2 minutes or more.</li>
                        <li className="list-item">The subject should be given a practise trial that is not times, before testing.</li>
                        <li className="list-item">Results correlate with gait speed, balance, functional level, the ability to go out, and can follow change over time.</li>
                    </ol>
                </div>
                <label className="subtitle">Instruction for Patient</label>
                <div>
                    <ol>
                        <li className="list-item">“On the word GO you will stand up, walk to the line on the floor, turn around and walk back to the chair and sit down. Walk at you regular pace.”</li>
                    </ol>
                </div>
            </div>
            <Button className="next-button" onClick={navToNextPage}>Next</Button>
        </div>
    );
}

export default Instructions;