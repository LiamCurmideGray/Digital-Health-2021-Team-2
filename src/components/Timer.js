import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import './common/TemplatePage.css';

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
    console.log(this.state);
 }

 stopTimer=()=>{
     clearInterval(this.f);
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
              <a href="/RiskOfFallStatus" className="back-button">&lt;</a>
              <label className="title">Timed Up and Go Test</label>
              <a href="" className="help-button" style={{ backgroundColor: 'green' }}>?</a>
          </div>
          <div className="main-section">
              <label className="subtitle">Timer</label>
                  <li>Press the Start button when you are ready to being the test and the Stop button when you wish to terminate the test</li>
                    <div>
                        <div class="TimerLayoutWords">
                            <h1 style={{ textAlignHorizontal: "center",textAlign: "center",}}>{this.state.seconds}</h1>
                        </div>
                        <div class='TimerDiv'>
                            <button class='TimerLayoutBtnStart' id='timer-btn' onClick={this.timer}>Start</button>
                            <button class='TimerLayoutBtnStop' onClick={this.stopTimer}>Stop</button>
                            <button class='TimerLayoutBtnReset' onClick={this.clear}>Reset</button>
                        </div>
                     </div>
            </div>
          <a href="/ReviewQuestion" className="next-button">Next</a>
     </div>
      
    )
}
}

export default Timer;