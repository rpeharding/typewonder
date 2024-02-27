import logo from "../assets/type-wonder-logo.svg";
import settings from "../assets/settings.svg";

const TopNav = () => {
  return (
    <div className="top-nav">
      <img className="logo" src={logo} alt="type wonder logo" />
      <img className="icon" src={settings} alt="type wonder logo" />
    </div>
  );
};

export default TopNav;
