import React from "react";
import { ErrorMessage } from "formik";


export const Error = ({name}) => {
    return(
        <>
        <div style={{color:"red", paddingTop:'5px'}}>
             <ErrorMessage name={name}/>
        </div>
        </>
    )
}