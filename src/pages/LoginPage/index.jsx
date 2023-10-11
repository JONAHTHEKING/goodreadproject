import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const LoginPage = () => {
  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
        (response) => {
          localStorage.setItem("token", response.data.token);
          setResponseData({
            responseText: "Login Successful, thank you",
            responseClass: "alert alert-success",
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        },
        (error) => {
          setResponseData({
            responseText: error.response.data.message,
            responseClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should have at least 6 characters"),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <div className={responseData.responseClass} role="alert">
              {responseData.responseText}
            </div>

            <h2 className="text-center">LogIn</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        className="form-control"
                        name="password"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    >
                      Login
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              New user? <a href="/register">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
