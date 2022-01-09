import './common/TemplatePage.css';

import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react'

import TUGPhoto from '../resources/TUG_Test_Setup.png'
import CommonHeader from './common/CommonHeader';
import { Navigate, useNavigate } from 'react-router-dom';

function ListOfEquipment() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const question1 = sessionStorage.getItem("TUGQuestion1");
    const question2 = sessionStorage.getItem("TUGQuestion2");
    console.log(question1);
    console.log(question2);

    if (question1 == "" || question2 == "") {
        return <Navigate to="/LevelsOfMobility" />;
    }
    function navToNextPage(){
        navigate("/Instructions")
    }
  
  //help poppup function


const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;

    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <a href="/LevelsOfMobility" className="back-button">&lt;</a>
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

        <Typography sx={{ p: 5, fontSize:'1.5em' }}>This page consists of all the equipment you need and how they should be setup</Typography>
      </Popover> 
            </div>

            <div className="main-section">
                <label className="subtitle">List of Equipment</label>
                <div>
                    <ul>
                        <li className="list-item">Arm-chair</li>
                        <li className="list-item">Tape measure</li>
                        <li className="list-item">Tape</li>
                    </ul>
                </div>
                <label className="subtitle">Setup of Test</label>
                <img src={TUGPhoto} style={{
                    padding: 20
                }} />
            </div>
            <button className="next-button" onClick={navToNextPage}>Next</button>
        </div>
    );
}

export default ListOfEquipment;