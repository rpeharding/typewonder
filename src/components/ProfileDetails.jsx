import React from "react";
import { birthdateToAge } from "../utils/birthdateToAge";
import { calculateYearsSince } from "../utils/yearsSinceDate";
import { Link } from "react-router-dom";

const ProfileDetails = ({ user }) => {
  console.log(user);
  return (
    <div className="prof-details-container flex-col">
      <div className="flex-row bio-container">
        <div className="bio-intro">
          <h3>
            {user.firstName}, {birthdateToAge(user.birthdate)}
          </h3>
          <p>{user.location.cityName}</p>
          <p>{user.bio}</p>
        </div>
        <div className="friends">
          <div>
            <h4>50</h4>
            <p>diabuddies</p>
          </div>

          {/* <Link className="btn" to={user.socialLink}>
            Add
          </Link> */}
        </div>
      </div>

      <div className="pastimes-block flex-col">
        <h4>Adventure pastimes</h4>
        <div className="pastime">
          {user.pastimes.map((pastime, index) => (
            <p key={index}>{pastime}</p>
          ))}
        </div>
      </div>
      <div className="flex-col">
        <h4>Something I dream of achieving with diabetes</h4>
        <p>{user.goal}</p>
        <h4>I have been living with Type 1 for</h4>
        <p>{calculateYearsSince(user.yearOfDiagnosis)} years</p>
        <Link className="secondary-btn" to={user.socialLink}>
          connect on socials
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
