import { useContext, useEffect, useState } from "react";
// import Post from "../post/Post";
// import Share from "../share/Share"; 
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import CloseFriend from "../closeFriend/CloseFriend";
// import { Users } from "../../dummyData";


export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  const redirectToExternalSite = () => {
    window.location.href = "https://sailesh3000.github.io/SIHhomepage/";
  };

  function RedirectButton() {
    const [isClicked, setIsClicked] = useState(false);
  
    const redirectToExternalSite = () => {
      setIsClicked(true);
      setTimeout(() => {
        window.location.href = "https://sailesh3000.github.io/SIHhomepage/";
      }, 300); 
    };}

  return (

    <div className="feed">
      <div className="feedWrapper">
        
      <button
      type="button"
      className="btn btn-success active my-3 mx-2"
      data-bs-toggle="button"
      aria-pressed="true"
      onClick={redirectToExternalSite}>
      Learn more about Legal Awareness!
    </button>
    
 
      

        {/* {(!username || username === user.username) && <Share />} */}
        {/* {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
        
        {/* {<ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>} */}

<div id="chatbot-icon" class="chatbot-icon">
        <div class="chatbot-icon-inner">
            <img src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png" alt="Chatbot Icon"/>
        </div>
    </div>





    <div className="card" style={{ width: '18rem' }}>
    <img src='https://media.licdn.com/dms/image/C4D03AQG47qu9IflHtA/profile-displayphoto-shrink_800_800/0/1645991350104?e=1701302400&v=beta&t=5tY1tQs2zd6ThCsXDjxGE-lqQ5s1mQ4wiyDP5JnTBxE' className="card-img-top" alt="display picture" />
  <div className="card-body">
    <h5 className="card-title">Naveen kumar Desai</h5>
    <p className="card-text">Pukhuryasol, West Bengal</p>
    <p className="card-text">Experience:25 years,
Enrollment Number : P/144-A-/1996,

COURTS
Delhi High Court, District Court, Kharagpur, District Court,kanpur;

p.no:9134578121

mail.id:naveenmail453@gmail.com</p>


    <a href="/" className="btn btn-primary">Get Quote</a>
  </div>
</div>



<div className="card" style={{ width: '18rem' }}>
    <img src='https://media.licdn.com/dms/image/C4D03AQF_eDz8f0wRNA/profile-displayphoto-shrink_800_800/0/1662832475594?e=1701302400&v=beta&t=vdzmHpx2-pLhVRv2nEtS1HBUtVJyinfkvjB_Ts6zHoY' className="card-img-top" alt="display picture" />
  <div className="card-body">
    <h5 className="card-title">Jaya Jankilakshmi</h5>
    <p className="card-text">guindy, Chennai</p>
    <p className="card-text">Experience:33 years

Advocate jaya jankilakshmi holds dual qualifications as Solicitor (England & Wales) and a Lawyer in India with extensive exposure to most areas of law.
Enrollment Number : MS/133/1990

COURTS
Bangalore District Court, Consumer Court Chennai, Distrcit Court, Coimbatore, District Court, Chennai, District Court, Ranga Reddy, Madras High Court, Metropolitan Magistrate Courts, Chennai, Tamil Nadu State Consumer Disputes Redressal Commission

p.no:8134578100

mail.id:advJAnaki5@gmail.com</p>


    <a href="/" className="btn btn-primary">Get Quote</a>
  </div>
</div>




<div className="card" style={{ width: '18rem' }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhv5s7cZsNp0NnLSCAwuRYqqONuZNoKKgbQ&usqp=CAU' className="card-img-top" alt="display picture" />
  <div className="card-body">
    <h5 className="card-title">kamalesh Madhav </h5>
    <p className="card-text">Mundhwa, Pune</p>
    <p className="card-text">Experience:27 years

Advocate kamalesh Madhav has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired excellent professional experience in providing legal consultancy and advisory services.

Advocate Ravi enrolled with the Bar Council of Maharashtra and Goa in 1996.

Enrollment Number : MAH/3632/1996


COURTS
Bombay High Court, District and Sessions Court, Mumbai, District Court, Satara

p.no:8994578555

mail.id:kamal.mads@gmail.com
</p>


    <a href="/" className="btn btn-primary">Get Quote</a>
  </div>
</div>



<div className="card" style={{ width: '18rem' }}>
    <img src='https://media.licdn.com/dms/image/D4D03AQH6rpVwS4RwKw/profile-displayphoto-shrink_800_800/0/1672147397114?e=1701302400&v=beta&t=SmR3U-F44fFwA4kTzkhe94GdxVI6Ut2lOM6shuU67NE' className="card-img-top" alt="display picture" />
  <div className="card-body">
    <h5 className="card-title">Jojy </h5>
    <p className="card-text">Mundhwa, Pune</p>
    <p className="card-text">Joseph Jojy n associates is an establishment in which Adv Jojy is the Chief Attorney providing services in various fields of Cheque Bounce Matters, Criminal Matters, Civil Matters, Divorce Matters, Documentation Matters, Family Matters and drafting and vetting of various agreements and documents.
COURTS
District Court, Gundlupet, District Court, Heggadadevana kote, District Court, Hunsur, District Court, Kollegal, District Court, Krishnarajanagara, District Court, Krishnarajpet, District Court, Mandya, District Court, Mysore, District Court, Nanjangud, Karnataka High Court

p.no:7134555121

mail.id:josephjoly@gmail.com

</p>


    <a href="/" className="btn btn-primary">Get Quote</a>
  </div>
</div>






      </div>
    </div>
  );
}
