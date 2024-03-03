import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoCard from "../components/InfoCard";
import { selectUsers, setUserData } from "../redux/userSlice";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import { selectScreen } from "../redux/authSlice";
import Controls from "../components/Controls";
import { selectPastimeFilters } from "../redux/pastimeSlice";

const HomeFeed = () => {
  const screen = useSelector(selectScreen);
  const users = useSelector(selectUsers);
  const pastimeFilters = useSelector(selectPastimeFilters);

  if (!users) {
    return <p>loading users...</p>;
  }

  let filtered = [...users];
  console.log(filtered);

  if (users && pastimeFilters.length > 0) {
    filtered = filtered.filter((user) => {
      let found = false;
      user.pastimes.forEach((pastime) => {
        if (pastimeFilters.includes(pastime)) {
          found = true;
        }
      });
      return found;
    });
  }

  console.log(filtered);

  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <Controls />

        <div className="feed">
          {filtered.map((user) => {
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
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  );
};

export default HomeFeed;
