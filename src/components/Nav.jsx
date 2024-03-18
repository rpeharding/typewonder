import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
// import chat from "../assets/chat.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
      <Link to={"/"}>
        <img className="icon" src={home} alt="home-icon" />
      </Link>

      {/* <img className="icon" src={chat} alt="chat-icon" /> */}
      <Link to={"/profile/"}>
        <img className="icon" src={profile} alt="profile-icon" />
      </Link>
    </div>
  );
};

export default Nav;
