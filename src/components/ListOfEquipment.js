import './common/CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import React from 'react'
import TUGPhoto from '../resources/TUG_Test_Setup.png'
import CommonHeader from './common/CommonHeader';
import { Navigate, useNavigate } from 'react-router-dom';
import ProtectedRoute from './security/ProtectedRoute';

function ListOfEquipment() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const question1 = sessionStorage.getItem("TUGQuestion1");
    const question2 = sessionStorage.getItem("TUGQuestion2");
    sessionStorage.setItem("TUGTimer", 0);
    sessionStorage.setItem("TUGStatus", "");
    sessionStorage.setItem("TUGTestCarriedOut", "");
    sessionStorage.setItem("question1", "");
    sessionStorage.setItem("question2", "");
    sessionStorage.setItem("question3", "");
    sessionStorage.setItem("question4", "");
    sessionStorage.setItem("question5", "");
    console.log(question1);
    console.log(question2);
    console.log("AAA ", sessionStorage.getItem("Instructions"));

    if (question1 == "" || question2 == "") {
        return ProtectedRoute();
    }

    function navToNextPage() {
        sessionStorage.setItem("Instructions", true);
        navigate("/Instructions")
    }

    const goBack = () => {
        navigate("/LevelsOfMobility");
    };

    //help poppup function
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (sessionStorage.getItem("TUGQuestion1") === '' || sessionStorage.getItem("TUGQuestion2") === '') {
        return ProtectedRoute();
    } else {
        console.log("TUG: ", sessionStorage.getItem("TUGQuestion1"))
        console.log("TUG: ", sessionStorage.getItem("TUGQuestion2"));
    }

    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
                    <ArrowBack fontSize="large" />
                </Fab>
                <label className="title">Timed Up and Go Test</label>
                <Fab className='help-button' className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" >
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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>This page consists of all the equipment you need and how they should be setup</Typography>
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