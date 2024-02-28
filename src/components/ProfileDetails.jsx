import React from "react";

const ProfileDetails = ({ user }) => {
  return (
    <div className="prof-details-container flex-col">
      <h3>
        {user.firstName}, {user.age}
      </h3>
      <p>{user.location}</p>
      <p>{user.bio}</p>

      <div className="pastimes-block flex-col">
        <h4>Adventure pastimes</h4>
        <div className="pastime">
          {user.pastimes.map((pastime) => (
            <p>{pastime}</p>
          ))}
        </div>
      </div>
      <div className="flex-col">
        <h4>Something I dream of achieving with diabetes</h4>
        <p>{user.goal}</p>
        <p>add social links</p>
        <p>add friend count</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
