import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import './common/TemplatePage.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TemplatePage from "./common/TemplatePage";
import CommonHeader from "./common/CommonHeader";

var status="";
var trail = "0";
var background="#8db0f7";

class Timer extends Component {
  constructor(props){
    super(props);
    this.state={seconds:0};
  }

  onStart=()=>{
    this.setState({seconds:this.state.seconds+1});
    if(this.state.seconds<=10){
        background= "green";
        console.log(background);
        document.getElementById("statusBox").backgroundColor = background;
    }
    if(this.state.seconds>=11 &&this.state.seconds<=14){
        background= "yellow";
        console.log(background);
        document.getElementById("statusBox").backgroundColor = background;
    }
    if((this.state.seconds>14)){
        background= "red";
        console.log(background);
        document.getElementById("statusBox").backgroundColor = background;
    }
    document.getElementById("statusBox").backgroundColor = background;
    if(this.state.seconds>20){
        clearInterval(this.f);
        var time = this.state.seconds;
        console.log(time);
        document.getElementById("statusBox").backgroundColor = "red";
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
     var time = this.state.seconds;
     console.log(time);
    
     if(time<=10&&time!==0){
        //Low Risk
        document.getElementById("RiskStatus").innerHTML = "Low Risk";
        status="Low Risk";
     }
     if(time>=11 &&time<=14){
        //medium Risk
        document.getElementById("RiskStatus").innerHTML = "Medium Risk";
        status="Medium Risk";
    }
     if(time>14){
        //high risk
        document.getElementById("RiskStatus").innerHTML = "High Risk";
        status="High Risk";
    }
    console.log(status);
 }
 clear=()=>{
    if(trail===2){
        document.getElementById("RiskStatus").innerHTML = "The test cannot be redone as the test has already been done";
        document.getElementById('timer-btn').disabled=true;
        document.getElementById('stop-timer').disabled=true;
        document.getElementById('clear-timer').disabled=true;
        background = "#8db0f7";
        document.getElementById("statusBox").backgroundColor = background;
    }else{
        document.getElementById("RiskStatus").innerHTML = "OFFICIAL TEST: Press Start to begin ...";
        document.getElementById("timer-btn").innerHTML = "Start Official Test";
        background = "#8db0f7";
        document.getElementById("statusBox").backgroundColor = background;
        clearInterval(this.f);
        document.getElementById('timer-btn').disabled=false;
        this.setState({seconds:0}) 
    }
 }

render(){
    return(
      <div className="screen">
         {CommonHeader()}
          <div className="buttons-section space-between">
              <a href="/Instructions" className="back-button">&lt;</a>
              <label className="title">Timed Up and Go Test</label>
              <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
          </div>
          <div className="main-section">
              <label className="subtitle">Timer</label>
                    <div className="TimerLayoutWords">
                    <Box id='statusBox'className="status Display" backgroundColor={background}>
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