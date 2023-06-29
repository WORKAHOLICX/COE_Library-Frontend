import React, { useEffect, useState } from 'react'
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'
import CourseForm from './CourseForm'
import { ProgramData } from './programData'
import axios from '../../utils/axios'
const db = require('../../Model/database')


const Table = (props) => {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState({
    "IDM": "",
    "id": "",
    "name": "",
    "code": "",
    "year": "",
    "semester": "",
    "ext": "",
    "slides": "",
    "img": ""
  })
  const [prog, setProg] = useState('Computer Engineering')
  const [courses, setCourses] = useState([{
    "IDM": "computer",
    "id": "algebra",
    "name": "Algebra",
    "code": "MATH 151",
    "year": 1,
    "semester": 1,
    "ext": "pdf",
    "slides": ["Lecture One", "Lecture Two", "Lecture Three", "Lecture Four", "Lecture Five", "Lecture Six"],
    "img": "https://img.freepik.com/free-vector/geometry-education-blue-background-vector-frame-disruptive-education-digital-remix_53876-114094.jpg?w=740&t=st=1661837216~exp=1661837816~hmac=5b40056780bebdeeb8bb5259612262507c80ddd5467b97f2ff299f6a2309d897"
  },])
  useEffect(() => {
    async function get() {
      await axios.get('/all')
        .then((response) => {
          setCourses(response.data)
        })

    }
    get()
  }, [])
  function form(course, program) {
    setCurrent(course)
    setProg(program)
    setVisible(true)
  }

  let filter = (program) => {
    return courses.filter((course) => course.IDM === program)
  }


  const [visible, setVisible] = useState(false)
  return (
    loading ?
      <>
        <div>
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      </> :
      <>
        {ProgramData.map((program) =>

          <CAccordion flush>
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>{program.name}</CAccordionHeader>
              <CAccordionBody>
                <CRow key={program.name}>
                  <CCol xs={12}>
                    <h1 className='display-4'>{program.name}</h1>
                    <CTable color="dark" hover borderless>
                      <CTableCaption>Courses in {program.id} </CTableCaption>
                      <CTableHead color='light'>
                        <CTableRow>
                          <CTableHeaderCell scope="col"></CTableHeaderCell>
                          <CTableHeaderCell scope="col">Course Name</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Course Code</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Level</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>{

                        filter(program.id).map((course, i) =>

                          <CTableRow style={{ cursor: 'pointer' }} onClick={() => form(course, program.name)}>
                            <CTableHeaderCell scope="row">{i}</CTableHeaderCell>
                            <CTableDataCell>{course.name}</CTableDataCell>
                            <CTableDataCell>{course.code}</CTableDataCell>
                            <CTableDataCell>{course.year}</CTableDataCell>

                          </CTableRow>
                        )}
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CRow>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        )}
        <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>{prog}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CourseForm courseData={current} />
          </CModalBody>
          <CModalFooter>
            <CButton color="dark" onClick={() => setVisible(false)}>
              OK
            </CButton>
          </CModalFooter>
        </CModal>
      </>
  )
}

export default Table
