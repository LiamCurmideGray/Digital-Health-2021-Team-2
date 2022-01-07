import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import './common/TemplatePage.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TemplatePage from "./common/TemplatePage";

var status="";


function getStatusBackgroundColor(statusText){
    var background = "";

    if (statusText === 'Low Risk'){ 
        background= "#00FF00";
    }
    else if (statusText === 'Medium Risk'){ 
        background= "#FFFF00";
    }
    else if (statusText === 'High Risk') {
        background= "#FF0000";
    }

    console.log(background);
}

class Timer extends Component {
  constructor(props){
    super(props);
    this.state={seconds:0};
  }

  onStart=()=>{
    this.setState({seconds:this.state.seconds+1});
 }

 timer=()=>{
   this.f=setInterval(this.onStart,1000);
    document.getElementById('timer-btn').disabled=true;
    console.log(this.state.seconds);
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
     clearInterval(this.f);
     document.getElementById('timer-btn').disabled=false;
     this.setState({seconds:0})
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
                  <li>Press the START button when you are ready to being the test and the STOP button when you wish to terminate the test</li>
                    <div>
                        <div class="TimerLayoutWords">
                            <h1 style={{ textAlignHorizontal: "center",textAlign: "center",}}>{this.state.seconds}</h1>
                            <Box class="status Display">
                                <h3 id="RiskStatus"  className="statusDisplay"></h3>
                            </Box> 
                        </div>
                        <div class='TimerDiv'>
                            <Button class='TimerLayoutBtnStart' id='timer-btn' onClick={this.timer}>Start</Button>
                            <Button class='TimerLayoutBtnStop' onClick={this.stopTimer}>Stop</Button>
                            <Button class='TimerLayoutBtnReset' onClick={this.clear}>Reset</Button>
                        </div>
                     </div>
            </div>
          <a href="/RiskOfFallStatus" className="next-button">Next</a>
     </div>
      
    )
}
}

export default Timer;