import { useEffect, useState } from "react";


const Pateint_Data=()=>{
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3008/users")
          .then((resp) => resp.json())
          .then((info) => setUsersList(info));
       
      }, []);
    
    return(
        <thead>
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
        </thead>
        
    )
}; export default Pateint_Data;