import React, {useState, useEffect} from 'react'
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import axios from '../axios';
import "./admin.css";
import Logo from './../../Assets/Klogo.png';
import { Avatar, StyledTitle, StyledSubTitle } from '../../Components/Style';
import { SettingsInput, SettingsSelect, SettingsFile } from '../../Components/Form';
import { ThreeDots } from 'react-loader-spinner';
// import { Link } from 'react-router-dom';

const Upload = () => {
    const [course, setcourse] = useState([])
    const [File, setFile] = useState({})

    useEffect( ()=> {
        function fetchData(){
          axios.get("/admin/course")
        .then(res => {
          setcourse(res.data.map(o=> o.name).flat());
        })
        .catch((err)=> {
          console.log(err)
        })
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    
    const uploadHandler =  async (input) =>{
      const formData = new FormData();
      formData.append('filetoUpload', File);
      formData.append('courseName', input.courseName)
      formData.append('programme', input.programmeName)
      formData.append('level', input.level)
      formData.append('semester', input.semester)

      await axios.post("/admin/upload", formData)          
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
      }

      const slides = [
        "Lecture One","Lecture Two","Lecture Three","Lecture Four","Lecture Five","Lecture Six","Lecture Seven","Lecture Eight","Lecture Nine","Lecture Ten","Lecture Eleven","Lecture Twelve","Lecture Thirteen","Lecture Fourteen","Lecture Fifteen","Lecture Sixteen","Lecture Seventeen","Lecture Eighteen","Lecture Nineteen","Lecture Twenty"
        ]


  return (
   <div className='hody'>
      <div className='real-container'>
      <Formik
        initialValues={{
                courseName:"",
                programmeName: "",
                level:"",
                semester:"",
                filetoUpload: ""
        }}
        validationSchema={
          yup.object().shape({
            courseName: yup.string()
              .required("Enter the courseName")
              .oneOf(course, "Invalid course"),
            programmeName: yup.string()
              .required("Select the Programme")
              .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select the Programme"),
            semester: yup.string()
              .required("Select the Semester")
              .oneOf(["First Semester","Second Semester"],"Select the Semester"),
            level : yup.string()
            .required("Select the Year")
            .oneOf(["First Year","Second Year","Third Year","Fourth Year"],"Select the Year"),
            filetoUpload: yup.mixed()
            .required("You need to provide a file")
            .test("fileFormat", "Unsupported Format", (value) => {
                setFile(value)
                return value && (value.name.slice(-3) === "pdf" ||  value.name.slice(-3) === "ppt" || value.name.slice(-4) === "pptx")
              })
            .test("fileFormat", "Invalid document name", (value) => {
                setFile(value)
                return value && (slides.includes(value.name.slice(0,-4))  || slides.includes(value.name.slice(0,-5)))
              })
            
            })
        }
        onSubmit={uploadHandler}
      >
      
      {({isSubmitting})=>(
        <Form className='form' method='post' encType='multipart/form-data'>
          <div style={{display:'flex'}}>
        <Avatar image={Logo} />
          <StyledTitle color='Light black' size={40}>
            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c', font: "normal 36px 'Poppins', cursive"}}>Library</span>
          </StyledTitle></div>
          <StyledSubTitle color='Black' size={35} style={{font: "normal 36px 'Poppins', cursive"}}>Upload</StyledSubTitle>

        <div className="mar-bot">
        
        <div className="input-row">
           <label className="input-label">CourseName</label>

           <div className="input-field">
           <SettingsInput  className="input-text"
            name="courseName"
            placeholder="Enter the Course Name"
            type="text" 
           />
           
           </div>
         </div>
      </div>

      <div className="mar-bot">
        
                <div className="input-row">
                <label className="input-label">Programme </label>
                    <SettingsSelect className="input-text2" name='programmeName'>
                        <option>-- Select Programme --</option>
                        <option>Agricultural Engineering</option>
                        <option>Chemical Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Geomatic Engineering</option>
                        <option>Materials Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Electrical Engineering</option>
                        <option>Computer Engineering</option>
                        <option>Aerospace Engineering</option>
                        <option>Petroleum Engineering</option>
                        <option>Telecom Engineering</option>
                        <option>Geological Engineering</option>
                        <option>Biomedical Engineering</option>
                        <option>Petrochemical Engineering</option>
                        <option>Metallurgical Engineering</option>
                   </SettingsSelect>
           
            </div>
         </div>

         <div className="mar-bot">
            <div className="input-row">
             <label className="input-label">Level</label>
              <div className="input-dropdown">
                        <SettingsSelect className="input-text4" name='level'>
                          <option>--Select Year--</option>
                          <option>First Year</option>
                          <option>Second Year</option>
                          <option>Third Year</option>
                          <option>Fourth Year</option>                    
                        </SettingsSelect>               
              </div>  
            </div>
         </div> 

         <div className="mar-bot">
            <div className="input-row">
             <label className="input-label">Semester</label>
               <div className="input-dropdown">
               <SettingsSelect className="input-text3" name='semester'>
                  <option>--Select Semester--</option>
                  <option>First Semester</option>
                  <option>Second Semester</option>
               </SettingsSelect>
                
               </div>
                
                

          </div>
         </div> 
        
         <div className="mar-bot">
            <div className="input-row">
             <p className="input-label">File</p>
              <div className="input-dropdown">
                 
                  <SettingsFile id="filetoUpload" name="filetoUpload" type="file" />
                 
              </div>  
            </div>
         </div> 

        {!isSubmitting && (
          <div style={{textAlign:'center'}}>
            <button type="submit" className="action">Upload </button>
            </div>
                    )}

        {isSubmitting && (
           <div style={{marginLeft:'130px'}}>
           <ThreeDots
               color="blue"
               height={60}
               width={60}
           />
           </div>
        )}
        
      
        </Form>

      )}

      </Formik>
      </div>
    </div>
  )
}

export default Upload