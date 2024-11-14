import { LOGO_URL } from "../utils/contants";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

    useEffect(() => {
       //console.log("useEffect called");
    } ,[]); 









    return( 
      <div className="flex justify-between bg-pink-100 shadow-lg ">
        <div className="logo-container">
          <img 
            className="w-56" 
            src= {LOGO_URL}
          />
        </div>
        <div className="flex items-center ">
          <ul className = "flex p-4 m-5">
            <li className = "px-4">Online Status: {onlineStatus ? "✅" : "🔻"}</li>
            <li className = "px-4"> <Link to = "/"> Home </Link> </li>
            <li className = "px-4"> <Link to = "/about" > About Us </Link> </li>
            <li className = "px-4"><Link to = "/grocery"> Grocery</Link></li>
            <li className = "px-4"><Link to = "/contact"> Contact Us </Link> </li>
            <li>Cart</li>
            <button className="login-button" onClick={() => {
              btnNameReact === "Login" ?
               setbtnNameReact ("LogOut") : 
                setbtnNameReact ("Login") }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
 };
 export default Header;