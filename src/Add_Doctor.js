import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Add_Doctors=()=>{
    const[doctor, setDoctor]= useState({
        name:"",
        email:""
    })
    let NAV=useNavigate();
   
    const NavLinkCSS=({isActive})=>{
        return {
          fontWeight: isActive ?  'bold' :'normal',
          fontSize : isActive ? '40px' : '30px',
          colour :isActive  ? 'White' :'White'
        }
  }
    
    const {name,email }=doctor;
    const handleInputChange=(e)=>{
          setDoctor({...doctor,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=> {
        // e.preventDefault();
         axios.post("http://localhost:3008/users",doctor)
        NAV.push("/");
    
    }
 
    return(
        
        <form className='from-control'>
            
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
                        <label className='form-label' ></label>
                        <input className='form-control '
                            placeholder='Email'
                            type="email"
                            name='email'
                            id='email'
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
}; export default Add_Doctors;