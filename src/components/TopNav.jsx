import logo from "../assets/type-wonder-logo.svg";
import settings from "../assets/settings.svg";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <header>
      <div className="top-nav">
        <Link to={"/home/"}>
          <img className="logo" src={logo} alt="type wonder logo" />
        </Link>
        <img className="icon" src={settings} alt="type wonder logo" />
      </div>
    </header>
  );
};

export default TopNav;
