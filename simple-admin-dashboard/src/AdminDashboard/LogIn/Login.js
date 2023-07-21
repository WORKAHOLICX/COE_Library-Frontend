import React, { useState } from "react";
import {
  Container,
  Wrapper,
  LoginButton,
  InputContainer,
  InputLabel,
} from "./LoginStyled";
import { ButtonGroup, Erromsg } from "../../Components/Style";
import { TextInput } from "../../Components/Form";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Image from "../../Assets/Klogo.png";
import axios from "../../utils/axios";
import { useAuth } from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import "./loading.css";

function Login() {
  const [Error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [visibile, setvisibile] = useState(false);

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
        error.message = "Invalid password";
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
      <Container>
        <div className="overlay">
          <Wrapper>
            <img
              src={Image}
              alt="VL"
              style={{ width: "80px", height: "80px" }}
            />
            <h2>Welcome To The Admin Site</h2>
            <Formik
              initialValues={{
                username: "admin",
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
                  <InputContainer>
                    <InputLabel>Username</InputLabel>
                    <TextInput
                      name="username"
                      type="text"
                      label="Username"
                      placeholder="Enter your username"
                      disabled
                    />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel>Password</InputLabel>
                    <TextInput
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                    />
                    <Erromsg>{visibile && Error}</Erromsg>
                  </InputContainer>

                  <ButtonGroup>
                    {!isSubmitting && (
                      <LoginButton
                        type="submit"
                        className="action"
                        onClick={handleClick}
                      >
                        Login{" "}
                      </LoginButton>
                    )}

                    {isSubmitting && (
                      <ThreeDots color="#FF652F" height={49} width={100} />
                    )}
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </Wrapper>
        </div>
      </Container>
    </>
  );
}

export default Login;
