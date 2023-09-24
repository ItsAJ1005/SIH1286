import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">inLaw</span>
        </Link>
        {/* <img src='https://i.ibb.co/4KXC9NM/Screenshot-2023-09-24-142138-removebg-preview.png' alt ='logo'  /> */}
      </div>
      <div className="topbarCenter">
        <div className="searchbar"> 
          <Search className="searchIcon" />
          <input
            placeholder="Search for lawyer, services or pincode"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
        <a href="/" className="topbarLinkText">
        <span className="topbarLinkText">Homepage</span>
        </a>
         
          <span className="topbarLink">Case Cart</span>
          <span className="topbarLink" >Find a lawyer</span>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="dp"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
