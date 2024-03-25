import React from "react";
import { selectLoggedInUser, selectUsers } from "../redux/userSlice";
import { useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ProfileDetails from "../components/ProfileDetails";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Profile = () => {
  const users = useSelector(selectUsers);

  const { id } = useParams();
  const user =
    users &&
    users.find((item) => {
      return item.id === Number(id);
    });

  if (!user) {
    return <p>Loading...</p>;
  }

  const images = [
    user.mainImage,
    ...user.profileImages.map((image) => image.image),
  ];

  return (
    <>
      <TopNav />
      <div className="profile-container">
        <div className="carousel-container">
          <Carousel images={images} />
          {/* <img className="profile-img" src={user.mainImage} /> */}
          <Link className="add-btn">Add</Link>
        </div>
        <ProfileDetails user={user} />
      </div>
      <Nav />
    </>
  );
};

export default Profile;
