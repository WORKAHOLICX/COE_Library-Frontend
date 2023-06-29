import React, { useEffect, useState } from "react";
import "./ImageUpload.css"





function TypeWriter({greet}){

    const [typeText, setTypeText] = useState('')

    useEffect(()=>
    {const timeOut = setTimeout(()=>{
        setTypeText(greet.slice(0, typeText.length + 1))
    }, 150)
        return () => clearTimeout(timeOut)
   }, [typeText, greet]
    )

    return(
        <div className="header-text">
            
            <h1 className="greetings">{typeText}</h1>

        </div>
    )
}

export default TypeWriter;