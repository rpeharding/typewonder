import { useDispatch, useSelector } from "react-redux";
import { setAgeRange, selectAgeRange } from "../redux/ageFilterSlice";

const AgeFilter = () => {
  const { minAge, maxAge } = useSelector(selectAgeRange);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setAgeRange({ id: e.target.id, value: e.target.value }));
  };

  return (
    <div>
      <form className="flex-row">
        <div className="age-filter flex-row">
          <label htmlFor="minAge">Min</label>
          <input
            type="number"
            id="minAge"
            value={minAge}
            onChange={handleChange}
          />
        </div>
        <div className="age-filter flex-row">
          <label htmlFor="maxAge">Max</label>
          <input
            type="number"
            id="maxAge"
            value={maxAge}
            min={minAge}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default AgeFilter;
