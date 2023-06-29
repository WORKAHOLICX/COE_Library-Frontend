

import React from "react"
import { ErrorMessage } from "formik"

function Error({name}){

    return(
        <div style={{color:"red"}}>
             <ErrorMessage name={name}/>
        </div>
    )
}     

export default Error;