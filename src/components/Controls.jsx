import { useState } from "react";
import SidebarFilterPanel from "./SidebarFilterPanel";
import filter from "../assets/filter.svg";
import close from "../assets/cross.svg";

const Controls = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const openFilterPanel = () => setOpenFilter(!openFilter);

  return (
    <div className={openFilter ? "controls-active" : "controls"}>
      <div className="filter-icon">
        <img
          src={openFilter ? close : filter}
          className="icon"
          onClick={openFilterPanel}
        />
      </div>
      {openFilter && <SidebarFilterPanel />}
    </div>
  );
};

export default Controls;
