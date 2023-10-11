import * as Yup from "yup";

import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });

  const nav = useNavigate();

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          setResponseData({
            responseText: "Registration Successful",
            responseClass: "alert alert-success",
          });
          setTimeout(() => {
            nav("/login");
          }, 1000);
        },
        (error) => {
          setResponseData({
            responseText: "Registration Failed, try again",
            responseClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });

    // console.log(values);
    // fetch("https://orca-app-jhg4l.ondigitalocean.app/api/auth/register", {
    // 	method: "POST",
    // 	header: {
    // 		"content-type": "application/json"
    // 	},
    // 	body: JSON.stringify(values)
    // }).then((response) => {
    // 	console.log(response)
    // 	if (response.status === 201) {
    // 		return response.json()
    // 	} else {
    // 		throw new Error(response.statusText)
    // 	}
    // }).then((json) => {
    // 	setResponseData({
    // 		responseText: "Registration Successful",
    // 		responseClass: "alert alert-success"
    // 	})
    // }).catch((error) => {
    // 	setResponseData({
    // 		responseText: "Registration Failed",
    // 		responseClass: "alert alert-danger"
    // 	})
    // })
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("FirstName is required"),
    email: Yup.string()
      .required("email is required")
      .email("pls enter valid email"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should have at least 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              background: "#fff",
              padding: "30px 40px",
              borderRadius: "10px",
              marginTop: "80px",
              boxShadow: "10px 5px 3px #7d7c7c",
            }}
          >
            <div className={responseData.responseClass} role="alert">
              {responseData.responseText}
            </div>
            <h2 className="text-center">Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <div className="form-group">
                <label htmlFor="">FirstName</label>
                <input
                  type="text"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary btn-block"
                value="Register"
              />
            </form>
            <br />
            <p className="text-center">
              Already have an account ? <a href="/login">Login</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
