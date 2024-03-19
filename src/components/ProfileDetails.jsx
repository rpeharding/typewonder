import React from "react";
import { birthdateToAge } from "../utils/birthdateToAge";
import { calculateYearsSince } from "../utils/yearsSinceDate";
import { Link } from "react-router-dom";

const ProfileDetails = ({ user }) => {
  console.log(user);
  const approvedFriends = user.diabuddies.filter((buddy) => {
    return buddy.approved === true;
  });
  console.log(approvedFriends);

  return (
    <div className="prof-details-container flex-col">
      <div className="flex-row bio-container">
        <div className="bio-intro">
          <div className="flex-row name-friends">
            <h3>
              {user.firstName}, {birthdateToAge(user.birthdate)}
            </h3>
            <div className="friends">
              <div>
                <h4>{approvedFriends.length}</h4>
                <p>diabuddies</p>
              </div>
            </div>
          </div>

          <p>{user.location.cityName}</p>
          <p>{user.bio}</p>
        </div>
        {/* <div className="friends">
          <div>
            <h4>{approvedFriends.length}</h4>
            <p>diabuddies</p>
          </div>
        </div> */}
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
