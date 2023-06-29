import React, { useRef } from "react";
import "./ImageUpload.css"
import { Formik, Form } from "formik";
import ImagePreview from "./ImagePreview";
import TypeWriter from "./typingEffect";

function ImageUpload(props) {

  const fileRef = useRef(null);



  return (
    <div className="Upload-container">
      <TypeWriter greet={props.greet} />


      <Formik

        initialValues={{
          file: null
        }}

        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {({ values, setFieldValue }) => (
          <Form>



            <input
              hidden
              name="file"
              type="file"
              accept="image/*"
              onChange={(event) => { setFieldValue("file", event.target.files[0]) }}
              ref={fileRef}
            />
            <ImagePreview file={values.file} />

            <button className="add-photo" onClick={() => { fileRef.current.click() }}>Add Profile Picture</button>



          </Form>

        )
        }

      </Formik>

    </div>
  )
}

export default ImageUpload;
