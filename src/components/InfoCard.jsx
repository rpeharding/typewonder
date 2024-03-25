import React from "react";
import { Link } from "react-router-dom";
import { birthdateToAge } from "../utils/birthdateToAge";

const InfoCard = ({ name, birthdate, pastimes, image, id }) => {
  const topPastimes = pastimes.slice(0, 3);

  return (
    <Link to={"/profile/" + id}>
      <div className="info-card">
        <img className="card-image" src={image} />
        <div className="card-info flex-row">
          <div>
            <h3>
              {name}, {birthdateToAge(birthdate)}
            </h3>
            <div className="pastime-section">
              <p>Enjoys:</p>
              <div className="pastime">
                {topPastimes.map((pastime, index) => (
                  <p key={index}>{pastime}</p>
                ))}
              </div>
            </div>
          </div>
          <button className="icon-btn">i</button>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
