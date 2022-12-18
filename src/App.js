import logo from './logo.svg';
import './App.css';

// import User_Page from './Components/Main_Page/Main_Page';
// import Sign from './Components/Pateint_Registration';

import {  Routes, Route } from "react-router-dom";
 import Card from 'react-bootstrap/Card';
 import Add_Doctors from './Components/Doctor_Panel/Add_Doctor';
 import Doctor_Loging from './Components/Doctor_Panel/Doctor';
 import Pateint_Data from './Components/Pateint_Panel/Pateint_Data';
 import Sign from './Components/Pateint_Panel/Pateint_Registration';
 import User_Home from './Components/Home_Page/Home';
 import User_Page from './Components/Main_Page/Main_Page';
 import Hospital_Login from './Components/Hospital_Panel/Hospital_Dashboard';
import Edit_Doctors from './Components/Doctor_Panel/Edit_Doctor';
import Patient_Loging from './Components/Pateint_Panel/Patein_Login';
// import Moment from 'react-moment';
// import 'moment-timezone';
//  import User_Home from './Components/Home';
//  import Add_Doctors from './Components/Doctor_Panel/Add_Doctor';


//  import Edit_Doctors from './Components/Edit_Doctor';
//  import Pateint_Records from './Components/Pateint_Records';
//  import Pateint_Data from './Components/Pateint_Panel/Pateint_Data';
function App() {
  // const date = new Date();
  // const dateToFormat = '1976-04-19T12:59-0500';
  return (
    
    <div className="App">
     
      <header className="App-header">
        <h1>MERHAM</h1>
      </header>
      
      <Routes>
      <Route exact path="/Main_Page"  element={<User_Page />}/>
      <Route exact path="/Hospital_Login"  element={<Hospital_Login />}/>
      
      <Route path="/Home"  element={<User_Home />}/>
        <Route exact path="/Patient_Sign_Up_Page"  element={<Sign />}/> 
        <Route exact path="/Patient_Login_Page"  element={<Patient_Loging />}/> 
        <Route exact path="/Patient"  element={<Pateint_Data />}/> 
        <Route path="/Doctor_Login"  element={<Doctor_Loging />}/>
        <Route path="/Add_Doctor"  element={<Add_Doctors />}/>
        // <Route path="/Home/Edit_Doctors/:id"  element={<Edit_Doctors />}/>
      </Routes>
      
            {/* <Moment>{dateToFormat}</Moment> */}
     <footer className='App-header'>
     <p>We are providing the medicle services</p> 
     
     {/* <Moment subtract={{  hours: 12 }}>{date}</Moment> */}
   
     </footer>       
    </div>
  );
}

export default App;
