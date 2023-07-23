/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import "../Components/course.css";
import axios from "./utils/axios";
import { HiDownload, HiEye } from "react-icons/hi";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import GoBack from "../Components/GoBack/GoBack";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  BoxLoading,
  RollBoxLoading,
  LadderLoading,
  MeteorRainLoading,
  WindMillLoading,
} from "react-loadingg";
import "../Components/loading.css";
import { useAuth } from "./hooks/useAuth";
import { CAlert, CButton, CCol } from "@coreui/react";
import { Card } from "react-bootstrap";
import Unavailable from "../Assets/Asset/Unavailable.jfif";
import CustomModal from "../Components/Modal/CustomModal";
import CustomLoader from "../Components/Loader/CustomLoader";

const Course = () => {
  const { logout } = useAuth();
  const pos = Math.floor(Math.random() * 5);
  const loaders = [
    <BoxLoading color="white" />,
    <WindMillLoading color="white" />,
    <MeteorRainLoading color="white" />,
    <LadderLoading color="white" />,
    <RollBoxLoading color="white" />,
  ];
  const isAvailable = "No Slides are available for this course";
  const notAvailable = "No Course Materials are available for this course";
  const { pathname, state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [loadingFile, setLoadingFile] = useState(false);
  const [course, setcourse] = useState([]);
  const [book, setBooks] = useState([]);
  const idm = pathname.slice(6);
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`/course/${idm}`)
        .then((res) => {
          setcourse(res.data[0]);
          setBooks(res.data[1]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          window.location.href = "/home";
        });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFileExtension = (filename) => {
    const parts = filename.split(".");
    if (parts.length > 1) {
      return parts[parts.length - 1].toLowerCase();
    } else {
      return "";
    }
  };

  const getFiles = (path, lecture_name) => {
    setLoadingFile(true);

    const { name, year, semester } = path[0];

    const data = {
      programme: state,
      year: year,
      semester: semester,
      course: name,
      slide_name: lecture_name,
    };

    axios
      .post("/program/getDetaFile", data, { responseType: "blob" })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/octet-stream",
        });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = lecture_name;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);

        setLoadingFile(false);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        setLoadingFile(false);
      });
  };

  const displayFile = (path, lecture_name) => {
    const { name, year, semester } = path[0];

    const data = {
      programme: state,
      year: year,
      semester: semester,
      course: name,
      slide_name: lecture_name,
    };

    const ext = getFileExtension(lecture_name);
    if (ext === "pdf") {
      setLoadingFile(true);
      axios
        .post("/program/getDetaFile", data, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: response.data.type });
          // const blobs = new Blob([response.data], {
          //   type: "application/vnd.ms-powerpoint",
          // });
          // const blobUrl = URL.createObjectURL(blobs);
          const reader = new FileReader();

          reader.readAsDataURL(blob);

          reader.onloadend = () => {
            const dataURL = reader.result;

            navigate(`/preview/${name}/${lecture_name}`, {
              state: {
                fileContent: dataURL,
              },
            });
          };

          setLoadingFile(false);
        })
        .catch((error) => {
          console.error("Error downloading file:", error);
          setLoadingFile(false);
        });
    } else {
      setModal(true);
    }
  };

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  if (course[0].slides == "" && book == "") {
    return (
      <>
        <Navbar />
        <div
          className="hero"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${
              course.length !== 0 ? course[0].img : ""
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {course.length !== 0 ? (
            <h1>
              {" "}
              <span className="program_fonts">
                {course[0].name.toUpperCase()}
              </span>
            </h1>
          ) : (
            ""
          )}
        </div>
        <div className="Everything">
          <div style={{ display: "flex" }}>
            <div className="containers">
              <div style={{ marginTop: "25px", width: "60px" }}>
                <GoBack />
              </div>
              <div className="Available">{notAvailable}</div>
              {loaders[pos]}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return course != "" ? (
    <div>
      {loadingFile && <CustomLoader />}
      <Navbar />
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${
            course.length !== 0 ? course[0].img : ""
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {course.length !== 0 ? (
          <h1>
            {" "}
            <span className="program_fonts">
              {course[0].name.toUpperCase()}
            </span>
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="Everything">
        <>
          {modal && (
            <CustomModal
              isOpen={() => setModal(true)}
              closeModal={() => setModal(false)}
              message="Sorry, cannot preview ppt/pptx files at the moment, please download"
            />
          )}
        </>

        {course[0].slides == "" ? (
          <div style={{ display: "flex" }}>
            <div className="containers">
              <div style={{ marginTop: "25px", width: "60px" }}>
                <GoBack />
              </div>
              <div className="Available">{isAvailable}</div>
              {loaders[pos]}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "25px", width: "60px" }}>
              <GoBack />
            </div>
            <div className="containers">
              <div className="slides">
                <h1 className="lect_head">Slides</h1>
                {course[0].slides.map((slide) => (
                  <div className="lect_slides">
                    <div className="left_lect_block_4">
                      <div className="doc_icon_50x50">
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="30px"
                          height="30px"
                        >
                          <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z" />
                        </svg>
                      </div>
                      <h3 key={course.slides} className="lect_one">
                        {slide}
                      </h3>
                      {loaders[pos]}
                    </div>
                    <div className="right_lect_block_4">
                      <span
                        key={course.slides}
                        className="hov"
                        onClick={() => {
                          displayFile(course, `${slide}`);
                        }}
                      >
                        <HiEye style={{ marginRight: "10px" }} />
                      </span>
                      <span
                        key={course.slides}
                        className="hov"
                        onClick={() => {
                          getFiles(course, `${slide}`);
                        }}
                      >
                        <HiDownload />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {book == "" ? (
          <div>
            <div className="containers">
              <div className="Available">
                No Reference Books Available for this course
              </div>
              {loaders[pos]}
            </div>
          </div>
        ) : (
          <div className="slides">
            <h1 className="lect_head">Reference Books</h1>
            <div className="ref_bookss">
              {book.map((pbook) => (
                <CCol className="w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                  <Card
                    className="progcards"
                    key={pbook.id}
                    style={{ marginLeft: 0 }}
                  >
                    <Card.Img
                      className="progcardsimg"
                      variant="top"
                      src={Unavailable}
                    />
                    <Card.Body className="cardbody">
                      <Card.Title className="cardTitle">
                        {pbook.bookName}
                      </Card.Title>

                      <CAlert
                        color="danger"
                        dismissible
                        visible={visible}
                        onClose={() => setVisible(false)}
                      >
                        Sorry, temporarily unavailable
                      </CAlert>
                      <CButton color="dark" onClick={() => setVisible(true)}>
                        Download
                      </CButton>
                    </Card.Body>
                  </Card>
                </CCol>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate replace to="/404" />
  );
};

export default Course;
