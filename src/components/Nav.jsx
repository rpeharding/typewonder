import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import chat from "../assets/chat.svg";

const Nav = () => {
  return (
    <div className="main-nav">
      <img className="icon" src={home} alt="home-icon" />
      <img className="icon" src={chat} alt="chat-icon" />
      <img className="icon" src={profile} alt="profile-icon" />
    </div>
  );
};

export default Nav;
