import logo from './logo.svg';
import './App.css';
import User_Page from './Components/Main_Page';
import Sign from './Components/Pateint_Registration';
import Doctor_Loging from './Components/Doctor';
import {  Routes, Route } from "react-router-dom";
 import Card from 'react-bootstrap/Card';
 import User_Home from './Components/Home';
 import Add_Doctors from './Add_Doctor';
 import Moment from 'react-moment';
 import Edit_Doctors from './Components/Edit_Doctor';
 import Pateint_Records from './Components/Pateint_Records';
 import Pateint_Data from './Components/Pateint_Data';
function App() {
  const date = new Date();
  return (
    
    <div className="App">
     
      <header className="App-header">
        <h1>MERHAM</h1>
      </header>
      
      <Routes>
      <Route exact path="User"  element={<User_Page />}/>
      <Route path="/Home"  element={<User_Home />}/>
        <Route exact path="/Sign"  element={<Sign />}/> 
        <Route exact path="/Patient"  element={<Pateint_Data />}/> 
        <Route path="/Login"  element={<Doctor_Loging />}/>
        <Route path="/Add_Doctor"  element={<Add_Doctors />}/>
        <Route path="/Home/Edit_Doctors/:id"  element={<Edit_Doctors />}/>
      </Routes>
     <footer className='App-header'>
     <p>We are providing the medicle services</p> 
     
     <Moment subtract={{  hours: 12 }}>{date}</Moment>
     </footer>       
    </div>
  );
}

export default App;
