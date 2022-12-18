import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/esm/Button";

const Hospital_Login = () => {
  const [database, setDatabase] = useState([]);
 const nav=useNavigate();
 const nav2=useNavigate();
 const Click=()=>{
  nav('/Home')
 }
 const Click2=()=>{
  nav2('/Main_Page')
 }
  const email=useRef();
  const password =useRef();
  const Submit=()=>{
  if(email.current.value=="khuram.21.09.19@gmail.com"&&password.current.value=="sam19oct"){
   
    localStorage.setItem("setemail","khuram.21.09.19@gmail.com");
    localStorage.setItem("Pass","sam19oct")
  Click();
  }else{
    alert("Please Entre true pass word")
  }
  }

  
  return (
    
    <div className="form mt-3">
      <h2 className="text-center">Login</h2>
      <form>
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
          onClick={Submit}
        >
          
          Log in
        </button>
        <Button onClick={Click2}>
       Main Page
        </Button>
        {/* <p>
          <Link to="/Sign">Signup Here</Link>
        </p> */}
      </div>
      </form>
    </div>
  );
};
export default Hospital_Login;