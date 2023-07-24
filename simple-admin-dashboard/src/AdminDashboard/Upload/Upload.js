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
} from "./uploadStyled";
import { ButtonGroup } from "../../Components/Style";
import { ThreeDots } from "react-loader-spinner";
import {
  CourseOptions,
  mapProgramme,
  mapSemester,
  mapYear,
} from "../../utils/lib";
import CustomModal from "../../Components/Modal/CustomModal";

const Upload = () => {
  const [courseData, setCourseData] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);
  const [programOptions, setProgramOptions] = useState([]);
  const [modal, setModal] = useState(false);
  const [showCourseOptions, setShowCourseOptions] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    programmeName: "",
    level: "",
    semester: "",
    filetoUpload: null,
  });
  const [mappedLevel, setMappedLevel] = useState("");
  const [mappedSemester, setMappedSemester] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({
    courseName: false,
    programmeName: false,
    filetoUpload: false,
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/admin/course")
        .then((res) => {
          setCourseData(res.data);
          const uniqueIDMs = [...new Set(res.data.map((course) => course.IDM))];
          setProgramOptions(uniqueIDMs);
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
        course.name === formData.courseName &&
        course.IDM === formData.programmeName
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
  }, [formData.courseName, formData.programmeName, courseData]);

  useEffect(() => {
    setMappedLevel(mapYear(formData.level));
    setMappedSemester(mapSemester(formData.semester));
  }, [formData.level, formData.semester, formData.programmeName, courseData]);

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
        name: "programmeName",
        value: programOptions[0] || "",
      },
    });
  }, [programOptions, courseData]);

  const uploadHandler = async () => {
    try {
      setLoading(true);
      const mappedFormData = {
        ...formData,
        level: mapYear(formData.level),
        semester: mapSemester(formData.semester),
        programmeName: mapProgramme(formData.programmeName),
      };

      const newformData = new FormData();
      newformData.append("filetoUpload", mappedFormData.filetoUpload);
      newformData.append("courseName", mappedFormData.courseName);
      newformData.append("programme", mappedFormData.programmeName);
      newformData.append("level", mappedFormData.level);
      newformData.append("semester", mappedFormData.semester);

      await axios.post("/admin/upload", newformData);
      setModal(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setFormData({
        courseName: "",
        programmeName: "",
        level: "",
        semester: "",
        filetoUpload: null,
      });
      setTouchedFields({
        courseName: false,
        programmeName: false,
        filetoUpload: false,
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
      case "programmeName":
        return value?.trim() === "" ? "Select the Programme" : "";
      case "filetoUpload":
        if (!value) {
          return "You need to provide a file";
        } else {
          const allowedFormats = ["pdf", "ppt", "pptx"];
          const fileExtension = value?.name?.split(".").pop().toLowerCase();
          if (!allowedFormats.includes(fileExtension)) {
            return "Unsupported Format";
          }
        }
        break;
      default:
        break;
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (touchedFields[name]) {
      let fieldValue = type === "file" ? e.target.files[0] : value;
      const error = validateField(name, fieldValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = validateField(name, value);

    if (e.target.type === "file") {
      const file = e.target.files[0];
      error = validateField(name, file);
    }

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
      uploadHandler();
    }
  };

  return (
    <Container>
      <div className="overlay">
        <Sidebar1 isopen={false} />

        <Wrapper>
          {modal && (
            <CustomModal
              isOpen={() => setModal(true)}
              closeModal={() => setModal(false)}
              message="File has been uploaded"
            />
          )}

          <h1
            style={{ textAlign: "center", fontSize: "3rem", color: "#FF652F" }}
          >
            UPLOAD FILE
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
                  // setShowCourseOptions(false);
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
                name="programmeName"
                value={formData.programmeName}
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
              {errors.programmeName && (
                <p className="text-red-500 text-xs mb-0">
                  {errors.programmeName}
                </p>
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
              <div className="input-dropdown">
                <input
                  id="filetoUpload"
                  name="filetoUpload"
                  type="file"
                  onChange={(e) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      filetoUpload: e.target.files[0],
                    }))
                  }
                  onBlur={handleBlur}
                />
              </div>
              {errors.filetoUpload && (
                <p className="text-red-500 text-xs mb-0">
                  {errors.filetoUpload}
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
                    Upload
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
export default Upload;
