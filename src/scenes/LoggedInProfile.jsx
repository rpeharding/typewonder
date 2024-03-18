import React from "react";
import { selectLoggedInUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ProfileDetails from "../components/ProfileDetails";

const LoggedInProfile = () => {
  const loggedInUser = useSelector(selectLoggedInUser);
  console.log(loggedInUser);
  return (
    <>
      <TopNav />
      <div className="profile-container">
        <div className="carousel-container">
          <img className="profile-img" src={loggedInUser.mainImage} />
        </div>
        <ProfileDetails user={loggedInUser} />
      </div>
      <Nav />
    </>
  );
};

export default LoggedInProfile;
