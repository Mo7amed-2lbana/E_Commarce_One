import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import $ from 'jquery';

export default function Login({saveUser}) {
  
  // get useNavigate
  const navigate = useNavigate();

  // create variables with useState hooks
  const [isDone, setIsDone] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // validate form
  function validate(val) {
    let errors = {};

    // email
    if (!val.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val.email)) {
      errors.email = "Email is Not Valied";
    }

    // password
    if (!val.password) {
      errors.password = "Password is required";
    } else if (val.password.length < 6) {
      errors.password = "Password must be at least 6 chars";
    }

    return errors;
  }

  // using useFormik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,

    onSubmit: async (val) => {
      setIsDone(true);

      let { data } = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", val)
        .catch((err) => {
          setErrMsg(`${err.response.data.message}`);
          setIsDone(false);
        });

      if (data.message === "success") {
        setIsDone(false);
        localStorage.setItem("UserToken" , data.token);
        $("#done").fadeIn(500 , function(){
          setTimeout(() => {
            $("#done").fadeOut(200);
          }, 400);
          navigate("/home");
        });
        saveUser();
      }
    },
  });

  return (
    <>
      <div className="container mt-5 w-75 py-5">
        <h2>Login Now :</h2>
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}
        <div id="done" style={{"display" : "none"}} className="alert alert-success text-center">Done</div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="form-group mt-3 mb-3">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder=""
              value={formik.values.passowrd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger">{formik.errors.password}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group text-start">
            {isDone ? (
              <button type="button" className="btn btn-lg btn-success">
                <i className="fa fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="btn btn-lg btn-success"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
