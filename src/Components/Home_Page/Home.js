import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import axios from 'axios';
// import Pateint_Records from "../Pateint_Records";
import Pateint_Records from "../Pateint_Panel/Pateint_Records";
import { useParams } from "react-router-dom";
const User_Home = () => {
  const {id}=useParams();
  const [usersList, setUsersList] = useState([]);
  const [name, setUsername] = useState("");
  
  // useEffect(() => {
    
  //   loadUser();
   
    
  // }, []);
// fetch("http://localhost:3008/users")
    //   .then((resp) => resp.json())
    //   .then((info) => setUsersList(info));
  
  useEffect(() => {
    // fetch("http://localhost:3008/users")
    //   .then((resp) => resp.json())
    //   .then((info) => setUsersList(info));
    loadUse2();
   
    
  }, []);
  const loadUser= async ()=>{
    const result =await axios.get(`http://localhost:3008/users`);
  setUsersList(result.data);
  }

  const loadUse2= async ()=>{
    const result =await axios.get(`http://localhost:3008/Pateint`);
  setUsersList(result.data);
  }
  // const loadUser= async ()=>{
  //   fetch("http://localhost:3008/users")
  //     .then((resp) => resp.json())
  //     .then((info) => setUsersList(info));
  // }
  const Delet_User= async id =>{
   
    await axios.delete(`http://localhost:3008/users/${id}`);
    loadUser();
  // loadUser();
  };
  
  // useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("name"));
    // if (items) {
    //   setUsername(items);
    // Delet_User();
    // localStorage.getItem("setemail");

    // }, []);
  
  return (
    <>
    <Pateint_Records/>
    <div className="card p-10" >
      {/* <h1>{name}</h1> */}
      
      <br />
     
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link to="/Add_Doctor"> <Button>Add Doctor</Button></Link>
        
          </Navbar.Brand>
        </Container>
      </Navbar>

      <table className="table table-bordered" varriant="danger">
        <thead className="" >
        <th>
            <tr>Id</tr>
            </th>
          <th>
            <tr>Name</tr>
            </th>
           
            <th>
            <tr>Email
            </tr>
            </th>
            <th>
            Edit
            <tr>
            </tr>
            </th>
            <th>
           <tr>Delate</tr>
            </th>
           
        </thead>
        
        <tbody >
          {usersList.map((user) => (
            <tr>
             <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
               <td> <Link to={`/Home/Edit_Doctors/${user.id}`}><Button>Edit</Button></Link></td> 
               <Link onClick={()=>Delet_User(user.id)}><Button>Delet</Button></Link>
              
            </tr>
          ))}
        </tbody>
      </table>

        {/* <button className="btn btn-dark col-md-3">
        <Link to="/Sign">    Logout  </Link> 
        </button> */}
       
        <button className="btn btn-dark col-md-3">
        <Link to="/Main_Page">Log out</Link> 
        </button>
       
       
    </div>
    </>
  );
};
export default User_Home;