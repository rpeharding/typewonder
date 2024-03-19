import React from "react";
import { selectLoggedInUser, selectUsers } from "../redux/userSlice";
import { useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ProfileDetails from "../components/ProfileDetails";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Profile = () => {
  const users = useSelector(selectUsers);

  const { id } = useParams();
  console.log(users, id);
  const user =
    users &&
    users.find((item) => {
      console.log(item.id, Number(id));
      return item.id === Number(id);
    });

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <TopNav />
      <div className="profile-container">
        <div className="carousel-container">
          <img className="profile-img" src={user.mainImage} />
          <Link className="add-btn" to={user.socialLink}>
            Add
          </Link>
        </div>
        <ProfileDetails user={user} />
      </div>
      <Nav />
    </>
  );
};

export default Profile;
