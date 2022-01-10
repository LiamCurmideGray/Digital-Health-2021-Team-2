import './common/CommonStyle.css';
import Fab from '@mui/material/Fab';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function TimerBackButton() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/Instructions");
    };
    return (
        <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
            <ArrowBack fontSize="large" />
        </Fab>
    );
}
export default TimerBackButton;