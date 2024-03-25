import { useSelector } from "react-redux";
import {
  selectPastimeFilters,
  selectPastimes,
  setPastimeFilters,
} from "../redux/pastimeSlice";
import { selectUsers } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import AgeFilter from "./AgeFilter";

const SideBarFilterPanel = () => {
  const pastimes = useSelector(selectPastimes);
  const pastimeFilters = useSelector(selectPastimeFilters);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  // select pastimes
  const handleChange = (e) => {
    dispatch(setPastimeFilters(e.target.id));
  };

  const handleAgeChange = (e) => {
    console.log(e.target.value);
  };

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

          <AgeFilter />
        </details>
      </div>
      <div>
        <details id="multiselect">
          <summary>Location</summary>

          <form>
            <div className="filter-item">
              <label className="filter-label" htmlFor="location">
                select location radius
              </label>
              <input
                className="range"
                type="range"
                min={0}
                max={100}
                step={1}
                // value={`${ageRange[0]},${ageRange[1]}`}
                // onChange={handleAgeChange}
              />
              <p>
                {/* Filtering age from {ageRange[0]} to {ageRange[1]} years old */}
              </p>
            </div>
          </form>
        </details>
      </div>
    </div>
  );
};

export default SideBarFilterPanel;
