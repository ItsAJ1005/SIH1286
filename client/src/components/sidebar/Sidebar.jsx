import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  // Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  // Event,
  School,
} from "@material-ui/icons";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";
import Feed from "../feed/Feed";
import { Link } from "@material-ui/core";
// import Chats from "../chats/Chats";


function toggleFeed(){
  <Feed/>
}


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText" onClick={toggleFeed}>Feed</span>
          </li>

          <li className="sidebarListItem">
          <Chat className="sidebarIcon" />
            <Link to="/chats/Chats">
          <span className="sidebarListItemText">Chats</span>
        </Link>
          </li>


          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          {/* <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li> */}
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Case Kart</span>
          </li>
          {/* <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li> */}
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Legal Services</span>
          </li>
        </ul>
       
        <hr className="sidebarHr" />

        <button type="filterbutton">Filter</button>
          <div className ="Services"><big><strong>Services:</strong></big></div>
        
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}

        {/* bootstrap */}

        <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Personal/Family
  </button>
  <ul class="dropdown-menu dropdown-menu-light">
    <li><a class="dropdown-item active" href="/">Divorce</a></li>
    <li><a class="dropdown-item" href="/">Famlily Dispute</a></li>
    <li><a class="dropdown-item" href="/">Child custody</a></li>
    <li><a class="dropdown-item" href="/">Muslim Law</a></li>
    <li><a class="dropdown-item" href="/">Medical Negligence</a></li>
    <li><a class="dropdown-item" href="/">Motor Accident</a></li>

  </ul>
</div>



<div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Criminal/Property
  </button>
  <ul class="dropdown-menu dropdown-menu-light">
    <li><a class="dropdown-item active" href="/">Criminal</a></li>
    <li><a class="dropdown-item" href="/">Property</a></li>
    <li><a class="dropdown-item" href="/">Tenet</a></li>
    <li><a class="dropdown-item" href="/">Cyber crime</a></li>
    <li><a class="dropdown-item" href="/">Wills/Trusts</a></li>
    <li><a class="dropdown-item" href="/">Labour & service</a></li>

  </ul>
</div>


<div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Civil/Debt 
  </button>
  <ul class="dropdown-menu dropdown-menu-light">
    <li><a class="dropdown-item active" href="/">Documentation</a></li>
    <li><a class="dropdown-item" href="/">Consumer Court</a></li>
    <li><a class="dropdown-item" href="/">Civil</a></li>
    <li><a class="dropdown-item" href="/">Cheque Bounce</a></li>
    <li><a class="dropdown-item" href="/">Recovery</a></li>

  </ul>
</div>


  <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Corporate Law 
  </button>
  <ul class="dropdown-menu dropdown-menu-light">
    <li><a class="dropdown-item active" href="/">Arbitration</a></li>
    <li><a class="dropdown-item" href="/">Trade and Copyright</a></li>
    <li><a class="dropdown-item" href="/">Customs</a></li>
    <li><a class="dropdown-item" href="/">Startup</a></li>
    <li><a class="dropdown-item" href="/">Banking/Finance</a></li>
    <li><a class="dropdown-item" href="/">GST</a></li>
    <li><a class="dropdown-item" href="/">Tax</a></li>
    <li><a class="dropdown-item" href="/">Corporate</a></li>




  </ul>
</div>







      </div>
    </div>
  );
}
