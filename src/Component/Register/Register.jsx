import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Register() {  
  let navigate = useNavigate();
  const [isdone , setIsDone] = useState(false);
  const [msgError , setMsgError] = useState("");
  function validate(val){
    let errors = {};
          // name 
          if(!val.name){
            errors.name = "Name is required";
          }else if (val.name.length < 3){
            errors.name = "minlength is 3";
          }else if (val.name.length > 10){
            errors.name = "maxlength is 10";
          }

          // email 
          if(!val.email){
            errors.email = "Email is required";
          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val.email)){
            errors.email = "Email is Not Valied";
          }

          // password 
          if(!val.password){
            errors.password = "Password is required";
          }else if(val.password.length < 6){
            errors.password = "Password must be at least 6 chars";
          }

          // rePassword 
          if(!val.rePassword){
            errors.rePassword = "rePassword is required";
          }else if(val.rePassword !== val.password){
            errors.rePassword = "Password adn rePassword must be match";
          }

          // phone  
          if(!val.phone){
            errors.phone = "Phone is required";
          }else if(!/^01[0125][0-9]{8}$/.test(val.phone)){
            errors.phone = "Phone is Not Valied";
          }


    return errors;
  }


  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validate,
     onSubmit : async (val)=>{
       setIsDone(true);
       // send data to BackEnd
       let {data} = axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',val).catch((err)=>{
          setMsgError(`${err.response.data.errors.param} : ${err.response.data.errors.msg}`)
          setIsDone(false);
       })
       if(data.message === "success"){
         setIsDone(false);
         navigate("/login")
      }
    }
  });
  return (
    <>
      <div className="container mt-5 w-75 py-5">
        <h2>Register Now :</h2>
        {msgError ?<div className="alert alert-danger">{msgError}</div> : "" }
        <form action="" onSubmit={Formik.handleSubmit}>
          <div className="form-group mt-3 mb-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=""
              value={Formik.values.name}
              className="form-control"
              onBlur={Formik.handleBlur}
              onChange={Formik.handleChange}
            />
            {Formik.errors.name && Formik.touched.name?<div className="alert alert-danger">{Formik.errors.name}</div>:""}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              className="form-control"
              onBlur={Formik.handleBlur}
              onChange={Formik.handleChange}
            />
            {Formik.errors.email && Formik.touched.email?<div className="alert alert-danger">{Formik.errors.email}</div>:""}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder=""
              className="form-control"
              onBlur={Formik.handleBlur}
              onChange={Formik.handleChange}
            />
            {Formik.errors.password && Formik.touched.password?<div className="alert alert-danger">{Formik.errors.password}</div>:""}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="rePassword">RePassword:</label>
            <input
              id="rePassword"
              name="rePassword"
              type="password"
              placeholder=""
              className="form-control"
              onBlur={Formik.handleBlur}
              onChange={Formik.handleChange}
            />
            {Formik.errors.rePassword && Formik.touched.rePassword?<div className="alert alert-danger">{Formik.errors.rePassword}</div>:""}

          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder=""
              className="form-control"
              onBlur={Formik.handleBlur}
              onChange={Formik.handleChange}
            />
            {Formik.errors.phone && Formik.touched.phone?<div className="alert alert-danger">{Formik.errors.phone}</div>:""}            
          </div>
          <div className="form-group text-start">
            {isdone?<button type="button" className="btn btn-lg btn-success"><i className="fa fa-spinner fa-spin"></i></button>:
            <button disabled={!(Formik.isValid && Formik.dirty)} type="submit" className="btn btn-lg btn-success">
              Register
            </button>
            }
          </div>
        </form>
      </div>
    </>
  );
}
