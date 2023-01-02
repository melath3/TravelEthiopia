import { useEffect, useState } from "react"
import {Link} from "react-router-dom";
import axios from "axios";
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
const getCats =async ()=>{
  const res = await axios.get("/Catagories")
  setCats(res.data)
};
getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <br />
          <img className="sidebarImg" 
            src="/images/me.jpg"
            alt="" 
           />
           
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATAGORY</span>
      <ul className="sidebarList">
        {cats.map((c)=> (
        
          <div key= {c._id}>
            <Link   to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
          </div>
))}
      </ul>
     </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
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

    </div>
    </div>
  )
}
