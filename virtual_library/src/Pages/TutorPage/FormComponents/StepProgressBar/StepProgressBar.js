import React from "react";
import "./StepProgressBar.css"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
function StepProgressBar(props)  {
  
    return (
      <div className="progress-bar-container">
      <ProgressBar

        percent={((props.step - 1) * 100) / 2}
        
        filledBackground="linear-gradient(to right, #ffd0b4, #ff9252)"
      >
        <Step transition="scale">
        
          {({ accomplished }) => (
            <div className={`step ${accomplished? "completed":""}`}>
                1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished? "completed":""}`}>
            2
           </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished? "completed":""}`}>
            3
            </div>
          )}
        </Step>
      </ProgressBar>
      </div>
    );
  }

  export default StepProgressBar;