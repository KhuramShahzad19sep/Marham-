import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit_Doctors=()=>{
    let NAV=useNavigate();
    const {id}=useParams();
    const[doctor, setDoctor]= useState({
        name:"",
        email:""
    })
    const NavLinkCSS=({isActive})=>{
        return {
          fontWeight: isActive ?  'bold' :'normal',
          fontSize : isActive ? '40px' : '70px',
          colour :isActive  ? 'White' :'White'
        }
  }

    const {name,email }=doctor;
    const handleInputChange=(e)=>{
          setDoctor({...doctor,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=> {
        e.preventDefault();
         axios.put(`http://localhost:3008/users/${id}`,doctor)
        NAV.push("/Home");
    //    NAGIGATION();
    }
   const loadUser= async ()=>{
    const result =await axios.get(`http://localhost:3008/users/${id}`,doctor);
  setDoctor(result.data);
}
useEffect(()=>{
    loadUser();
      },[]);
    return(
        
        <form className='from-control'>
            <h1>wecome</h1>
            <div className='form-control'>
            <h2 className='text-center'> Add Doctor</h2>
                
                <div className='form-body'>
                    <div className='form-control'>
                        
                        <input className='form-control '
                            placeholder='Name'
                            type="text"
                            name='name'
                            id='name'
                            value={name}
                            required
                            onChange={(e) => (handleInputChange(e))}
                        />
                     
                        <input className='form-control '
                            placeholder='Email'
                            type="email"
                            name='email'
                          
                            value={email}
                            onChange={(e) => (handleInputChange(e))}
                        />
                    </div>
                 
                </div>
                <NavLink style={NavLinkCSS} to ='/Home'>
                <Button onClick={onSubmit} >Submit</Button>
                </NavLink>
               
            </div>
            
        </form>
    );
}; export default Edit_Doctors;