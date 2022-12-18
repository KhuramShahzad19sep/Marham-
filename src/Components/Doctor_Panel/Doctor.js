import React, { useEffect } from "react";
// import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Doctor_Loging = () => {
  const [database, setDatabase] = useState([]);
  
 
 const nav=useNavigate();
 const Click=()=>{
  nav('/Home')
 }
  const email=useRef();
  const password =useRef();
  const Submit=()=>{
  if(email.current.value=="khuram.21.09.19@gmail.com"&&password.current.value=="sam19oct"){
    localStorage.setItem("setemail","khuram.21.09.19@gmail.com");
    localStorage.setItem("Pass","Khuram19oct")
  Click();
  }else{
    alert("Please Entre true pass word")
  }
  }
  const navigate = useNavigate();
  const handleClick = () =>{
    
    
    navigate("Doctor_Home_Page")
  };
 
  return (
  
    <div className="form mt-3">
     <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
      <h2 className="text-center">Login</h2>
      <form onSubmit={Submit}>
      <div className="form-body">
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="text" ref={email}
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form-control"
            type="password"
            ref={password}
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          type="submit"
          class="btn btn-success"
          >
           Log in
        </button>
        {/* <p>
          <Link to="/Sign">Signup Here</Link>
        </p> */}
      </div>
      </form>
    </div>
  );
};
export default Doctor_Loging;