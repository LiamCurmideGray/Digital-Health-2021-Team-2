import './CommonStyle.css';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';
import React from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function TemplatePage() {
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

    return (
        <div className="screen">
            <table style={{ width: '75%' }}>
                <tr>
                    <td style={{
                        textAlign: 'left',
                        width: '33%'
                    }}>
                        <label className="details">
                            [Patient Name]
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'center',
                        width: '33%'
                    }}>
                        <label className="details">
                            [Date]
                        </label>
                    </td>
                    <td style={{
                        textAlign: 'right',
                        width: '33%'
                    }}>
                        <label className="details">
                            [MR Name]
                        </label>
                    </td>

                </tr>
            </table>
            <div className="buttons-section space-between">
                <a href="" className="back-button">&lt;</a>
                <label className="title">Sample Title</label>
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

        <Typography sx={{ p: 5, fontSize:'1.5em' }}>The content of the Popover. this is a test</Typography>
        <Typography sx={{ p: 5, fontSize:'1.5em' }}>The content of the Popover part 2</Typography>
      </Popover>   
            </div>
            
            <div className="main-section">
                <label className="subtitle">Section Title</label>
                <form>
                    <div>
                        <input type="radio" id="test-radio-button" name="group1" value="value1" />
                        <label className="radio-button-label" for="test-radio-button">Test Radio 1</label>
                    </div>
                    <div>
                        <input type="radio" id="test-radio-button2" name="group1" value="value2" />
                        <label className="radio-button-label" for="test-radio-button2">Test Radio 2</label>
                    </div>
                    <form>
                        <div>
                            <input type="radio" id="test-radio-button3" name="group2" value="value11" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="test-radio-button3">Indented Radio 1</label>
                        </div>
                        <div>
                            <input type="radio" id="test-radio-button4" name="group2" value="value12" style={{ marginLeft: "7.5em" }} />
                            <label className="radio-button-label" for="test-radio-button4">Indented Radio 2</label>
                        </div>
                    </form>
                </form>

            </div>
            <a href="/GripStrength" className="next-button">Next</a>
        </div>
    );
}

export default TemplatePage;