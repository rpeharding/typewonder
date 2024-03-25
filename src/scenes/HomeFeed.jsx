import React from "react";
import { useSelector } from "react-redux";
import InfoCard from "../components/InfoCard";
import { selectLoggedInUser, selectUsers } from "../redux/userSlice";
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Controls from "../components/Controls";
import { selectPastimeFilters } from "../redux/pastimeSlice";
import { selectAgeRange } from "../redux/ageFilterSlice";
import { birthdateToAge } from "../utils/birthdateToAge";

const HomeFeed = () => {
  const totalUsers = useSelector(selectUsers);
  const loggedInUser = useSelector(selectLoggedInUser);
  const pastimeFilters = useSelector(selectPastimeFilters);
  const { minAge, maxAge } = useSelector(selectAgeRange);

  console.log(loggedInUser, totalUsers);

  const filterUsers = (loggedInUser, totalUsers) => {
    return totalUsers.filter((user) => user.id !== loggedInUser.id);
  };

  const users = filterUsers(loggedInUser, totalUsers);

  console.log(users);

  if (!users) {
    return <p>loading users...</p>;
  }

  let filtered = [...users];

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

  filtered = filtered.filter(
    (user) =>
      birthdateToAge(user.birthdate) >= minAge &&
      birthdateToAge(user.birthdate) <= maxAge
  );

  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <Controls />

        <div className="feed">
          {filtered.map((user) => {
            console.log(user);
            return (
              <InfoCard
                key={user.id}
                name={user.firstName}
                birthdate={user.birthdate}
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
