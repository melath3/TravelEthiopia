import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout =() =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
       
      <a href= "https://www.facebook.com/melat.hagos.10/">
      <i className="topIcon fa-brands fa-facebook-square"></i>
      </a>
      <a href= "https://twitter.com/melathagos1">
      <i className="topIcon fa-brands fa-twitter-square"></i>
      </a>
      <a href= "https://www.pinterest.com/bettymelon3/">
      <i className="topIcon fa-brands fa-pinterest-square"></i>
      </a>
      <a href= "https://www.instagram.com/melat.hagos/">
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
           <Link className="link" to="/about">About</Link>
          </li>
          <li className="topListItem">
           <Link className="link" to="/contact">Contact</Link>

          </li>
          <li className="topListItem">
           <Link className="link" to="/write">Write</Link>

          </li>
          <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (
        <Link to="/settings">
        <img 
                 className="topImg"
                 src={PF+user.profilePic} 
                 alt="" 
              /></Link>
          ) : (
              <ul className="topList">
               <li className="topListItem">
                 <Link className="link" to="/login">
                   LOGIN
                 </Link>
               </li>
               <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
               </li>
              </ul>

            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
    </div>
  )
}
