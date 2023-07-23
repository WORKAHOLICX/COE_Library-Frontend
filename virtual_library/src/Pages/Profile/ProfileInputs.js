import React, { useState } from "react";
import "./Profile.css";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import GoBack from "../../Components/GoBack/GoBack";
import axios from "../utils/axios";
import { ThreeDots } from "react-loader-spinner";
import Modal from "../../Components/Modal";
import { ButtonGroup, Erromsg } from "../../Components/Style";
import * as Yup from "yup";
import ImageUpload from "./ImageUpload";
import { Formik, Form, Field } from "formik";

function Profile() {
  const { user, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const { fullname, username, email, programme, year } = user;
  const [color, setcolor] = useState("gray");
  const [colour, setcolour] = useState("gray");
  const Programmes = [
    { id: 1, name: "Agricultural Engineering" },
    { id: 2, name: "Chemical Engineering" },
    { id: 3, name: "Civil Engineering" },
    { id: 4, name: "Geomatic Engineering" },
    { id: 5, name: "Materials Engineering" },
    { id: 6, name: "Mechanical Engineering" },
    { id: 7, name: "Electrical Engineering" },
    { id: 8, name: "Computer Engineering" },
    { id: 9, name: "Aerospace Engineering" },
    { id: 10, name: "Petroleum Engineering" },
    { id: 11, name: "Telecom Engineering" },
    { id: 12, name: "Geological Engineering" },
    { id: 13, name: "Biomedical Engineering" },
    { id: 14, name: "Petrochemical Engineering" },
    { id: 15, name: "Metallurgical Engineering" },
  ];
  const Level = [
    { id: 1, level: "Level 100" },
    { id: 2, level: "Level 200" },
    { id: 3, level: "Level 300" },
    { id: 4, level: "Level 400" },
  ];
  const [changePassword, setChangePassword] = useState(false);
  const [err1, seterr1] = useState("");
  const [err2, seterr2] = useState("");
  const [visibile, setvisibile] = useState(false);
  const [currentprog, setcurrentprog] = useState(programme);
  const [currentyear, setcurrentyear] = useState(year);

  function newPassword() {
    setChangePassword((prevState) => !prevState);
  }

  function setNewyear(event) {
    const p = event.target.value;
    if (p === year) {
      setcolour("gray");
    } else {
      setcolour("black");
    }
    setcurrentyear(event.target.value);
  }

  function setNewprog(event) {
    const p = event.target.value;
    if (p === programme) {
      setcolor("gray");
    } else {
      setcolor("black");
    }
    setcurrentprog(event.target.value);
  }

  const setNewUserDetails = async (field, new_value, old_value) => {
    await axios
      .post("/settings", {
        field: field,
        new_value: new_value,
        old_value: old_value,
      })
      .then(async (res) => {
        console.log(res);
        const response = res.data.msg;
        if (response === "password changed") {
          seterr2(response);
        }
        await login();
        setLoading(false);
        return window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        const error = err.response.data.msg;
        if (error === "User is not Logged In") {
          logout();
        }
        if (error === "password incorrect") {
          seterr2(error);
        }
        if (error === "username is already taken") {
          seterr1(error);
        }
        if (err.response.status === 401) {
          logout();
        }
        setLoading(false);
      });
  };

  const handleClick = () => {
    setvisibile(true);

    setTimeout(() => {
      setvisibile(false);
      seterr1("");
      seterr2("");
    }, 3000);
  };

  if (loading) {
    return (
      <div>
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ImageUpload greet={username} />

      <div style={{ marginTop: "25px", width: "50px" }}>
        <GoBack />
      </div>
      <div className="form-containerss ">
        <div className="input-containerss new-container">
          <h2 className="personal">Personal Information</h2>

          {user.length !== 0 ? (
            <>
              <div>
                <label className="input-label">Email</label>
                <div className="rowss">
                  <div className="email-field">{email}</div>
                </div>
              </div>
              <Formik
                initialValues={{
                  fullnames: "",
                }}
                validationSchema={Yup.object({
                  fullnames: Yup.string()
                    .required("Enter new name to update")
                    .min(7, "Should be in between 7 and 29 characters")
                    .max(29, "Should be in between 7 and 29 characters")
                    .notOneOf([fullname], "Name is the same as old name")
                    .matches(
                      /^[A-Za-z0-9\s]+$/,
                      "Only alphanumeric are allowed"
                    )
                    .matches(/^(?![0-9]*$)/, "Only numbers are not allowed"),
                })}
                onSubmit={(values, actions) => {
                  setNewUserDetails("fullname", values.fullnames.trim());
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <label className="input-label">Full Name</label>

                    <div className="rowss">
                      <div className="updating-password">
                        <Field
                          className="input-field"
                          name="fullnames"
                          type="text"
                          placeholder={fullname}
                        />

                        {touched.fullnames && errors.fullnames ? (
                          <Erromsg style={{ paddingLeft: "10px" }}>
                            {errors.fullnames}
                          </Erromsg>
                        ) : (
                          <Erromsg
                            style={{
                              visibility: "hidden",
                              paddingLeft: "10px",
                            }}
                          ></Erromsg>
                        )}
                      </div>

                      {!isSubmitting && (
                        <button type="submit" className="button-input">
                          Update
                        </button>
                      )}
                      <ButtonGroup>
                        {isSubmitting && (
                          <ThreeDots color="yellow" height={50} width={80} />
                        )}
                      </ButtonGroup>
                    </div>
                  </Form>
                )}
              </Formik>

              <Formik
                initialValues={{
                  usernames: "",
                }}
                validationSchema={Yup.object({
                  usernames: Yup.string()
                    .required("Enter new username to update")
                    .min(2, "Should be in between 2 and 29 characters")
                    .max(29, "Should be in between 2 and 29 characters")
                    .notOneOf(
                      [username],
                      "Username is the same as old username"
                    )
                    .matches(
                      /^[A-Za-z0-9\s]+$/,
                      "Only alphanumeric are allowed"
                    )
                    .matches(/^(?![0-9]*$)/, "Only numbers are not allowed"),
                })}
                onSubmit={(values, actions) => {
                  setNewUserDetails("username", values.usernames.trim());
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <label className="input-label">Username</label>
                    <div className="rowss">
                      <div className="updating-password">
                        <Field
                          className="input-field"
                          name="usernames"
                          type="text"
                          placeholder={username}
                        />

                        {touched.usernames && errors.usernames ? (
                          <Erromsg style={{ paddingLeft: "10px" }}>
                            {errors.usernames}
                          </Erromsg>
                        ) : (
                          <Erromsg
                            style={{
                              visibility: "hidden",
                              paddingLeft: "10px",
                            }}
                          ></Erromsg>
                        )}
                        <Erromsg
                          style={{
                            paddingLeft: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          {visibile && err1}
                        </Erromsg>
                      </div>

                      {!isSubmitting && (
                        <button
                          type="submit"
                          className="button-input"
                          onClick={handleClick}
                        >
                          Update
                        </button>
                      )}
                      <ButtonGroup>
                        {isSubmitting && (
                          <ThreeDots color="yellow" height={50} width={80} />
                        )}
                      </ButtonGroup>
                    </div>
                  </Form>
                )}
              </Formik>

              <Formik
                initialValues={{
                  programmeselect: "",
                }}
                validationSchema={Yup.object({
                  programmeselect: Yup.string()
                    .oneOf(
                      [
                        "Agricultural Engineering",
                        "Chemical Engineering",
                        "Civil Engineering",
                        "Geomatic Engineering",
                        "Materials Engineering",
                        "Mechanical Engineering",
                        "Electrical Engineering",
                        "Computer Engineering",
                        "Aerospace Engineering",
                        "Petroleum Engineering",
                        "Telecom Engineering",
                        "Geological Engineering",
                        "Biomedical Engineering",
                        "Petrochemical Engineering",
                        "Metallurgical Engineering",
                      ],
                      "Select new programme"
                    )
                    .notOneOf([programme], "Select new programme")
                    .required("Select new programme"),
                })}
                onSubmit={(values, actions) => {
                  setNewUserDetails("programme", values.programmeselect.trim());
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form onChange={setNewprog}>
                    <label className="input-label">Programme</label>
                    <div className="rowss">
                      <div className="updating-password">
                        <Field
                          as="select"
                          value={currentprog}
                          name="programmeselect"
                          className="input-field"
                          type="dropdown"
                          style={{ color: color }}
                        >
                          {Programmes.map((prog, index) => (
                            <>
                              <option key={prog.id} style={{ color: "black" }}>
                                {prog.name}
                              </option>
                            </>
                          ))}
                        </Field>

                        {touched.programmeselect && errors.programmeselect ? (
                          <Erromsg style={{ paddingLeft: "10px" }}>
                            {errors.programmeselect}
                          </Erromsg>
                        ) : (
                          <Erromsg
                            style={{
                              visibility: "hidden",
                              paddingLeft: "10px",
                            }}
                          ></Erromsg>
                        )}
                      </div>

                      {!isSubmitting && (
                        <button type="submit" className="button-input">
                          Update
                        </button>
                      )}
                      <ButtonGroup>
                        {isSubmitting && (
                          <ThreeDots color="yellow" height={50} width={80} />
                        )}
                      </ButtonGroup>
                    </div>
                  </Form>
                )}
              </Formik>

              <Formik
                initialValues={{
                  yearselect: "",
                }}
                validationSchema={Yup.object({
                  yearselect: Yup.string()
                    .oneOf(
                      ["Level 100", "Level 200", "Level 300", "Level 400"],
                      "Select new year"
                    )
                    .required("Select new year")
                    .notOneOf([year], "Select new year"),
                })}
                onSubmit={(values, actions) => {
                  setNewUserDetails("year", values.yearselect.trim());
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form onChange={setNewyear}>
                    <label className="input-label">Programme</label>
                    <div className="rowss">
                      <div className="updating-password">
                        <Field
                          as="select"
                          value={currentyear}
                          name="yearselect"
                          className="input-field"
                          type="dropdown"
                          style={{ color: colour }}
                        >
                          {Level.map((level) => (
                            <>
                              <option key={level.id} style={{ color: "black" }}>
                                {level.level}
                              </option>
                            </>
                          ))}
                        </Field>

                        {touched.yearselect && errors.yearselect ? (
                          <Erromsg style={{ paddingLeft: "10px" }}>
                            {errors.yearselect}
                          </Erromsg>
                        ) : (
                          <Erromsg
                            style={{
                              visibility: "hidden",
                              paddingLeft: "10px",
                            }}
                          ></Erromsg>
                        )}
                      </div>

                      {!isSubmitting && (
                        <button type="submit" className="button-input">
                          Update
                        </button>
                      )}
                      <ButtonGroup>
                        {isSubmitting && (
                          <ThreeDots color="yellow" height={50} width={80} />
                        )}
                      </ButtonGroup>
                    </div>
                  </Form>
                )}
              </Formik>

              <Formik
                initialValues={{
                  oldpassword: "",
                  newpassword: "",
                  confirmpassword: "",
                }}
                validationSchema={Yup.object({
                  oldpassword: Yup.string().required(
                    "Please enter your old password"
                  ),
                  newpassword: Yup.string()
                    .required("Please enter your new password")
                    .min(5, "Should be in between 5 and 24 characters")
                    .max(24, "Should be in between 5 and 24 characters")
                    .notOneOf(
                      [Yup.ref("oldpassword")],
                      "Password is the same as old password"
                    )
                    .matches(
                      /^((?![@/*<>#$%^&]).)*$/,
                      "Symbol not allowed for this field"
                    ),
                  confirmpassword: Yup.string()
                    .required("Confirm your new password")
                    .oneOf(
                      [Yup.ref("newpassword")],
                      "Password is not the same"
                    ),
                })}
                onSubmit={(values, actions) => {
                  setNewUserDetails(
                    "password",
                    values.newpassword.trim(),
                    values.oldpassword.trim()
                  );
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <h2 className="password-change">Change Password</h2>

                    <label className="input-label">Old Password</label>
                    <div className="rowss">
                      <div className="updating-password">
                        {changePassword ? (
                          <Field
                            className="input-field input-field-password"
                            name="oldpassword"
                            type="password"
                            placeholder="Enter your old password"
                          />
                        ) : (
                          <Field
                            className="input-field "
                            name="old_password"
                            type="password"
                            placeholder="Enter your old password"
                          />
                        )}
                        {touched.oldpassword && errors.oldpassword ? (
                          <Erromsg style={{ paddingLeft: "10px" }}>
                            {errors.oldpassword}
                          </Erromsg>
                        ) : (
                          <Erromsg
                            style={{
                              visibility: "hidden",
                              paddingLeft: "10px",
                            }}
                          ></Erromsg>
                        )}
                        <Erromsg
                          style={{
                            paddingLeft: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          {visibile && err2}
                        </Erromsg>
                      </div>
                      {changePassword ? (
                        ""
                      ) : (
                        <button
                          className="button-input"
                          style={{ width: "100px" }}
                          onClick={newPassword}
                        >
                          Click to Update
                        </button>
                      )}
                    </div>

                    {changePassword ? (
                      <>
                        <label className="input-label">New password</label>
                        <div className="rowss">
                          <div className="updating-password">
                            <Field
                              className="input-field input-field-password"
                              name="newpassword"
                              type="password"
                              placeholder="Enter new password"
                            />

                            {touched.newpassword && errors.newpassword ? (
                              <Erromsg style={{ paddingLeft: "10px" }}>
                                {errors.newpassword}
                              </Erromsg>
                            ) : (
                              <Erromsg
                                style={{
                                  visibility: "hidden",
                                  paddingLeft: "10px",
                                }}
                              ></Erromsg>
                            )}
                          </div>
                        </div>

                        <label className="input-label">
                          Confirm New Password
                        </label>
                        <div className="rowss">
                          <div className="updating-password">
                            <Field
                              className="input-field input-field-password"
                              name="confirmpassword"
                              type="password"
                              placeholder="Confirm password"
                            />

                            {touched.confirmpassword &&
                            errors.confirmpassword ? (
                              <Erromsg style={{ paddingLeft: "10px" }}>
                                {errors.confirmpassword}
                              </Erromsg>
                            ) : (
                              <Erromsg
                                style={{
                                  visibility: "hidden",
                                  paddingLeft: "10px",
                                }}
                              ></Erromsg>
                            )}

                            <ButtonGroup>
                              {!isSubmitting && (
                                <button
                                  type="submit"
                                  className="button-input"
                                  onClick={handleClick}
                                >
                                  Update
                                </button>
                              )}
                              {isSubmitting && (
                                <ThreeDots
                                  color="yellow"
                                  height={50}
                                  width={80}
                                />
                              )}
                            </ButtonGroup>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </Form>
                )}
              </Formik>

              <Modal />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
