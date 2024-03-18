import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { setScreen } from "../redux/authSlice";

const Settings = () => {
  const dispatch = useDispatch();

  return (
    <div className="settings-container">
      <Link>Account Settings</Link>
      <button
        className="btn"
        onClick={() => {
          dispatch(setLoggedInUser(undefined));
          dispatch(setScreen(1));
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;
