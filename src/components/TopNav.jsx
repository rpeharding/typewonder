import logo from "../assets/type-wonder-logo.svg";
import settings from "../assets/settings.svg";
import { Link } from "react-router-dom";
import Settings from "./Settings";
import { useState } from "react";

const TopNav = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const openSettingsPanel = () => setOpenSettings(!openSettings);

  return (
    <header>
      <div className="top-nav">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="type wonder logo" />
        </Link>
        <img
          className="icon"
          src={settings}
          alt="type wonder logo"
          onClick={openSettingsPanel}
        />
      </div>
      {openSettings && <Settings />}
    </header>
  );
};

export default TopNav;
