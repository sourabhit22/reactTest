import { Link } from "react-router-dom";

function Header() {
  return(
  		<>
  			<a href="/about" >About</a>
  			<a href="/service" >Service</a>
            <a href="/user" >User</a> Anckor tag
               <br />
             <Link to= {{ pathname:"/about" }}>About us</Link>
             <Link to= {{ pathname:"/service" }}>Service</Link>
             <Link to= {{ pathname:"/contact" }}>Contact</Link>
             <Link to= {{ pathname:"/list" }}>List Data</Link>
             <Link to= {{ pathname:"/user" }}>User</Link> link tag
  		</>
  	);
}
export default Header;