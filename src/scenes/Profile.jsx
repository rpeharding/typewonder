import React from "react";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";

const Profile = () => {
  const users = useSelector(selectUser);
  console.log(users);

  const user = users[0];
  console.log(user.firstName);

  return (
    <>
      <TopNav />
      <div className="profile-container">
        <div className="carousel-container">
          <img className="profile-img" src={user.mainImage} />
        </div>

        <div>
          <h3>
            {user.firstName}, {user.age}
          </h3>
          <p>{user.location}</p>
          <p>{user.bio}</p>
          <p>favourite adventure pastimes:</p>
          <div className="pastime">
            {user.pastimes.map((pastime) => (
              <p>{pastime}</p>
            ))}
          </div>
          <p>{user.goal}</p>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Profile;
