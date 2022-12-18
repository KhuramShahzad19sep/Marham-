import { NavLink } from "react-router-dom";

const Pateint_Records=()=>{
   
    const NavLinkCSS=({isActive})=>{
          return {
            fontWeight: isActive ?  'bold' :'normal',
            fontSize : isActive ? '40px' : '30px',
            colour :isActive  ? 'White' :'White'
          }
    }
    return(
<>
<nav>
    {/* <NavLink style={NavLinkCSS} to ='/User'> User</NavLink>
    <NavLink style={NavLinkCSS} to ='/Contact2'> Contact2</NavLink> */}
  <NavLink style={NavLinkCSS} to ='/Patient'>Pateint Records</NavLink>
  {/* <NavLink style={NavLinkCSS} to ='/User' >User</NavLink>
  <NavLink style={NavLinkCSS} to ='/Contact2'>Contact</NavLink>
  <NavLink style={NavLinkCSS} to ='/Address'>Address</NavLink>
  <NavLink style={NavLinkCSS} to ='/USER'>USER</NavLink> */}
  
  {/* <NavLink  to ='*'></NavLink> */}
</nav>
</>
    );
};export default Pateint_Records;