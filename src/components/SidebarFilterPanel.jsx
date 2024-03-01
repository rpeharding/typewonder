import { useSelector } from "react-redux";
import {
  selectPastimeFilters,
  selectPastimes,
  setPastimeFilters,
} from "../redux/pastimeSlice";
import { selectUsers } from "../redux/userSlice";
import { setPastimesData } from "../redux/pastimeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SideBarFilterPanel = () => {
  const pastimes = useSelector(selectPastimes);
  const pastimeFilters = useSelector(selectPastimeFilters);
  const users = useSelector(selectUsers);

  const [selectedPastimes, setSelectedPastimes] = useState([]);
  const dispatch = useDispatch();
  // select pastimes
  const handleChange = (e) => {
    dispatch(setPastimeFilters(e.target.id));
  };

  console.log(selectedPastimes);

  const ages = Array.from(
    users.map((user) => {
      return user.age;
    })
  );

  return (
    <div className="filter-container">
      <div>
        <details id="multiselect">
          <summary>Adventure Pastimes</summary>

          <form>
            {pastimes.map((pastime, index) => {
              return (
                <div key={index} className="filter-item flex-row">
                  <label className="filter-label" htmlFor={pastime}>
                    {pastime}
                  </label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    id={pastime}
                    name={pastime}
                    checked={pastimeFilters.includes(pastime) ? true : false}
                  />
                </div>
              );
            })}
          </form>
        </details>
      </div>
      <div>
        <details id="multiselect">
          <summary>Age</summary>

          <form>
            <div className="filter-item flex-column">
              <div className="flex-row">
                <label className="filter-label" htmlFor="18-25">
                  18-25
                </label>
                <input type="checkbox" id="18-25" name="18-25" value="18-25" />
              </div>
              <div className="flex-row">
                <label className="filter-label" htmlFor="26-35">
                  26-35
                </label>
                <input type="checkbox" id="26-35" name="26-35" value="26-35" />
              </div>
              <div className="flex-row">
                <label className="filter-label" htmlFor="36-45">
                  36-45
                </label>
                <input type="checkbox" id="36-45" name="36-45" value="36-45" />
              </div>
              <div className="flex-row">
                <label className="filter-label" htmlFor="46-55">
                  46-55
                </label>
                <input type="checkbox" id="46-55" name="46-55" value="46-55" />
              </div>
              <div className="flex-row">
                <label className="filter-label" htmlFor="56+">
                  56+
                </label>
                <input type="checkbox" id="56+" name="56+" value="56+" />
              </div>
            </div>
          </form>
        </details>
      </div>
      <div>
        <details id="multiselect">
          <summary>Location</summary>

          <form>
            <div className="filter-item flex-row">
              <label className="filter-label" htmlFor="location">
                Within x miles
              </label>
              <input
                type="checkbox"
                id="location"
                name="location"
                value="location"
              />
            </div>
          </form>
        </details>
      </div>
    </div>
  );
};

export default SideBarFilterPanel;
