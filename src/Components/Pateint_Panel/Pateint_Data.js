import { useEffect, useState } from "react";

const Pateint_Data=()=>{
 
  const [usersList, setUsersList] = useState([]);

 


    useEffect(() => {
        fetch("http://localhost:3008/Pateint")
          .then((resp) => resp.json())
          .then((info) => setUsersList(info));
        //  login()
  

      }, []);








    
    return(
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
          
          <tr>Password
          </tr>
          
          </th>
          <th>
          
          <tr>Phone Nubmer
          </tr>
          
          </th>
         
         
      </thead>
      
      <tbody >
        {usersList.map((Patient) => (
          <tr>
           <td>{Patient.id}</td>
            <td>{Patient.name}</td>
            <td>{Patient.email}</td>
             {/* <td> <Link to={`/Home/Edit_Doctors/${user.id}`}><Button>Edit</Button></Link></td> 
             <Link onClick={()=>Delet_User(user.id)}><Button>Delet</Button></Link> */}
            
          </tr>
        ))}
        
      </tbody>
    </table>

 
  
 

    )
}; export default Pateint_Data;