import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import { selectScreen } from "../../redux/authSlice";
import Login from "./Login";
import HomeFeed from "../HomeFeed";
import StepOneOnboard from "./StepOneOnboard";

const Index = () => {
  const screen = useSelector(selectScreen);

  return (
    <>
      {screen === 0 && <SignUp />}
      {screen === 1 && <StepOneOnboard />}
      {screen === 2 && <Login />}
      {screen === 3 && <HomeFeed />}
    </>
  );
};

export default Index;
