import React, { useState } from "react";
import Icon from "./Images/Profile-icon.png"
import "./ImageUpload.css"



function ImagePreview({ file }) {
  const Img = window.localStorage.getItem('Dp');
  const [preview, setPreview] = useState(Img !== null ? Img : Icon);


  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    window.location.reload()
    reader.onload = () => {
      const img = reader.result;
      setTimeout(() => {
        setPreview(img);
      }, 3000);
      window.localStorage.setItem('Dp', img);
    }

  }

  return (
    <div className="imagePreview">
      {preview ? <img src={preview} className="image-response" alt="preview" width="200" height="200" /> : "loading"}


    </div>


  )
}

export default ImagePreview;