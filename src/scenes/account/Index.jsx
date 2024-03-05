import { useDispatch, useSelector } from "react-redux";

import { selectLoggedIn, selectScreen } from "../../redux/authSlice";
import Login from "./Login";
import HomeFeed from "../HomeFeed";
import OnboardContainer from "./OnboardContainer";

const Index = () => {
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);

  return (
    <>
      {screen === 0 && <OnboardContainer />}
      {screen === 1 && <Login />}
      {screen === 2 && <HomeFeed />}
    </>
  );
};

export default Index;
