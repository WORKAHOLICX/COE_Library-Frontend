import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import Sidebar1 from "../../AdminDashboard/Sidebar/Sidebar1";
import {
  Container,
  InputContainer,
  InputField,
  InputLabel,
  InputSelect,
  UploadButton,
  Wrapper,
} from "./DeleteStyled";
import { ButtonGroup } from "../../Components/Style";
import { ThreeDots } from "react-loader-spinner";
import {
  CourseOptions,
  mapProgramme,
  mapSemester,
  mapYear,
} from "../../utils/lib";
import CustomModal from "../../Components/Modal/CustomModal";

const Delete = () => {
  const [courseData, setCourseData] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);
  const [programOptions, setProgramOptions] = useState([]);
  const [filteredSlides, setFilteredSlides] = useState([]);
  const [modal, setModal] = useState(false);
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    programme: "",
    level: "",
    semester: "",
    filetoDelete: "",
  });
  const [mappedLevel, setMappedLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [mappedSemester, setMappedSemester] = useState("");
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({
    courseName: false,
    programme: false,
    filetoDelete: false,
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/admin/course")
        .then((res) => {
          setCourseData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [modal]);

  useEffect(() => {
    const filteredCourseData = courseData.find(
      (course) =>
        course.name === formData.courseName && course.IDM === formData.programme
    );

    if (filteredCourseData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        level: filteredCourseData.year,
        semester: filteredCourseData.semester,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        level: "",
        semester: "",
      }));
    }
  }, [formData.courseName, formData.programme, courseData]);

  useEffect(() => {
    const updateFilteredSlides = () => {
      const filteredSlides = courseData.filter(
        (course) =>
          course.name === formData.courseName &&
          course.IDM === formData.programme &&
          course.year === formData.level &&
          course.semester === formData.semester
      );
      if (filteredSlides.length > 0) {
        setFilteredSlides(filteredSlides[0].slides);
      } else {
        setFilteredSlides([]);
      }
    };

    updateFilteredSlides();
  }, [
    formData.courseName,
    formData.programme,
    formData.level,
    formData.semester,
    courseData,
  ]);

  useEffect(() => {
    setMappedLevel(mapYear(formData.level));
    setMappedSemester(mapSemester(formData.semester));
  }, [formData.level, formData.semester, formData.programme]);

  useEffect(() => {
    if (formData.courseName !== "") {
      const filteredPrograms = courseData
        .filter((course) => course.name === formData.courseName)
        .map((course) => course.IDM);
      setProgramOptions([...new Set(filteredPrograms)]);
    } else {
      const uniqueIDMs = [...new Set(courseData.map((course) => course.IDM))];
      setProgramOptions(uniqueIDMs);
    }
  }, [formData.courseName, courseData]);

  useEffect(() => {
    handleChange({
      target: {
        name: "programme",
        value: programOptions[0] || "",
      },
    });
  }, [programOptions, courseData]);

  useEffect(() => {
    handleChange({
      target: {
        name: "filetoDelete",
        value: filteredSlides[0] || "",
      },
    });
  }, [filteredSlides, courseData]);

  const DeleteHandler = async () => {
    try {
      setLoading(true);
      const mappedFormData = {
        ...formData,
        level: mapYear(formData.level),
        semester: mapSemester(formData.semester),
        programme: mapProgramme(formData.programme),
      };

      await axios.post("/admin/delete", mappedFormData);
      setModal(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setFormData({
        courseName: "",
        programme: "",
        level: "",
        semester: "",
        filetoDelete: "",
      });
      setTouchedFields({
        courseName: false,
        programme: false,
        filetoDelete: false,
      });
    }
  };

  const handleCourseChange = (selectedCourse) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      courseName: selectedCourse,
    }));
    setShowCourseOptions(false);
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      courseName: true,
    }));
    const error = validateField("courseName", selectedCourse);
    setErrors((prevErrors) => ({
      ...prevErrors,
      courseName: error,
    }));
  };

  const handleCourseSearch = (wordEntered) => {
    if (wordEntered?.trim() === "") {
      setCourseOptions([]);
    } else {
      const uniqueCourseOptions = new Set(
        courseData
          .filter((course) =>
            course.name.toLowerCase().includes(wordEntered.toLowerCase())
          )
          .map((course) => course.name)
      );
      setCourseOptions(Array.from(uniqueCourseOptions));
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case "courseName":
        if (value === "") {
          return "Enter the courseName";
        } else if (value !== "" && !courseOptions.includes(value)) {
          return "Course Name does not exist";
        }
        break;
      case "programme":
        return value?.trim() === "" ? "Select the Programme" : "";
      case "filetoDelete":
        return value?.trim() === "" ? "No slides available" : "";
      default:
        break;
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (touchedFields[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = validateField(name, value);

    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleUploadButtonClick = () => {
    let allErrors = {};
    for (const fieldName in formData) {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        allErrors[fieldName] = error;
      }
    }
    setErrors(allErrors);

    if (Object.keys(allErrors).length === 0) {
      DeleteHandler();
    }
  };

  return (
    <Container>
      <div className="overlay">
        <Sidebar1 isopen={false} />

        <Wrapper>
          <>
            {modal && (
              <CustomModal
                isOpen={() => setModal(true)}
                closeModal={() => setModal(false)}
                message="File has been deleted"
              />
            )}
          </>

          <h1
            style={{ textAlign: "center", fontSize: "3rem", color: "#FF652F" }}
          >
            DELETE FILE
          </h1>

          <div>
            <InputContainer className="relative">
              <InputLabel>CourseName</InputLabel>
              <InputField
                className="input-text"
                name="courseName"
                placeholder="Enter the Course Name"
                type="text"
                value={formData.courseName}
                onChange={(e) => {
                  handleChange(e);
                  handleCourseSearch(e.target.value);
                  setShowCourseOptions(true);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
              {showCourseOptions && courseOptions.length > 0 && (
                <CourseOptions
                  courseOptions={courseOptions}
                  handleChange={(course) => handleCourseChange(course)}
                />
              )}
              {errors.courseName && (
                <p className="text-red-500 text-xs mb-0">{errors.courseName}</p>
              )}
            </InputContainer>
            <InputContainer>
              <InputLabel>Programme</InputLabel>
              <InputSelect
                className="input-text2"
                name="programme"
                value={formData.programme}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
              >
                {programOptions.length > 0 ? (
                  <>
                    {programOptions.map((program) => (
                      <option key={program} value={program}>
                        {mapProgramme(program)}
                      </option>
                    ))}
                  </>
                ) : (
                  <option color="gray" value="" disabled>
                    -- No Programme Available --
                  </option>
                )}
              </InputSelect>
              {errors.programme && (
                <p className="text-red-500 text-xs mb-0">{errors.programme}</p>
              )}
            </InputContainer>
            <InputContainer>
              <InputLabel>Level</InputLabel>
              <InputField
                placeholder="Enter level"
                name="level"
                value={mappedLevel}
                disabled={true}
              />

              {errors.level && (
                <p className="text-red-500 text-xs mb-0">{errors.level}</p>
              )}
            </InputContainer>
            <InputContainer>
              <InputLabel>Semester</InputLabel>
              <InputField
                disabled={true}
                placeholder="Enter Semester"
                name="semester"
                value={mappedSemester}
              />

              {errors.semester && (
                <p className="text-red-500 text-xs">{errors.semester}</p>
              )}
            </InputContainer>
            <InputContainer>
              <InputLabel>File</InputLabel>
              <InputSelect
                className="input-text2"
                name="filetoDelete"
                value={formData.filetoDelete}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {filteredSlides.length > 0 ? (
                  filteredSlides.map((slides, index) => (
                    <option key={index} value={slides}>
                      {slides}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    -- No Slides Available --
                  </option>
                )}
              </InputSelect>
              {errors.filetoDelete && (
                <p className="text-red-500 text-xs mb-0">
                  {errors.filetoDelete}
                </p>
              )}
            </InputContainer>
            <ButtonGroup>
              {!loading && (
                <div style={{ textAlign: "center" }}>
                  <UploadButton
                    type="button"
                    className="action"
                    onClick={handleUploadButtonClick}
                  >
                    Delete
                  </UploadButton>
                </div>
              )}

              {loading && <ThreeDots color="#FF652F" height={49} width={100} />}
            </ButtonGroup>
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};
export default Delete;
