import React from "react";
import "./Progress-box.css";
// import StepProgressBar from "../StepProgressBar/StepProgressBar";


function Progress_box(props) {

  switch (props.step) {
    case 1:
      return (
        <>
          <div className="box-progress">



            <div className="section">

              <div className="active">Personal Information</div>
              <div className="box-section">Contact</div>
              <div className="box-section">Courses</div>

            </div>



          </div>
        </>
      )


    case 2:
      return (
        <>
          <div className="box-progress">



            <div className="section">

              <div className="box-section">Personal Information</div>
              <div className=" active">Contact</div>
              <div className="box-section">Courses</div>

            </div>



          </div>
        </>
      )


    case 3:
      return (
        <>
          <div className="box-progress">



            <div className="section">

              <div className="box-section">Personal Information</div>
              <div className="box-section ">Contact</div>
              <div className=" active">Courses</div>

            </div>



          </div>
        </>
      )
    default:
      return (
        <>
        </>
      )
  }


  // return(
  //     <div className="box-progress">



  //         <div className="section">

  //         <div className="box-section">Personal Information</div>
  //         <div className="box-section">Contact</div>
  //         <div className="box-section">Courses</div>

  //         </div>



  //     </div>
  // )
}


export default Progress_box;