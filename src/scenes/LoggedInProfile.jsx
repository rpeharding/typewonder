import React from "react";
import { selectLoggedInUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ProfileDetails from "../components/ProfileDetails";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
const LoggedInProfile = () => {
  const loggedInUser = useSelector(selectLoggedInUser);
  console.log(loggedInUser);

  const images = [
    loggedInUser.mainImage,
    ...loggedInUser.profileImages.map((image) => image.image),
  ];
  return (
    <>
      <TopNav />
      <div className="profile-container">
        <div className="carousel-container">
          <Carousel images={images} />
          {/* <img className="profile-img" src={loggedInUser.mainImage} /> */}
          <Link className="add-btn">edit</Link>
        </div>
        <ProfileDetails user={loggedInUser} />
      </div>
      <Nav />
    </>
  );
};

export default LoggedInProfile;
