import React, { useState } from "react";
import "./Form.css"
import StepProgressBar from "../StepProgressBar/StepProgressBar";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import PROGRESS_BOX from "../Progress-box/Progress-box";
import * as yup from "yup"
import Error from "./Error";
import { Link } from "react-router-dom";
import { SettingsInput, SettingsSelect, TextInput } from "../../../../Components/Form";
import { CButton } from "@coreui/react";
import axios from "../../../utils/axios";

const validationSchema = yup.object(
    {
        fname: yup.string().required("Name is required"),
        gender: yup.string().required("please specify your gender"),
        occupation: yup.string().required("occupation is required"),
        // phone: yup.number().min(10, "invalid").max(10, "invalid phone number").required("please provide your active phone number"),
        email: yup.string().required("provide your email"),
        region: yup.string().required("please specify region"),
        city: yup.string().required("please specify your city"),
        courses: yup.array().of(yup.string("string is required"))
    }
)




function Form_info() {

    const [index, setIndex] = useState(1);
    const [form_values, setForm_values] = useState()

    const handleSubmit =  (input) => {
         axios.post('/tutor',{
            input
         })
            .then((result) => {
                console.log(result.data);
            }).catch((err) => {
            })
    }

    return (

        <div className="P-Container">

            <div className="progress-box">
                <PROGRESS_BOX step={index} />
            </div>


            <div className="Progress">
                <StepProgressBar step={index} />
            </div>


            <div className="Form-det-container">



                <div className="form-box">



                    <Formik
                        validationSchema={validationSchema}

                        initialValues={{
                            fname: "",
                            gender: "",
                            occupation: "",
                            phone: "",
                            email: "",
                            region: "",
                            city: "",
                            courses: [],
                        }}

                    >
                        {({ values, errors, touched, isSubmitting }) => (
                            <Form >
                                
                                {/* {setForm_values(values)} */}
                                <div onClick={() => setIndex(1)}>
                                    <h2 className="section">Personal Information</h2>
                                    <p>Enter your personal Information</p>

                                    <div className="input-box">
                                        <label>Full Name:</label>
                                        <SettingsInput name="fname" type="text" />
                                        {/* <Error name="fname" /> */}
                                        {/* {errors.fname && touched.fname ? <p>{errors.fname}</p> : null} */}
                                    </div>

                                    <div className="input-box">
                                        <label>Gender:</label>
                                        <br />

                                        <div className="gender-radio">
                                            <SettingsInput name="gender" type="radio" value="male" />
                                            <label className="mr-7">Male</label>
                                            <SettingsInput name="gender" type="radio" value="female" />
                                            <label>Female</label>

                                        </div>


                                        {/* <Error name="gender" /> */}
                                        {/* {errors.gender && touched.gender ? <p>{errors.gender}</p> : <p style={{ visibility: 'hidden' }}>{errors.gender}</p>} */}
                                    </div>

                                    <div className="input-box">
                                        <label>Occupation:</label>
                                        <SettingsInput name="occupation" type="text" />
                                        {/* <Error name="occupation" /> */}
                                        {/* {errors.occupation && touched.occupation ? <p>{errors.occupation}</p> : ""} */}
                                    </div>

                                </div>

                                <div onClick={() => setIndex(2)}>
                                    <h2 className="section">Contact Information</h2>
                                    <p>Please fill in your current contact information</p>

                                    <div className="input-box">
                                        <label>Phone Number:</label>
                                        <SettingsInput name="phone" type="text" placeholder="+233 xxxxxxxxx" />
                                        {/* <Error name="phone" /> */}
                                        {/* {errors.occupation && touched.occupation ? <p>{errors.occupation}</p> : ""} */}
                                    </div>

                                    <div className="input-box">
                                        <label>Email Address:</label>
                                        <SettingsInput name="email" type="text" />
                                        {/* <Error name="email" /> */}
                                    </div>

                                    <div className="input-box">
                                        <label>Region:</label>
                                        <SettingsSelect name="region" type="text">
                                            <option value="Greater Accra">Greater Accra</option>
                                            <option value="Ashanti Region">Ashanti Region</option>
                                            <option value="Eastern Region">Eastern Region</option>
                                            <option value="Western Region">Western Region</option>
                                            <option value="Central Region">Central Region</option>
                                            <option value="Northern Region">Northern Region</option>
                                            <option value="Brong Ahafo Region">Brong Ahafo Region</option>
                                            <option value="Bono Region">Bono Region</option>
                                            <option value="Ahafo Region">Ahafo Region</option>
                                            <option value="North East Region">North East Region</option>
                                            <option value="Oti Region">Oti Region</option>
                                            <option value="Upper East Region">Upper East Region</option>
                                            <option value="Upper West Region">Upper West Region</option>
                                            <option value="Western North Region">Western North Region</option>
                                            <option value="Volta Region">Volta Region</option>
                                            <option value="Savannah Region">Savannah Region</option>
                                        </SettingsSelect>
                                        {/* <Error name="region" /> */}
                                    </div>

                                    <div className="input-box">
                                        <label>City:</label>
                                        <input name="city" type="text" placeholder="eg. Accra, Ashanti" />
                                        {/* <Error name="city" /> */}
                                    </div>

                                </div>

                                <div onClick={() => setIndex(3)}>
                                    {/* <h2 className="section">Courses</h2>
                                    <p>Please provide the courses you want to teach</p>



                                    <div className="input-box">

                                        <FieldArray
                                            name="courses"
                                            render={(arrayHelpers) => (
                                                <div>
                                                    {values.courses && values.courses.length > 0 ? (
                                                        values.courses.map((course, index) => (
                                                            <div key={index} className="input-box">
                                                                <input name={`courses.${index}`} />
                                                                <br />

                                                                <div className="array-button">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => arrayHelpers.insert(index, "")} 
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        ))
                                                    ) : (
                                                        <button className="AddCourse" type="button" onClick={() => arrayHelpers.push("")}>
                                                            
                                                            Add courses
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        />
                                        <Error name={`courses`} />
                                    </div> */}
                                </div>


                            <CButton type="submit" onClick={()=>handleSubmit(values)}>submit</CButton>
                                


                            </Form>
                        )}
                    </Formik>
                </div>

            </div>








        </div>

    )
}
export default Form_info;





