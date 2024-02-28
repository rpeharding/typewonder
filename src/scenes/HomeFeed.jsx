import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoCard from "../components/InfoCard";
import { selectUsers, setUserData } from "../redux/userSlice";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";

const HomeFeed = () => {
  const users = useSelector(selectUsers);

  console.log(users);

  return (
    <>
      <TopNav />
      <p className="filter">Filter </p>
      <div className="feed">
        {users &&
          users.map((user) => {
            console.log(user);
            return (
              <InfoCard
                key={user.id}
                name={user.firstName}
                age={user.age}
                pastimes={user.pastimes}
                image={user.mainImage}
                id={user.id}
              />
            );
          })}
      </div>
      <Nav />
    </>
  );
};

export default HomeFeed;
