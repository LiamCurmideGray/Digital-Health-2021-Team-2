import CommonHeader from './common/CommonHeader';
import './common/CommonStyle.css';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import { ArrowBack } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import ProtectedRoute from './security/ProtectedRoute';

function RiskOfFallStatus() {
    const navigate = useNavigate();
    //help poppup function
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goBack = () => {
        navigate("/Timer");
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (sessionStorage.getItem("TUGTimer") === '0'){
        return ProtectedRoute();
    }
    return (
        <div className="screen">
            {CommonHeader()}
            <div className="buttons-section space-between">
                <Fab variant="contained" className="mui-icons" onClick={goBack} aria-label="add" >
                    <ArrowBack fontSize="large" />
                </Fab>
                <label className="title">Timed Up and Go Test</label>
                <Fab className="mui-icons" aria-describedby={id} variant="contained" onClick={handleClick} aria-label="add" >
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

                    <Typography sx={{ p: 5, fontSize: '1.5em' }}>The following are the patient's results according to the timer in the previous page</Typography>
                </Popover>
            </div>

            <div className="main-section">
                <label className="subtitle">Risk of Fall Status</label>
                <ul>
                    <li>Status: <b> {sessionStorage.getItem("TUGStatus")} </b></li>
                    <li>Time taken: <b> {sessionStorage.getItem("TUGTimer")} seconds </b></li>
                </ul>
                <label className='subtitle'></label>
                <div>
                    <table className="style">
                        <tbody>
                            <tr>
                                <th className="style">
                                    Risk of Falls
                                </th>
                                <th className="style">
                                    Normative Reference Value
                                </th>
                            </tr>
                            <tr>
                                <td className="style">
                                    Low Risk
                                </td>
                                <td className="style">
                                    &lt;10 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    Medium Risk
                                </td>
                                <td className="style">
                                    11- 14 seconds
                                </td>
                            </tr>
                            <tr>
                                <td className="style">
                                    Hight Risk
                                </td>
                                <td className="style">
                                    &gt;15 seconds
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href="/ReviewQuestion"><button className="next-button">Next</button></a>
        </div>
    );
}

export default RiskOfFallStatus;