import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import './common/TemplatePage.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TemplatePage from "./common/TemplatePage";

var status="";
var trail = "0";

// function getStatusBackgroundColor(statusText){
//     if (statusText === 'Low Risk'){ 
//         background= "#00FF00";
//         console.log(background);
//     }
//     else if (statusText === 'Medium Risk'){ 
//         background= "#FFFF00";
//         console.log(background);
//     }
//     else if (statusText === 'High Risk') {
//         background= "#FF0000";
//         console.log(background);
//     }
//     return background;
    
// }

class Timer extends Component {
  constructor(props){
    super(props);
    this.state={seconds:0};
  }

  onStart=()=>{
    this.setState({seconds:this.state.seconds+1});
    // background = getStatusBackgroundColor(this.state.seconds);
    // console.log(background);
    // document.getElementById("statusBox").backgroundColor = background;
    if(this.state.seconds>20){
        clearInterval(this.f);
        var time = this.state.seconds;
        console.log(time);
        //document.getElementById("statusBox").backgroundColor = "'red'";
        document.getElementById("RiskStatus").innerHTML = "Time Exceeded. Test Automatically Failed";
        status="Automatic Fail";
    }
    console.log(this.state.seconds);
 }

 timer=()=>{
    trail ++;
   this.f=setInterval(this.onStart,1000);
   if(trail===2){
    document.getElementById("RiskStatus").innerHTML = "TRIAL: Press STOP to end the test ...";
}else{
   document.getElementById("RiskStatus").innerHTML = "Press STOP to end the test ... ";
    document.getElementById('timer-btn').disabled=true;
    console.log(this.state.seconds);
}
 }

 stopTimer=()=>{
     clearInterval(this.f);
     var background="";
     var time = this.state.seconds;
     console.log(time);
    
     if(time<=10&&time!==0){
        //Low Risk
        document.getElementById("RiskStatus").innerHTML = "Low Risk";
        status="Low Risk";
        background= "#00FF00";
     }
     if(time>=11 &&time<=14){
        //medium Risk
        document.getElementById("RiskStatus").innerHTML = "Medium Risk";
        status="Medium Risk";
        background= "#FFFF00";
    }
     if(time>14){
        //high risk
        document.getElementById("RiskStatus").innerHTML = "High Risk";
        status="High Risk";
        background= "'#FF0000'";
    }
    console.log(status);
    //background = getStatusBackgroundColor(status);
 }
 clear=()=>{
    if(trail===2){
        document.getElementById("RiskStatus").innerHTML = "The test cannot be redone as the test has already been done";
        document.getElementById('timer-btn').disabled=true;
        document.getElementById('stop-timer').disabled=true;
        document.getElementById('clear-timer').disabled=true;
    }else{
        document.getElementById("RiskStatus").innerHTML = "OFFICIAL TEST: Press Start to begin ...";
        document.getElementById("timer-btn").innerHTML = "Start Official Test";
        clearInterval(this.f);
        document.getElementById('timer-btn').disabled=false;
        this.setState({seconds:0}) 
    }
 }

render(){
    return(
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
              <a href="/Instructions" className="back-button">&lt;</a>
              <label className="title">Timed Up and Go Test</label>
              <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
          </div>
          <div className="main-section">
              <label className="subtitle">Timer</label>
                    <div className="TimerLayoutWords">
                    <Box id='statusBox'className="status Display">
                            <h1 style={{ textAlignHorizontal: "center",textAlign: "center",}}>{this.state.seconds}</h1>
                            <div className="TimerDiv">
                            
                                <h3 id="RiskStatus"  style={{ textAlignHorizontal: "center",textAlign: "center",}}>TRIAL: Press Start to begin ... </h3>
                            
                            </div>
                            </Box> 
                        {/* </Button> */}
                        <div style={{ textAlignHorizontal: "center",textAlign: "center",}}>
                            
                            <Button class='TimerLayoutBtnStart' id='timer-btn' onClick={this.timer}>Start Trial</Button>
                            <Button id='stop-timer'class='TimerLayoutBtnStop' onClick={this.stopTimer}>Stop</Button>
                            <Button id='stop-timer' class='TimerLayoutBtnReset'  onClick={this.clear}>Reset</Button>
                            
                        </div>
                     </div>
            </div>
          <a href="/RiskOfFallStatus" className="next-button">Next</a>
     </div>
      
    )
}
}

export default Timer;