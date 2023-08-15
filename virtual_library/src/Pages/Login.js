import {
  ExtraTexts,
  Erromsg,
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  StyledSubTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../Components/Style";
import Logo from "./../Assets/Klogo.png";
import React, { useState } from "react";
import axios from "./utils/axios";
import { Form, Formik } from "formik";
import { TextInput } from "../Components/Form";
import { FiUser, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { useAuth } from "./hooks/useAuth";
import Google from "../Assets/google-logo (1).png";
import { useLocation } from "react-router";

const Login = () => {
  const [Error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [visibile, setvisibile] = useState(false);

  const { search } = useLocation();

  const googleAuth = () => {
    window.open(
      // `http://www.thvirtuallibrary.com:3500/api/auth/google`,
      `https://virtual-library-server.onrender.com/api/auth/google`,
      "_self"
    );
  };

  const handleSubmit = async (inputs) => {
    await axios
      .post("/login", {
        username: inputs.username.trim(),
        password: inputs.password.trim(),
      })
      .then(() => {
        setLoading(true);
        login();
      })
      .catch((error) => {
        error.message = "Invalid username/password";
        setError(error.message);
        setLoading(false);
      });
  };

  const handleClick = () => {
    setvisibile(true);
    setTimeout(() => {
      setvisibile(false);
      setError("");
    }, 3000);
  };

  setTimeout(() => {
    if (document.getElementById("goog")) {
      var msg = document.getElementById("goog");
      msg.parentNode.removeChild(msg);
    }
  }, 3000);

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
    <StyledContainer>
      <div>
        <StyledFormArea>
          <div style={{ display: "flex" }}>
            <Avatar image={Logo} />
            <StyledTitle color="Light black" size={40}>
              <span
                style={{ font: "normal 36px 'Poppins', cursive", margin: 0 }}
              >
                E - 
              </span>
              <span
                style={{
                  color: "#e0ac1c",
                  font: "normal 36px 'Poppins', cursive",
                }}
              >
                Library
              </span>
            </StyledTitle>
          </div>
          <StyledSubTitle
            color="Black"
            size={35}
            style={{ font: "normal 36px 'Poppins', cursive" }}
          >
            Login
          </StyledSubTitle>

          {search === "?authfailed" ? (
            <span
              id="goog"
              style={{ color: "red", fontSize: "13px", letterSpacing: "0px" }}
            >
              You do not have an account with this email, please Signup
            </span>
          ) : (
            <></>
          )}
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("Username is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  id="inp"
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  icon={<FiUser />}
                />
                <Erromsg>{visibile && Error}</Erromsg>

                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  icon={<FiLock />}
                />
                <Erromsg>{visibile && Error}</Erromsg>

                <TextLink
                  to="/forgotpassword"
                  style={{
                    position: "relative",
                    left: "-100px",
                    top: "0px",
                    color: "red",
                    fontSize: "17px",
                    letterSpacing: "0px",
                  }}
                >
                  Forgot Password?
                </TextLink>

                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit" onClick={handleClick}>
                      Login
                    </StyledFormButton>
                  )}

                  {isSubmitting && (
                    <ThreeDots color={colors.theme} height={49} width={100} />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>

          <ExtraTexts
            size={20}
            onClick={() => {
              googleAuth();
            }}
          >
            <img
              src={Google}
              alt="google"
              style={{ height: "25px", width: "25px" }}
            ></img>
            <span>Log in with your google account</span>
          </ExtraTexts>

          <ExtraText>
            Don't have an account? Click{" "}
            <TextLink to="/signup">Signup</TextLink> to register
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>Copyright © 2023 <strong>WORKALOLICS</strong> All rights reserved</CopyrightText>

      </div>
    </StyledContainer>
  );
};

export default Login;
