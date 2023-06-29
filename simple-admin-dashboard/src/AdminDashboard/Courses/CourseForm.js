
import React from 'react'
import {
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'


const CourseForm = ({courseData}) => {
let a = courseData.slides.length
function year(num){
  if (num===1){
    return "Level 100"
  }
  if (num===2){
    return "Level 200"
  }
  if (num===3){
    return "Level 300"
  }
  if (num===4){
    return "Level 400"
  }
}
function sem(num){
  if (num===1){
    return "First Semester"
  }
  if (num===2){
    return "Second Semester"
  }
}
  return (
    <CRow>
      <CCol xs={12}>
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel >id</CFormLabel>
                  <CFormInput disabled type="id" value={courseData.id} />
                </CCol>
                <CCol md={6}>
                  <CFormLabel >Course Name</CFormLabel>
                  <CFormInput disabled type="Course Name" value={courseData.name} />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel >Course Code</CFormLabel>
                  <CFormInput disabled type="Code" value={courseData.code} />
                </CCol>
                <CCol md={6}>
                  <CFormLabel >Year</CFormLabel>
                  <CFormInput disabled type="Year" value={year(courseData.year)} />
                </CCol>
                <CCol md={6}>
                  <CFormLabel >Semester</CFormLabel>
                  <CFormInput disabled type="Semester" value={sem(courseData.semester)} />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel >Number Of Slides</CFormLabel>
                  <CFormInput disabled type="Slides" value={a} />
                </CCol>
              </CForm>
      </CCol>
    </CRow>
  )
}

export default CourseForm
